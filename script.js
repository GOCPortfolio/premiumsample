/* ==========================================================================
   Ene & Oche wedding invitation
   --------------------------------------------------------------------------
   1) EDIT ONLY THE "CONFIG" OBJECT BELOW. Everything under the line
      "APP CODE" should never need editing.
   2) Items marked  TO CONFIRM  are placeholders waiting for real details.
   ========================================================================== */
const CONFIG = {
  site: {
    url: 'https://gocportfolio.github.io/premiumsample/'   // your live address (also set in index.html meta tags)
  },

  couple: {
    short: { bride: 'Ene', groom: 'Oche' },           // names shown big in the hero, footer, messages
    hashtag: '#GEMMY2026',
    tagline: 'Written by God, sealed in love',
    seal: 'G&E'
  },

  bride: {
    title: 'Miss',
    given: 'Ene Grace',
    surname: 'Adukwu',
    parents: 'Daughter of Late Mr Gabriel Ojile Adukwu & Mrs Virginia Adukwu',
    origin: 'Of Adum, Otukpa, Ogbadibo LGA, Benue State'
  },
  groom: {
    title: 'Mr',
    given: 'Emmanuel Oche',
    surname: 'Obeya',
    parents: 'Son of Prince John Audu Obeya (JP) & Mrs Joy Obeya',
    origin: 'Of Adum-oko, Orokam, Ogbadibo LGA, Benue State'
  },

  event: {
    startISO: '2026-12-30T10:00:00+01:00',            // Wednesday, 30 December 2026, 10:00 AM Lagos time
    timeZone: 'Africa/Lagos',
    tzLabel: 'WAT (UTC+1)',
    hours: 4,                                          // length used for the calendar entry
    cityLine: 'Otukpo, Benue State'
  },

  venues: [
    {
      label: 'Ceremony',
      name: 'Calvary Methodist Church',
      address: 'No 58 Jos Street, Otukpo, Benue State',
      time: '10:00 AM',
      mapQuery: 'Calvary Methodist Church, No 58 Jos Street, Otukpo, Benue State',
      mapsUrl: 'https://maps.app.goo.gl/kyK9eWu69npmpNwc9?g_st=ic'
    },
    {
      label: 'Reception',
      name: 'Luxe Haven Suites and Resort',
      address: '46 Old Otobi Road, G.R.A, Otukpo, Benue State',
      time: 'Immediately after the ceremony',
      mapQuery: 'Luxe Haven Suites And Resort, 46 Old Otobi Road G.r.a Otukpo Benue State',
      mapsUrl: 'https://maps.app.goo.gl/V1tmojbBs1yKYAov8?g_st=ic'
    }
  ],

  colours: [
    { name: 'White', hex: '#ffffff' },
    { name: 'Coffee Brown', hex: '#6b4226' },
    { name: 'Kelly Green', hex: '#4cbb17' },
    { name: 'Gold', hex: '#c9a24b', metal: true }
  ],

  contact: {
    callNumber: '08035357663',            // used for "Call to RSVP"
    whatsapp: '2348035357663',            // international format, no +
    person: 'Flt. Lt. P. E. Obeya',
    display: '0803 535 7663'
  },

  // Father of the Day: TO CONFIRM. Leave names empty ([]) to hide the whole section.
  father: { label: 'Father of the Day', names: [], role: '' },

  hero: {
    slides: [
      { src: 'assets/hero-1.webp', w: 900, h: 1063, alt: 'Ene and Oche in traditional attire, smiling' },
      { src: 'assets/hero-2.webp', w: 960, h: 1056, alt: 'Ene and Oche on the staircase in white and tan' },
      { src: 'assets/hero-3.webp', w: 960, h: 1332, alt: 'Ene and Oche laughing together in the doorway' },
      { src: 'assets/hero-4.webp', w: 960, h: 1146, alt: 'Ene and Oche, forehead to forehead, in black and white' }
    ],
    interval: 6500
  },

  story: {
    intro: 'May every new chapter bring us closer, every challenge make us stronger, and every year give us more reasons to be grateful for each other.',
    moments: [
      { label: 'Where it began', title: 'Introduced by our parents', text: 'We met through our parents in 2019.',
        img: 'assets/p0430-sm.webp', w: 560, h: 700, alt: 'Ene and Oche seated across a table, smiling at each other' },
      { label: 'The first chapter', title: 'Friends first', text: 'We were friends for just a month.',
        img: 'assets/l0414-sm.webp', w: 640, h: 474, alt: 'Ene looking back at Oche on the staircase' },
      { label: 'The long road', title: 'Seven beautiful years', text: 'We dated for 7 years.',
        img: 'assets/l0384-sm.webp', w: 640, h: 471, alt: 'Ene embracing Oche, her engagement ring in view' },
      { label: 'The big yes', title: 'The engagement', text: 'And then we got engaged.',
        img: 'assets/e04-sm.webp', w: 640, h: 444, alt: 'Oche kissing Ene on the cheek as she holds her bouquet and engagement ring' }
    ],
    closing: 'A chapter filled with beautiful moments and endless love.'
  },

  // Gallery: pre-wedding and engagement photos (e01 to e06) interleaved. "img" is the full size, "sm" the thumbnail.
  gallery: [
    { img: 'assets/p0292.webp',  w: 560, h: 662, sm: 'assets/p0292-sm.webp',  alt: 'Ene and Oche in black and wine traditional attire, hand in hand' },
    { img: 'assets/e01.webp',  w: 640, h: 497, sm: 'assets/e01-sm.webp',  alt: 'Ene resting her head on Oche’s shoulder, her engagement ring in view' },
    { img: 'assets/l0299.webp',  w: 640, h: 476, sm: 'assets/l0299-sm.webp',  alt: 'Ene and Oche side by side in coral beads and black agbada' },
    { img: 'assets/p0399.webp',  w: 560, h: 616, sm: 'assets/p0399-sm.webp',  alt: 'Ene and Oche on the staircase, photographed from below' },
    { img: 'assets/e04.webp',  w: 640, h: 444, sm: 'assets/e04-sm.webp',  alt: 'Oche kissing Ene’s cheek as she holds her bouquet of red roses' },
    { img: 'assets/l0414.webp',  w: 640, h: 474, sm: 'assets/l0414-sm.webp',  alt: 'Ene looking over her shoulder as Oche stands on the stairs' },
    { img: 'assets/p0335.webp',  w: 560, h: 669, sm: 'assets/p0335-sm.webp',  alt: 'A quiet black and white moment, foreheads touching' },
    { img: 'assets/e02.webp',  w: 560, h: 840, sm: 'assets/e02-sm.webp',  alt: 'Oche smiling as Ene rests her hand on his chest, among red roses' },
    { img: 'assets/l0384.webp',  w: 640, h: 471, sm: 'assets/l0384-sm.webp',  alt: 'Ene wrapping her arms around Oche against a velvet wall' },
    { img: 'assets/p0288.webp',  w: 560, h: 777, sm: 'assets/p0288-sm.webp',  alt: 'Ene and Oche laughing in a doorway of coloured lights' },
    { img: 'assets/e03.webp',  w: 560, h: 840, sm: 'assets/e03-sm.webp',  alt: 'Ene and Oche laughing together in a warm embrace' },
    { img: 'assets/l0300.webp',  w: 640, h: 450, sm: 'assets/l0300-sm.webp',  alt: 'Oche glancing aside as Ene smiles at the camera' },
    { img: 'assets/p0402.webp',  w: 560, h: 602, sm: 'assets/p0402-sm.webp',  alt: 'Ene and Oche leaning on the golden balcony railing' },
    { img: 'assets/e05.webp',  w: 560, h: 800, sm: 'assets/e05-sm.webp',  alt: 'Ene in a red dress, holding her bouquet before the heart of roses' },
    { img: 'assets/p0430.webp',  w: 560, h: 700, sm: 'assets/p0430-sm.webp',  alt: 'Ene and Oche sharing a smile at a small table in the dark' },
    { img: 'assets/p0429.webp',  w: 560, h: 700, sm: 'assets/p0429-sm.webp',  alt: 'Ene and Oche seated in front of a glowing screen' },
    { img: 'assets/e06.webp',  w: 560, h: 840, sm: 'assets/e06-sm.webp',  alt: 'Ene looking down at her ring as Oche holds her hands' },
    { img: 'assets/p0297d.webp', w: 560, h: 654, sm: 'assets/p0297d-sm.webp', alt: 'Ene and Oche laughing in coloured light' },
    { img: 'assets/p0297.webp',  w: 560, h: 647, sm: 'assets/p0297-sm.webp',  alt: 'Ene and Oche laughing, in black and white' },
    { img: 'assets/p0302.webp',  w: 560, h: 602, sm: 'assets/p0302-sm.webp',  alt: 'Portrait of Ene in her red and black coral beads' }
  ],

  toast: [
    'Lord, we thank You for the love You wrote for them before time began.',
    'May Your hand rest upon this home, and Your peace guard every room.',
    'Where there is joy, let it multiply; where there is trial, let faith stand firm.',
    'May they walk together in grace, pray together in truth, and grow together in love.',
    'Let their marriage be a testimony of Your goodness to all who behold it.',
    'Family and friends, please raise your glasses to Ene & Oche: written by God, sealed in love!'
  ],

  rsvp: {
    endpoint: 'https://script.google.com/macros/s/AKfycbzQh8qhebkDvs91L0NLTnjCUGn0Slw_s5b8lajfSkPch6_N6OleUHJ47LNYH8kLEwlL/exec',
    maxGuests: 10,
    passNote: 'Please save this pass and show it at the entrance on the day.'   // shown under the QR code
  },

  gifts: {
    message: 'Having you celebrate this special moment with us means the world. If you wish to make an additional gesture of love, you may do so through the account details provided below.',
    bank: 'OPay',
    name: 'Obeya Emmanuel Oche',
    account: '8149393444'
  },

  faq: [
    { q: 'What is the dress code?',
      p: ['Please dress in our colours of the day: White, Coffee Brown, Kelly Green and Gold.'], swatches: true },
    { q: 'Where will guests park?',
      // TO CONFIRM: replace with real parking details
      p: ['Parking details will be shared soon. For any help on the day, please contact our coordinator.'], contact: true },
    { q: 'Where can I stay?',
      p: ['The marriage team will be accommodated at Luxe Haven Suites and Resort. Guests who wish to make alternative lodging arrangements may also consider Exclusive Hotel, conveniently located close to the reception venue.'] },
    { q: 'Who can I contact?',
      p: ['For any question about the day, please reach out to our contact person.'], contact: true },
    { q: 'Who created this beautiful wedding website?',
      p: ['This website was proudly designed by G.O.C | Brand Strategist × AI, where we create beautiful, personalized digital wedding experiences.',
          'Planning your wedding? Let’s create yours too!'],
      links: [{ label: 'Chat with us on WhatsApp', href: 'https://wa.me/2348027134537' }] }
  ],

  // Vendors: [role, name]. The website credit is added as the last line automatically.
  vendors: [
    ['Event Planner', 'GEMMY'],
    ['Decorator', 'Ody Event'],
    ['Cake & Dessert', 'Tees Creamy Creations'],
    ['Make-up Artist', 'Stephy Glam'],
    ['Photographer & Videographer', 'D’Great Photography'],
    ['Bride’s Outfit Designer', 'Naomi’s Vogue'],
    ['Groom’s Outfit Designer', 'Olex Threading Parlor'],
    ['Designer', 'Sunshine Printing Press'],
    ['Content Creator', 'Rukky’s_shot'],
    ['Pre-wedding Make-up Artist', 'Benny’s Glam'],
    ['Pre-wedding Photography', 'Ark-Visualz Studios'],
    ['Engagement Decoration', 'Kiki’s Cake and Events']
  ],
  developer: ['Website Design', 'G.O.C | Brand Strategist × AI'],

  footer: {
    thanks: 'Thank you for being part of our story. Your love, prayers and presence mean the world to us.',
    img: 'assets/p0297d-sm.webp',
    imgAlt: 'Ene and Oche laughing together'
  },
  credits: { photo: 'Pre-wedding photography by Ark-Visualz Studios' },

  share: { message: 'You are invited to the wedding of Ene & Oche, #GEMMY2026. Open your invitation here:' },

  music: { src: 'assets/music.mp3', volume: 0.6 }       // Make You Feel My Love (A Endless Ocean version)
};

/* ==========================================================================
   APP CODE: no need to edit below this line
   ========================================================================== */
(function () {
  'use strict';

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const html = document.documentElement;
  const params = new URLSearchParams(location.search);
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* ignore */ } }
  };
  const wait = ms => new Promise(r => setTimeout(r, ms));
  const enc = encodeURIComponent;
  const clean = s => (s || '').toString().replace(/[<>]/g, '').trim();

  function h(tag, attrs, ...kids) {
    const e = document.createElement(tag);
    for (const k in (attrs || {})) {
      const v = attrs[k];
      if (v == null || v === false) continue;
      if (k === 'class') e.className = v;
      else if (k === 'text') e.textContent = v;
      else if (k.slice(0, 2) === 'on') e.addEventListener(k.slice(2), v);
      else e.setAttribute(k, v === true ? '' : v);
    }
    kids.flat().forEach(c => { if (c != null) e.append(c.nodeType ? c : document.createTextNode(c)); });
    return e;
  }

  /* ---------- test helper: ?now=2027-01-01T00:00:00%2B01:00 pretends it is a different time ---------- */
  const nowOffset = params.get('now') ? (new Date(params.get('now')).getTime() - Date.now()) || 0 : 0;
  const now = () => Date.now() + nowOffset;

  /* ---------- derived values ---------- */
  const START = new Date(CONFIG.event.startISO);
  const END = new Date(START.getTime() + CONFIG.event.hours * 3600e3);
  const ord = n => { const s = ['th', 'st', 'nd', 'rd'], v = n % 100; return n + (s[(v - 20) % 10] || s[v] || s[0]); };
  const parts = new Intl.DateTimeFormat('en-GB', { timeZone: CONFIG.event.timeZone, weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })
    .formatToParts(START).reduce((a, x) => (a[x.type] = x.value, a), {});
  const timeText = new Intl.DateTimeFormat('en-GB', { timeZone: CONFIG.event.timeZone, hour: 'numeric', minute: '2-digit', hour12: true })
    .format(START).toUpperCase();
  const view = Object.assign({}, CONFIG, {
    d: {
      dateLong: `${parts.weekday}, ${ord(+parts.day)} ${parts.month} ${parts.year}`,
      dateShort: `${parts.day} ${parts.month} ${parts.year}`,
      time: timeText,
      tzLabel: CONFIG.event.tzLabel,
      city: CONFIG.event.cityLine
    }
  });
  const get = (path) => path.split('.').reduce((o, k) => (o == null ? o : o[k]), view);
  const names = `${CONFIG.couple.short.bride} & ${CONFIG.couple.short.groom}`;
  const guest = clean(params.get('guest')).slice(0, 60);

  /* ---------- fill data-cfg ---------- */
  $$('[data-cfg]').forEach(el => { const v = get(el.dataset.cfg); if (v != null) el.textContent = v; });
  $$('[data-cfg-href]').forEach(el => { const v = get(el.dataset.cfgHref); if (v != null) el.href = v; });

  /* ---------- SVG art: seal + laurel ---------- */
  function laurel(g, cx, cy, r, n, rx, ry, from, to) {
    const ns = 'http://www.w3.org/2000/svg';
    [-1, 1].forEach(s => {
      for (let i = 0; i < n; i++) {
        const t = n === 1 ? 0 : i / (n - 1);
        const phi = (from + t * (to - from)) * Math.PI / 180;
        const x = cx + s * r * Math.sin(phi), y = cy + r * Math.cos(phi);
        const rot = s * (90 - phi * 180 / Math.PI + 22);
        const e = document.createElementNS(ns, 'ellipse');
        e.setAttribute('rx', rx); e.setAttribute('ry', ry);
        e.setAttribute('transform', `translate(${x.toFixed(2)} ${y.toFixed(2)}) rotate(${rot.toFixed(1)})`);
        g.appendChild(e);
      }
    });
  }
  (function buildArt() {
    const edge = $('#sealEdge');
    let d = '';
    for (let i = 0; i <= 240; i++) {
      const a = i / 240 * Math.PI * 2, r = 45 + 3.2 * Math.cos(a * 18) + 1.2 * Math.sin(a * 5);
      d += (i ? 'L' : 'M') + (50 + r * Math.cos(a)).toFixed(2) + ' ' + (50 + r * Math.sin(a)).toFixed(2);
    }
    edge.setAttribute('d', d + 'Z');
    laurel($('#sealLaurel'), 50, 50, 31, 8, 2.4, 5.2, 28, 150);
    laurel($('#logoLaurel'), 50, 50, 40, 10, 3, 6.4, 22, 150);
    $('#sealText').textContent = CONFIG.couple.seal;
  })();

  /* ---------- calendar ---------- */
  const utc = d => d.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
  const calTitle = `${names} Wedding`;
  const v0 = CONFIG.venues[0];
  const calLoc = `${v0.name}, ${v0.address}`;
  const calDesc = `Wedding of ${names}. ${CONFIG.couple.hashtag}. RSVP: ${CONFIG.contact.display}`;
  $('#gcal').href = 'https://calendar.google.com/calendar/render?action=TEMPLATE'
    + `&text=${enc(calTitle)}&dates=${utc(START)}/${utc(END)}&details=${enc(calDesc)}&location=${enc(calLoc)}&ctz=${enc(CONFIG.event.timeZone)}`;
  function buildICS() {
    const esc = s => s.replace(/[\\;,]/g, '\\$&').replace(/\n/g, '\\n');
    const fold = l => { const o = []; while (l.length > 73) { o.push(l.slice(0, 73)); l = ' ' + l.slice(73); } o.push(l); return o.join('\r\n'); };
    return [
      'BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Ene and Oche Wedding//EN', 'CALSCALE:GREGORIAN', 'METHOD:PUBLISH',
      'BEGIN:VEVENT', `UID:${utc(START)}-${CONFIG.couple.hashtag.replace('#', '')}@wedding`, `DTSTAMP:${utc(new Date())}`,
      `DTSTART:${utc(START)}`, `DTEND:${utc(END)}`, fold('SUMMARY:' + esc(calTitle)), fold('LOCATION:' + esc(calLoc)),
      fold('DESCRIPTION:' + esc(calDesc)), 'END:VEVENT', 'END:VCALENDAR'
    ].join('\r\n');
  }
  $('#ics').addEventListener('click', () => {
    const blob = new Blob([buildICS()], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = h('a', { href: url, download: `${CONFIG.couple.short.bride}-and-${CONFIG.couple.short.groom}-wedding.ics` });
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 2000);
    toast('Calendar file downloaded');
  });

  /* ---------- toast ---------- */
  let toastT;
  function toast(msg) {
    const t = $('#toastMsg'); t.textContent = msg; t.classList.add('show');
    clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove('show'), 2400);
  }

  /* ---------- guest greeting ---------- */
  if (guest) {
    const ig = $('#introGuest'); ig.textContent = `Dear ${guest}`; ig.hidden = false;
    const cg = $('#cardGuest'); cg.textContent = `Dear ${guest},`; cg.hidden = false;
    $('#rName').value = guest;
  }

  /* ---------- renderers ---------- */
  function swatchList(target) {
    CONFIG.colours.forEach(c => target.appendChild(
      h('li', null, h('span', { class: 'sw' + (c.metal ? ' metal' : ''), style: c.metal ? null : `background:${c.hex}`, role: 'img', 'aria-label': c.name }), c.name)));
  }
  swatchList($('#cardSwatches'));

  CONFIG.venues.forEach(v => {
    const maps = v.mapsUrl || `https://www.google.com/maps/search/?api=1&query=${enc(v.mapQuery)}`;
    const dir = `https://www.google.com/maps/dir/?api=1&destination=${enc(v.mapQuery)}`;
    $('#venueList').appendChild(h('article', { class: 'paper vcard reveal' },
      h('p', { class: 'small-caps', text: v.label }),
      h('h3', { text: v.name }),
      h('p', { class: 'vtime', text: v.time }),
      h('address', { text: v.address }),
      h('div', { class: 'btn-row' },
        h('a', { class: 'btn btn-gold', href: maps, target: '_blank', rel: 'noopener', text: 'Open in Google Maps' }),
        h('a', { class: 'btn btn-ghost-dark', href: dir, target: '_blank', rel: 'noopener', text: 'Get directions' }))));
  });

  if (CONFIG.father && CONFIG.father.names && CONFIG.father.names.length) {
    $('#father').hidden = false;
    $('#fodName').textContent = CONFIG.father.names.join(' & ');
    $('#fodRole').textContent = CONFIG.father.role || '';
  }

  CONFIG.story.moments.forEach(m => $('#timeline').appendChild(h('li', { class: 'moment reveal' },
    h('div', { class: 'm-frame' }, h('img', { src: m.img, width: m.w, height: m.h, alt: m.alt, loading: 'lazy', decoding: 'async' })),
    h('p', { class: 'm-label', text: m.label }), h('h3', { text: m.title }), h('p', { text: m.text }))));

  CONFIG.toast.forEach((t, i, a) => $('#toastLines').appendChild(
    h('p', { class: 'reveal' + (i === a.length - 1 ? ' hl gold-text' : ''), text: t })));

  $('#footImg').src = CONFIG.footer.img; $('#footImg').alt = CONFIG.footer.imgAlt;

  /* vendors, with the website credit as the last line */
  CONFIG.vendors.concat([CONFIG.developer]).forEach(v => $('#vlist').appendChild(
    h('li', null, h('span', { class: 'v-role', text: v[0] }), h('span', { class: 'v-name', text: v[1] }))));

  /* FAQ */
  const phoneLink = () => h('div', { class: 'btn-row' },
    h('a', { class: 'btn btn-gold', href: 'tel:' + CONFIG.contact.callNumber, text: 'Call ' + CONFIG.contact.display }),
    h('a', { class: 'btn btn-wa', href: 'https://wa.me/' + CONFIG.contact.whatsapp, target: '_blank', rel: 'noopener', text: 'WhatsApp' }));
  CONFIG.faq.forEach((f, i) => {
    const body = h('div', { class: 'acc-body' }, f.p.map(t => h('p', { text: t })));
    if (f.swatches) { const ul = h('ul', { class: 'swatches' }); swatchList(ul); body.appendChild(ul); }
    if (f.contact) {
      body.appendChild(h('p', null, 'Contact person: ', h('strong', { text: CONFIG.contact.person })));
      body.appendChild(phoneLink());
    }
    if (f.links) body.appendChild(h('div', { class: 'btn-row' }, f.links.map(l =>
      h('a', { class: 'btn btn-wa', href: l.href, target: '_blank', rel: 'noopener', text: l.label }))));
    const btn = h('button', { type: 'button', class: 'acc-btn', id: 'q' + i, 'aria-expanded': 'false', 'aria-controls': 'a' + i },
      h('span', { text: f.q }), h('span', { class: 'acc-ico', 'aria-hidden': 'true' }));
    const panel = h('div', { class: 'acc-panel', id: 'a' + i, role: 'region', 'aria-labelledby': 'q' + i }, h('div', null, body));
    $('#acc').appendChild(h('div', { class: 'acc-item' }, h('h3', { style: 'margin:0;font-weight:inherit' }, btn), panel));
  });
  $('#acc').addEventListener('click', e => {
    const b = e.target.closest('.acc-btn'); if (!b) return;
    const item = b.parentElement.parentElement, wasOpen = item.classList.contains('open');
    $$('.acc-item', $('#acc')).forEach(it => { it.classList.remove('open'); $('.acc-btn', it).setAttribute('aria-expanded', 'false'); });
    if (!wasOpen) { item.classList.add('open'); b.setAttribute('aria-expanded', 'true'); }
  });

  /* gifts */
  $('#copyAcct').addEventListener('click', async () => {
    const v = CONFIG.gifts.account;
    try { await navigator.clipboard.writeText(v); }
    catch (e) {
      const ta = h('textarea', { 'aria-hidden': 'true', style: 'position:fixed;opacity:0;top:0' }); ta.value = v;
      document.body.appendChild(ta); ta.select(); try { document.execCommand('copy'); } catch (e2) { /* ignore */ } ta.remove();
    }
    toast('Account number copied');
  });

  /* share */
  $('#shareWa').addEventListener('click', () =>
    window.open('https://wa.me/?text=' + enc(`${CONFIG.share.message} ${CONFIG.site.url}`), '_blank', 'noopener'));

  /* ---------- gallery + lightbox ---------- */
  const G = CONFIG.gallery;
  G.forEach((g, i) => $('#masonry').appendChild(h('button', { type: 'button', 'aria-label': 'Open photo ' + (i + 1) + ': ' + g.alt, 'data-i': i },
    h('img', { src: g.sm, width: g.w, height: g.h, alt: g.alt, loading: 'lazy', decoding: 'async' }))));
  const lb = $('#lb'), lbImg = $('#lbImg');
  let lbI = 0, lastFocus = null, introDone = false;
  function lbShow() {
    const g = G[lbI]; lbImg.src = g.img; lbImg.alt = g.alt;
    $('#lbCap').textContent = g.alt; $('#lbCount').textContent = `${lbI + 1} / ${G.length}`;
    [1, -1].forEach(d => { new Image().src = G[(lbI + d + G.length) % G.length].img; });
  }
  function lbOpen(i) { lastFocus = document.activeElement; lbI = i; lb.hidden = false; html.classList.add('locked'); lbShow(); $('#lbClose').focus(); }
  function lbClose() { lb.hidden = true; if (introDone) html.classList.remove('locked'); if (lastFocus) lastFocus.focus(); }
  const lbGo = d => { lbI = (lbI + d + G.length) % G.length; lbShow(); };
  $('#masonry').addEventListener('click', e => { const b = e.target.closest('button'); if (b) lbOpen(+b.dataset.i); });
  $('#lbClose').addEventListener('click', lbClose);
  $('#lbPrev').addEventListener('click', () => lbGo(-1));
  $('#lbNext').addEventListener('click', () => lbGo(1));
  lb.addEventListener('click', e => { if (e.target === lb) lbClose(); });
  document.addEventListener('keydown', e => {
    if (lb.hidden) return;
    if (e.key === 'Escape') lbClose();
    else if (e.key === 'ArrowLeft') lbGo(-1);
    else if (e.key === 'ArrowRight') lbGo(1);
    else if (e.key === 'Tab') {
      const f = [$('#lbClose'), $('#lbPrev'), $('#lbNext')], i = f.indexOf(document.activeElement);
      e.preventDefault(); f[(i + (e.shiftKey ? -1 : 1) + f.length) % f.length].focus();
    }
  });
  (function swipe(el, onLeft, onRight) {
    let x0 = null;
    el.addEventListener('pointerdown', e => { x0 = e.clientX; });
    el.addEventListener('pointerup', e => { if (x0 == null) return; const dx = e.clientX - x0; x0 = null; if (dx < -50) onLeft(); else if (dx > 50) onRight(); });
    el.addEventListener('pointercancel', () => { x0 = null; });
  })($('.lb-fig'), () => lbGo(1), () => lbGo(-1));

  /* ---------- hero slider ---------- */
  const heroEls = [], dots = [];
  let heroCur = 0, heroTimer = null, prevT = null;
  CONFIG.hero.slides.forEach((s, i) => {
    const el = h('div', { class: 'slide' + (i === 0 ? ' is-active' : ''), 'aria-hidden': i === 0 ? 'false' : 'true' },
      h('img', { src: s.src, width: s.w, height: s.h, alt: s.alt, loading: i === 0 ? 'eager' : 'lazy', decoding: 'async', fetchpriority: i === 0 ? 'high' : null, draggable: 'false' }));
    heroEls.push(el); $('#heroSlides').appendChild(el);
    const d = h('button', { type: 'button', 'aria-label': `Show photo ${i + 1} of ${CONFIG.hero.slides.length}`, 'aria-current': i === 0 ? 'true' : 'false', onclick: () => { heroGo(i); heroStart(); } });
    dots.push(d); $('#heroDots').appendChild(d);
  });
  function heroGo(n) {
    n = (n + heroEls.length) % heroEls.length;
    if (n === heroCur) return;
    const prev = heroEls[heroCur], next = heroEls[n];
    heroEls.forEach(e => { if (e !== prev && e !== next) { e.classList.remove('is-prev', 'is-active'); } });
    prev.classList.remove('is-active'); prev.classList.add('is-prev'); prev.setAttribute('aria-hidden', 'true');
    next.classList.remove('is-prev'); next.classList.add('is-active'); next.setAttribute('aria-hidden', 'false');
    dots.forEach((d, i) => d.setAttribute('aria-current', i === n ? 'true' : 'false'));
    heroCur = n; clearTimeout(prevT);
    prevT = setTimeout(() => prev.classList.remove('is-prev'), 1750);
  }
  function heroStart() {
    clearInterval(heroTimer);
    if (reduce || heroEls.length < 2) return;
    heroTimer = setInterval(() => { if (!document.hidden) heroGo(heroCur + 1); }, CONFIG.hero.interval);
  }
  (function heroSwipe() {
    const m = $('#heroMedia'); let x0 = null;
    m.style.touchAction = 'pan-y';
    m.addEventListener('pointerdown', e => { x0 = e.clientX; });
    m.addEventListener('pointerup', e => { if (x0 == null) return; const dx = e.clientX - x0; x0 = null; if (Math.abs(dx) > 40) { heroGo(heroCur + (dx < 0 ? 1 : -1)); heroStart(); } });
    m.addEventListener('pointercancel', () => { x0 = null; });
  })();

  /* ---------- countdown ---------- */
  const cdEls = { D: $('#cdD'), H: $('#cdH'), M: $('#cdM'), S: $('#cdS') };
  function setCd(el, v) {
    const t = String(v).padStart(2, '0');
    if (el.textContent !== t) { el.textContent = t; if (!reduce) { el.classList.remove('flip'); void el.offsetWidth; el.classList.add('flip'); } }
  }
  function tick() {
    const diff = START.getTime() - now();
    if (diff <= 0) { $('#cd').hidden = true; $('#married').hidden = false; return false; }
    $('#cd').hidden = false; $('#married').hidden = true;
    const s = Math.floor(diff / 1000);
    setCd(cdEls.D, Math.floor(s / 86400)); setCd(cdEls.H, Math.floor(s % 86400 / 3600));
    setCd(cdEls.M, Math.floor(s % 3600 / 60)); setCd(cdEls.S, s % 60);
    return true;
  }
  if (tick()) { const iv = setInterval(() => { if (!tick()) clearInterval(iv); }, 1000); }

  /* ---------- RSVP ---------- */
  const form = $('#rsvpForm'), sel = $('#rGuests');
  for (let i = 1; i <= CONFIG.rsvp.maxGuests; i++) sel.appendChild(h('option', { value: i, text: i === 1 ? '1 guest' : i + ' guests' }));
  const fieldOf = el => el.closest('.field');
  function setErr(id, inputSel, msg) {
    const p = $('#' + id); p.textContent = msg;
    const inp = $(inputSel, form); if (inp) { inp.setAttribute('aria-invalid', msg ? 'true' : 'false'); fieldOf(inp).classList.toggle('bad', !!msg); }
  }
  function waLink() {
    const n = clean(form.name.value), a = (form.attending.value || ''), g = form.guests.value;
    let t = `Hello! This is ${n || '[my name]'}. `;
    t += a ? `I would like to RSVP for ${names}'s wedding on ${view.d.dateShort}: ${a}.` + (a === 'Joyfully accept' ? ` Number of guests: ${g}.` : '')
           : `I would like to RSVP for ${names}'s wedding on ${view.d.dateShort}.`;
    $('#waRsvp').href = `https://wa.me/${CONFIG.contact.whatsapp}?text=${enc(t)}`;
  }
  $('#callRsvp').href = 'tel:' + CONFIG.contact.callNumber;
  form.addEventListener('input', waLink); form.addEventListener('change', e => {
    if (e.target.name === 'attending') $('#guestsField').hidden = e.target.value !== 'Joyfully accept';
    waLink();
  });
  waLink();
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const name = clean(form.name.value), phone = clean(form.phone.value), att = form.attending.value;
    let first = null;
    const bad = (id, sel2, msg) => { setErr(id, sel2, msg); if (msg && !first) first = $(sel2, form); };
    bad('eName', '#rName', name.length < 2 ? 'Please enter your full name.' : '');
    bad('ePhone', '#rPhone', phone.replace(/\D/g, '').length < 7 ? 'Please enter a phone number we can reach.' : '');
    $('#eAtt').textContent = att ? '' : 'Please choose one option.';
    if (!att && !first) first = $('input[name=attending]', form);
    if (first) { first.focus(); return; }
    if (form.website.value) { showDone(name, att); return; }            // honeypot: bots see a fake success
    if (!CONFIG.rsvp.endpoint) {
      $('#rNote').textContent = 'Online RSVP is not switched on yet. Please use the WhatsApp or Call buttons below.';
      return;
    }
    const btn = $('#rSubmit'); btn.disabled = true; btn.textContent = 'Sending...'; $('#rNote').textContent = '';
    const going = att === 'Joyfully accept';
    const payload = { name, phone, attending: att, guests: going ? +form.guests.value : 0, message: clean(form.message.value), website: '', sentAt: new Date().toISOString(), code: going ? newCode() : '' };
    try {
      await fetch(CONFIG.rsvp.endpoint, { method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(payload) });
      const pass = going ? { code: payload.code, name, guests: payload.guests } : null;
      if (pass) store.set('ge-pass', JSON.stringify(pass));
      showDone(name, att, pass);
    } catch (err) {
      btn.disabled = false; btn.textContent = 'Send my RSVP';
      $('#rNote').textContent = 'We could not send that. Please check your connection and try again, or use the WhatsApp button below.';
    }
  });
  function showDone(name, att, pass, again) {
    form.hidden = true;
    const d = $('#rsvpDone'); d.hidden = false;
    $('#doneH').textContent = again ? 'Welcome back' : att === 'Joyfully accept' ? 'Thank you!' : 'Thank you for letting us know';
    $('#doneP').textContent = again ? '' : att === 'Joyfully accept'
      ? `We can't wait to celebrate with you, ${name.split(' ')[0]}.`
      : `We will miss you, ${name.split(' ')[0]}, and keep you in our hearts on the day.`;
    renderPass(pass);
    d.focus();
  }

  /* ---------- entry pass (unique QR code per accepted RSVP) ---------- */
  // 8 random characters from a 32-letter alphabet without look-alikes (no 0, O, 1 or I): about 1 trillion combinations
  function newCode() {
    const A = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    const r = new Uint8Array(8);
    if (window.crypto && crypto.getRandomValues) crypto.getRandomValues(r); else for (let i = 0; i < 8; i++) r[i] = Math.floor(Math.random() * 256);
    return 'GE-' + Array.from(r, b => A[b & 31]).join('');
  }
  function passQR(code) { try { return window.QR ? QR.encode(code) : null; } catch (e) { return null; } }
  function renderPass(pass) {
    const box = $('#pass');
    if (!pass) { box.hidden = true; return; }
    const qr = passQR(pass.code);
    $('#passQr').innerHTML = qr ? QR.toSVG(qr, { label: 'Your entry QR code' }) : '';
    $('#passQr').hidden = !qr;
    $('#passCode').textContent = pass.code;
    $('#passMeta').textContent = `${pass.name} \u00b7 ${pass.guests === 1 ? 'admits 1 guest' : 'admits ' + pass.guests + ' guests'}`;
    $('#passHint').textContent = CONFIG.rsvp.passNote;
    $('#passSave').hidden = !qr;
    $('#passSave').onclick = () => savePassImage(pass);
    box.hidden = false;
  }
  async function savePassImage(pass) {
    const qr = passQR(pass.code); if (!qr) return;
    try { await Promise.all(['72px "Great Vibes"', '500 30px "Cormorant Garamond"', '600 22px "Cinzel"'].map(f => document.fonts.load(f))); } catch (e) { /* fall back to system fonts */ }
    const W = 760, H = 1130, c = document.createElement('canvas'); c.width = W; c.height = H;
    const g = c.getContext('2d'), serif = '"Cormorant Garamond", Georgia, serif';
    g.fillStyle = '#fbf6ec'; g.fillRect(0, 0, W, H);
    g.strokeStyle = '#c9a24b'; g.lineWidth = 3; g.strokeRect(24, 24, W - 48, H - 48);
    g.lineWidth = 1; g.strokeRect(36, 36, W - 72, H - 72);
    g.textAlign = 'center'; g.fillStyle = '#8d6a22'; g.font = '600 22px "Cinzel", Georgia, serif';
    g.fillText('ENTRY PASS', W / 2, 105);
    g.fillStyle = '#6b4226'; g.font = '84px "Great Vibes", "Snell Roundhand", cursive';
    g.fillText(names, W / 2, 205);
    g.fillStyle = '#3a2a1e'; g.font = `500 30px ${serif}`;
    g.fillText(view.d.dateLong, W / 2, 262);
    g.fillStyle = '#6f5a48'; g.font = `italic 400 26px ${serif}`;
    g.fillText(`${view.d.time} \u00b7 ${view.d.city}`, W / 2, 300);
    const q = 4, n = qr.size + q * 2, px = Math.floor(440 / n), box = n * px, bx = (W - box) / 2, by = 345;
    g.fillStyle = '#fff'; g.fillRect(bx - 14, by - 14, box + 28, box + 28);
    g.strokeStyle = '#cdb98a'; g.lineWidth = 2; g.strokeRect(bx - 14, by - 14, box + 28, box + 28);
    g.fillStyle = '#000';
    for (let y = 0; y < qr.size; y++) for (let x = 0; x < qr.size; x++) if (qr.get(x, y)) g.fillRect(bx + (x + q) * px, by + (y + q) * px, px, px);
    let ny = by + box + 90, fs = 44;
    g.fillStyle = '#3a2a1e';
    do { g.font = `600 ${fs}px ${serif}`; fs -= 2; } while (g.measureText(pass.name).width > W - 140 && fs > 20);
    g.fillText(pass.name, W / 2, ny);
    g.fillStyle = '#6f5a48'; g.font = `italic 400 28px ${serif}`;
    g.fillText(pass.guests === 1 ? 'Admits 1 guest' : `Admits ${pass.guests} guests`, W / 2, ny + 46);
    g.fillStyle = '#6b4226'; g.font = '600 34px ui-monospace, Menlo, Consolas, monospace';
    g.fillText(pass.code, W / 2, ny + 112);
    g.fillStyle = '#6f5a48'; g.font = `italic 400 22px ${serif}`;
    g.fillText('Please show this at the entrance', W / 2, H - 78);
    const file = 'ene-oche-entry-pass.png';
    const finish = blob => {
      const url = URL.createObjectURL(blob), a = h('a', { href: url, download: file });
      document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(url), 4000);
    };
    if (c.toBlob) c.toBlob(b => b ? finish(b) : window.open(c.toDataURL('image/png'), '_blank'), 'image/png');
    else window.open(c.toDataURL('image/png'), '_blank');
  }
  // a guest who RSVP'd earlier on this phone can bring their pass back up
  (function () {
    let saved = null; try { saved = JSON.parse(store.get('ge-pass') || 'null'); } catch (e) { /* ignore */ }
    if (!saved || !/^GE-[A-HJ-NP-Z2-9]{8}$/.test(saved.code || '')) return;
    const b = $('#passAgain'); b.hidden = false;
    b.addEventListener('click', () => showDone(saved.name || '', 'Joyfully accept', saved, true));
  })();

  /* ---------- reveal on scroll ---------- */
  (function reveal() {
    const items = $$('.reveal');
    if (!('IntersectionObserver' in window) || reduce) { items.forEach(i => i.classList.add('in')); return; }
    const io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } }),
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    items.forEach(i => io.observe(i));
  })();

  /* ---------- music ---------- */
  const audio = new Audio(); audio.loop = true; audio.preload = 'none';
  let muted = store.get('ge-muted') === '1', fadeT = null, audioReady = false;
  const sound = $('#sound');
  function paintSound() {
    sound.setAttribute('aria-pressed', muted ? 'true' : 'false');
    sound.setAttribute('aria-label', muted ? 'Unmute music' : 'Mute music');
  }
  function fadeTo(v, ms) {
    clearInterval(fadeT);
    const from = audio.volume, steps = 20; let i = 0;
    fadeT = setInterval(() => {
      i++; audio.volume = Math.max(0, Math.min(1, from + (v - from) * i / steps));
      if (i >= steps) { clearInterval(fadeT); if (v === 0) audio.pause(); }
    }, ms / steps);
  }
  function startMusic() {
    if (muted) return;
    try {
      if (!audioReady) { audio.src = CONFIG.music.src; audioReady = true; }
      audio.volume = 0;
      const p = audio.play();
      if (p && p.then) p.then(() => fadeTo(CONFIG.music.volume, 2200)).catch(() => { /* blocked: stays silent */ });
    } catch (e) { /* ignore */ }
  }
  sound.addEventListener('click', () => {
    muted = !muted; store.set('ge-muted', muted ? '1' : '0'); paintSound();
    if (muted) { if (audioReady) fadeTo(0, 300); } else startMusic();
  });
  paintSound();

  /* ---------- envelope intro ---------- */
  const intro = $('#intro'), page = $('#page');
  let finished = false;
  function finishIntro() {
    if (finished) return; finished = true; introDone = true;
    intro.classList.add('done');
    $$('.fly').forEach(e => e.remove());
    page.removeAttribute('inert'); page.removeAttribute('aria-hidden');
    if (lb.hidden) html.classList.remove('locked');
    heroStart();
    if (!params.has('nointro')) { try { $('.hero-names').focus({ preventScroll: true }); } catch (e) { /* ignore */ } }
  }
  function anim(el, kf, o) {
    try { return el.animate(kf, Object.assign({ fill: 'forwards' }, o)); } catch (e) { return null; }
  }
  const fin = a => (a && a.finished ? a.finished.catch(() => {}) : Promise.resolve());

  let opened = false;
  async function openEnvelope(quick) {
    if (opened) return; opened = true;
    intro.classList.add('opening');
    try { $('#seal').blur(); } catch (e) { /* ignore */ }
    $('#tapHint').style.opacity = 0;
    startMusic();
    setTimeout(finishIntro, 7000);                                   // safety net
    if (quick || reduce) {
      const a = anim(intro, [{ opacity: 1 }, { opacity: 0 }], { duration: reduce ? 200 : 400 });
      await fin(a); finishIntro(); return;
    }
    const env = $('#env'), seal = $('#seal'), flap = $('#envFlap'), card = $('#envCard'), wrap = $('.env-wrap');
    const halves = $$('.seal-half', seal);
    try {
      /* 1. seal presses in, then cracks */
      anim(seal, [{ transform: 'scale(1)' }, { transform: 'scale(.9)' }], { duration: 180, easing: 'ease-out' });
      await wait(180);
      anim(halves[0], [{ transform: 'translate(0,0) rotate(0)', opacity: 1 }, { transform: 'translate(-26%,14%) rotate(-16deg)', opacity: 0 }], { duration: 650, easing: 'ease-in' });
      anim(halves[1], [{ transform: 'translate(0,0) rotate(0)', opacity: 1 }, { transform: 'translate(26%,14%) rotate(16deg)', opacity: 0 }], { duration: 650, easing: 'ease-in' });
      anim($('.jasmine'), [{ opacity: 1 }, { opacity: 0 }], { duration: 500 });
      /* sparkle burst */
      for (let i = 0; i < 16; i++) {
        const sp = h('span', { class: 'spark', style: 'left:50%;top:62%' });
        env.appendChild(sp);
        const ang = (i / 16) * Math.PI * 2 + Math.random() * .4, dist = 50 + Math.random() * 70;
        const a = anim(sp, [{ transform: 'translate(0,0) scale(1)', opacity: 1 }, { transform: `translate(${Math.cos(ang) * dist}px,${Math.sin(ang) * dist}px) scale(.2)`, opacity: 0 }], { duration: 700 + Math.random() * 300, easing: 'ease-out' });
        fin(a).then(() => sp.remove());
      }
      await wait(260);
      /* 2. flap opens in 3D */
      anim(flap, [{ transform: 'rotateX(0deg)' }, { transform: 'rotateX(-180deg)' }], { duration: 850, easing: 'cubic-bezier(.5,0,.2,1)' });
      setTimeout(() => { flap.style.zIndex = 1; }, 420);
      await wait(520);
      /* 3. the photo card slides up out of the envelope */
      const envH = env.offsetHeight, cardH = card.offsetHeight;
      const s0 = Math.min(1, envH * 0.62 / cardH);
      const rise = anim(card, [{ opacity: 1, transform: `translateY(0) scale(${s0})` }, { opacity: 1, transform: `translateY(${-0.58 * envH}px) scale(1)` }], { duration: 950, easing: 'cubic-bezier(.3,.7,.2,1)' });
      await fin(rise); await wait(60);
      /* 4. card flies to fill the screen, envelope drops away */
      const r = card.getBoundingClientRect();
      const clone = card.cloneNode(true); clone.removeAttribute('id'); clone.className = 'fly';
      Object.assign(clone.style, { left: r.left + 'px', top: r.top + 'px', width: r.width + 'px', margin: 0, opacity: 1, transform: 'none', transformOrigin: '50% 50%' });
      intro.appendChild(clone);
      if (rise) rise.cancel(); card.style.opacity = 0;
      const sc = Math.min(innerWidth * 0.94 / r.width, innerHeight * 0.8 / r.height);
      const dx = innerWidth / 2 - (r.left + r.width / 2), dy = innerHeight / 2 - (r.top + r.height / 2);
      const fly = anim(clone, [{ transform: 'translate(0,0) scale(1)' }, { transform: `translate(${dx}px,${dy}px) scale(${sc})` }], { duration: 950, easing: 'cubic-bezier(.6,0,.2,1)' });
      anim(wrap, [{ transform: 'translateY(0)', opacity: 1 }, { transform: `translateY(${innerHeight * 0.9}px)`, opacity: 0 }], { duration: 850, delay: 120, easing: 'ease-in' });
      await fin(fly);
      /* 5. cross-fade into the page */
      page.removeAttribute('inert');
      anim(clone, [{ opacity: 1 }, { opacity: 0 }], { duration: 650, easing: 'ease' });
      const fade = anim(intro, [{ opacity: 1 }, { opacity: 0 }], { duration: 650, easing: 'ease' });
      await fin(fade);
    } catch (err) { /* any animation failure: just open the page */ }
    finishIntro();
  }

  function initIntro() {
    paintSound();
    if (params.has('nointro')) { intro.classList.add('done'); finishIntro(); return; }
    html.classList.add('locked');
    page.setAttribute('inert', ''); page.setAttribute('aria-hidden', 'true');
    $('#seal').addEventListener('click', () => openEnvelope(false));
    $('#skip').addEventListener('click', () => openEnvelope(true));
  }
  initIntro();
})();
