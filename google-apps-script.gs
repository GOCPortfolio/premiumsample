/**
 * RSVP collector + entry-pass check-in for the Ene & Oche wedding site.
 * Paste this whole file into Extensions > Apps Script of a Google Sheet,
 * then Deploy > New deployment > Web app (Execute as: Me, Who has access: Anyone).
 * Paste the Web app URL into CONFIG.rsvp.endpoint in script.js.
 *
 * Every guest who accepts gets a unique code (and QR code) on the website.
 * The code is saved in the "Code" column. On the day, use the "Wedding" menu
 * in the sheet > "Check in a guest" and scan or type the code.
 */
var SHEET_NAME = 'RSVPs';
var HEADERS = ['Received', 'Name', 'Phone', 'Attending', 'Guests', 'Message', 'Code', 'Checked in', 'Reminded'];
var COL_CODE = 7, COL_CHECKED = 8, COL_REMINDED = 9;

// Passcodes for the guest desk (admin.html). CHANGE BOTH before you deploy.
// ADMIN sees the whole dashboard. USHER can only check guests in.
var ADMIN_KEY = 'GOC';
var USHER_KEY = 'GOC123';
var CODE_RE = /^GE-[A-HJ-NP-Z2-9]{8}$/;

// Stops spreadsheet formulas such as =HYPERLINK(...) being run from a guest's text.
function safe_(v) {
  v = String(v == null ? '' : v).replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, '').trim();
  if (v.length > 500) v = v.slice(0, 500);
  return /^[=+\-@\t\r]/.test(v) ? "'" + v : v;
}

function makeCode_() {
  var A = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789', s = 'GE-';
  for (var i = 0; i < 8; i++) s += A.charAt(Math.floor(Math.random() * A.length));
  return s;
}

function getSheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
  // Create the header row, or bring an older 6-column sheet up to date (adds Code and Checked in).
  var have = sheet.getLastRow() === 0 ? [] : sheet.getRange(1, 1, 1, HEADERS.length).getValues()[0];
  if (have.join('|') !== HEADERS.join('|')) {
    sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]).setFontWeight('bold');
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function findCodeRow_(sheet, code) {
  var last = sheet.getLastRow();
  if (last < 2) return 0;
  var vals = sheet.getRange(2, COL_CODE, last - 1, 1).getValues();
  for (var i = 0; i < vals.length; i++) if (String(vals[i][0]).toUpperCase() === code) return i + 2;
  return 0;
}

function doPost(e) {
  var lock = LockService.getScriptLock();
  try {
    lock.waitLock(10000);
    var data = JSON.parse((e && e.postData && e.postData.contents) || '{}');
    if (data.website) return ok_('ignored');                      // honeypot field was filled: a bot

    var sheet = getSheet_();
    var attending = safe_(data.attending);

    // Only guests who accept get a code. Use the one the website made (it is already on their QR code).
    var code = '';
    if (attending === 'Joyfully accept') {
      code = String(data.code || '').toUpperCase().trim();
      if (!CODE_RE.test(code)) code = makeCode_();               // site did not send a valid one
      if (findCodeRow_(sheet, code)) return ok_('duplicate');    // same submission sent twice: keep the first
    }

    var row = sheet.getLastRow() + 1;
    sheet.getRange(row, 3).setNumberFormat('@');                  // text format keeps the leading zero in phone numbers
    sheet.getRange(row, 1, 1, HEADERS.length).setValues([[
      new Date(),
      safe_(data.name),
      safe_(data.phone),
      attending,
      Number(data.guests) || 0,
      safe_(data.message),
      code,
      '',
      ''
    ]]);
    return ok_('saved');
  } catch (err) {
    return ok_('error: ' + err);
  } finally {
    try { lock.releaseLock(); } catch (x) {}
  }
}

function role_(k) {
  k = String(k || '');
  if (k && k === ADMIN_KEY && k.indexOf('CHANGE-ME') !== 0) return 'admin';
  if (k && k === USHER_KEY && k.indexOf('CHANGE-ME') !== 0) return 'usher';
  return '';
}
function json_(o) { return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON); }

// Used by admin.html. ?action=auth|list|checkin|remind&key=PASSCODE
function doGet(e) {
  var p = (e && e.parameter) || {};
  if (!p.action) return ok_('RSVP endpoint is live');
  var role = role_(p.key);
  if (!role) return json_({ ok: false, error: 'auth' });
  var lock = LockService.getScriptLock();
  try {
    lock.waitLock(10000);
    if (p.action === 'auth') return json_({ ok: true, role: role });
    var sheet = getSheet_();
    if (p.action === 'checkin') {
      var code = String(p.code || '').toUpperCase().replace(/\s+/g, '');
      var row = CODE_RE.test(code) ? findCodeRow_(sheet, code) : 0;
      if (!row) return json_({ ok: true, status: 'notfound' });
      var r = sheet.getRange(row, 1, 1, HEADERS.length).getValues()[0];
      if (r[COL_CHECKED - 1]) return json_({ ok: true, status: 'already', name: r[1], guests: r[4], at: new Date(r[COL_CHECKED - 1]).toISOString() });
      var now = new Date();
      sheet.getRange(row, COL_CHECKED).setValue(now).setNumberFormat('d MMM yyyy, h:mm a');
      sheet.getRange(row, 1, 1, HEADERS.length).setBackground('#d9ead3');
      return json_({ ok: true, status: 'checked', name: r[1], guests: r[4], at: now.toISOString() });
    }
    if (role !== 'admin') return json_({ ok: false, error: 'auth' });
    if (p.action === 'list') {
      var last = sheet.getLastRow();
      var vals = last < 2 ? [] : sheet.getRange(2, 1, last - 1, HEADERS.length).getValues();
      var iso = function (d) { return d ? new Date(d).toISOString() : ''; };
      return json_({ ok: true, rows: vals.map(function (v, i) {
        return { id: i + 2, received: iso(v[0]), name: v[1], phone: String(v[2]), attending: v[3], guests: v[4], message: v[5], code: v[6], checkedIn: iso(v[7]), reminded: iso(v[8]) };
      }) });
    }
    if (p.action === 'remind') {
      var n = Number(p.row);
      if (!(n >= 2 && n <= sheet.getLastRow())) return json_({ ok: false, error: 'row' });
      var t = new Date();
      sheet.getRange(n, COL_REMINDED).setValue(t).setNumberFormat('d MMM yyyy, h:mm a');
      return json_({ ok: true, at: t.toISOString() });
    }
    return json_({ ok: false, error: 'action' });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  } finally {
    try { lock.releaseLock(); } catch (x) {}
  }
}

function ok_(msg) {
  return ContentService.createTextOutput(msg).setMimeType(ContentService.MimeType.TEXT);
}

/* ---------------- Day-of check-in (from the Google Sheet on a laptop or tablet) ---------------- */

function onOpen() {
  SpreadsheetApp.getUi().createMenu('Wedding').addItem('Check in a guest', 'checkIn').addToUi();
}

function checkIn() {
  var ui = SpreadsheetApp.getUi();
  var ask = ui.prompt('Check in a guest', 'Scan the QR code or type the code (for example GE-K7M4Q9XP):', ui.ButtonSet.OK_CANCEL);
  if (ask.getSelectedButton() !== ui.Button.OK) return;
  var code = ask.getResponseText().toUpperCase().replace(/\s+/g, '');
  var sheet = getSheet_();
  var row = CODE_RE.test(code) ? findCodeRow_(sheet, code) : 0;
  if (!row) { ui.alert('NOT FOUND', 'No RSVP has the code "' + code + '". Check the code or look the guest up by name.', ui.ButtonSet.OK); return; }

  var r = sheet.getRange(row, 1, 1, HEADERS.length).getValues()[0];
  var who = r[1] + ' (admits ' + r[4] + (r[4] === 1 ? ' guest)' : ' guests)');
  if (r[COL_CHECKED - 1]) {
    ui.alert('ALREADY CHECKED IN', who + '\nwas checked in at ' + Utilities.formatDate(new Date(r[COL_CHECKED - 1]), Session.getScriptTimeZone(), 'd MMM yyyy, h:mm a') + '.', ui.ButtonSet.OK);
    return;
  }
  sheet.getRange(row, COL_CHECKED).setValue(new Date()).setNumberFormat('d MMM yyyy, h:mm a');
  sheet.getRange(row, 1, 1, HEADERS.length).setBackground('#d9ead3');
  ui.alert('WELCOME', who + '\nis now checked in.', ui.ButtonSet.OK);
}
