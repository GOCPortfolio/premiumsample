# Ene & Oche wedding invitation website

A one-page animated invitation (envelope opens, photos slide, countdown, RSVP, gallery). Plain HTML, CSS and JavaScript: no frameworks and no build step.

## 1. What is in the folder

| File | What it is |
|---|---|
| `index.html` | The page structure and the link-preview tags (WhatsApp, Facebook, Twitter) |
| `styles.css` | Colours and design. The colours are at the very top |
| `script.js` | **All the wording and settings** live in the `CONFIG` box at the top |
| `qr.js` | Small built-in QR code maker for guest entry passes (no internet needed, nothing to edit) |
| `google-apps-script.gs` | Collects RSVPs into a Google Sheet, stores each guest's entry code, and checks guests in on the day |
| `assets/` | Photos, music, florals, link-preview picture, icons |

## 2. Editing the wording

Open `script.js`. Everything between `const CONFIG = {` and the line `APP CODE` is plain text you can change: names, parents, venues, story, toast, FAQ, vendors, bank details, phone numbers. Keep the quote marks and commas. Save, refresh the page.

### Still to fill in (placeholders)
1. **Father of the Day**: `father.names` is empty, so the section is hidden. Add names, e.g. `names: ['Mr John Doe'], role: 'Chairman, Doe Ltd'`.
2. **Parking answer** in `faq` (marked `TO CONFIRM`): currently says details will be shared soon.
3. **RSVP link** `rsvp.endpoint` (see section 4).
4. **Hosting address**: set to `https://gocportfolio.github.io/GE2026/`. If your address is different, change it in the 4 places listed in section 6.
5. **Music**: the file in `assets/music.mp3` is the song you supplied: "Make You Feel My Love" (Anendlessocean version). See section 7 about the rights to use it.

### Note on names and parents
The printed invitation card lists the bride as **Ene Grace Adukwu**, daughter of **Late Mr Gabriel Ojile Adukwu & Mrs Virginia Adukwu**, and the groom as **Emmanuel Oche Obeya**, son of **Prince John Audu Obeya (JP) & Mrs Joy Obeya**. The site follows the card. The seal still says G&E as requested.

## 3. Photos
Photos are in `assets/` and are already converted to WebP with the photographer's watermark cropped out. The credit "Pre-wedding photography by Ark-Visualz Studios" is shown in the gallery and footer.
- `p0292.webp` is a full-size picture and `p0292-sm.webp` its small thumbnail (`p` portrait, `l` landscape).
- `hero-1` to `hero-4.webp` are the four slides at the top of the page.
- `envelope-card.webp` is the photo that slides out of the envelope.
- To swap a picture: save the new one with the same name and size (full about 1100 to 1400px wide, thumbnail about 560 to 640px), or add a new line to `gallery` in `CONFIG`.
- To change the hero slides, edit `hero.slides` in `CONFIG`. Time between slides is `hero.interval` (milliseconds).

## 4. Collecting RSVPs in a Google Sheet
1. Create a new Google Sheet (name it "Ene & Oche RSVPs").
2. Menu **Extensions > Apps Script**. Delete what is there and paste everything from `google-apps-script.gs`. Save.
3. Click **Deploy > New deployment**, type **Web app**. Execute as: **Me**. Who has access: **Anyone**. Click Deploy and allow access when asked.
4. Copy the **Web app URL** (ends in `/exec`).
5. In `script.js` set `rsvp: { endpoint: 'PASTE-URL-HERE', ...}`.
6. Upload the site again, open it, send a real test RSVP. A row appears in the sheet tab "RSVPs".
7. If you ever change the Apps Script, use **Deploy > Manage deployments > Edit > New version**, otherwise the old version keeps running.

Until the endpoint is set, the form tells guests to use the WhatsApp or Call buttons instead.

### Entry passes (QR codes) and day-of check-in
When a guest chooses **Joyfully accept** and sends the form, the thank-you card shows an **entry pass**: a QR code, the same code in letters (for example `GE-K7M4Q9XP`), their name and the number of guests it admits. A **Save pass as image** button downloads it as a picture they can keep on their phone. Guests who decline do not get a pass.

- The code is made in the guest's browser and sent to your sheet in the new **Code** column, so what is on their phone always matches a row in the sheet. The QR contains only the code, nothing personal.
- A guest who RSVP'd earlier on the same phone sees **"I have already RSVP'd: show my entry pass"** under the form.
- The code is 8 characters from 32 letters and digits (no 0, O, 1, I): about a trillion combinations, so they cannot be guessed. If the same submission arrives twice, the sheet keeps only the first.
- The words under the QR code are `rsvp.passNote` in `CONFIG`.

**On the day.** Open the sheet on a laptop or tablet, use the new **Wedding** menu > **Check in a guest**, and scan the guest's QR code with a USB/Bluetooth scanner (it types the code and presses Enter), or type the code. The sheet shows the guest's name and number of guests, stamps the **Checked in** column and turns the row green. If the pass is scanned a second time it says **ALREADY CHECKED IN** with the time, and an unknown code says **NOT FOUND**. You can also use Ctrl+F in the sheet to search for a code or a name.
Phone camera apps will read the QR code and show the code text, which you can then type or search for. (The Wedding menu only appears in the Sheets website and tablet browser, not in the Sheets phone app.)

**Updating an already-live site.** Upload the new `index.html`, `script.js`, `styles.css` and `qr.js`. Paste the new `google-apps-script.gs` into Apps Script, then **Deploy > Manage deployments > Edit > New version** (section 4, step 7). The Web app URL stays the same. The first new RSVP adds the **Code** and **Checked in** headers to your existing sheet; earlier rows keep working and simply have no code. Anyone who RSVP'd before this update will need to RSVP again (or you can add a code to their row by hand) to get a pass.

### Guest desk dashboard (`admin.html`)
Open `https://YOURADDRESS/admin.html` (it is hidden from search engines). It shows the wedding countdown, RSVP and guest totals, arrivals, a searchable guest list, a **Send reminder** button per guest (opens WhatsApp with the message ready; the sheet logs it in the **Reminded** column) and a **Check-in** page that scans entry-pass QR codes with the phone camera or takes a typed code.
1. In `google-apps-script.gs` set `ADMIN_KEY` (couple / planner) and `USHER_KEY` (ushers: check-in only, no guest list). Redeploy as a new version.
2. The names, date, venue, site address and endpoint are in the `CFG` box near the bottom of `admin.html`. Nigerian numbers starting with 0 are sent as +234 (`countryCode`).
3. **Seats:** in the Guests tab, type a seat or table for each attending guest (for example `Table 4` or `Table 4, seats 1 to 3`). It saves when you leave the box, goes into the **Seat** column of the sheet, appears in the reminder message, and is shown to ushers in big letters when they scan the guest's pass. Use the **No seat yet** filter to see who is left.
4. Give ushers the page address and the usher passcode only.

## 5. Personalised guest links
Add `?guest=Name` to the address and the envelope and card greet that person, and the RSVP name is pre-filled.
Example: `https://gocportfolio.github.io/GE2026/?guest=Aunty%20Joy`
Spaces become `%20` and `&` becomes `%26`.

## 6. Link preview (WhatsApp, Facebook, Twitter)
The preview picture is `assets/og-image-2.jpg` (sealed envelope). The preview text is exactly: *You are invited to celebrate our union in marriage.*

The address appears in 4 places in `index.html`. Change all four if your hosting address changes:
`<link rel="canonical">`, `og:url`, `og:image`, `twitter:image`. The `og:image` line must be the full address of the picture, e.g. `https://YOURADDRESS/assets/og-image-2.jpg`. Also update `site.url` in `CONFIG` (used by the Share button).

**WhatsApp remembers old previews.** To force a new one, rename the picture (for example `og-image-3.jpg`, and change the two image lines) or share the link with `?v=2` on the end. For Facebook use the Sharing Debugger (developers.facebook.com/tools/debug) and press **Scrape Again**.

## 7. Music
`assets/music.mp3` is about 150 seconds (1.2 MB). It starts when the guest taps the envelope seal; the speaker button (top right) mutes it and remembers the choice. Please make sure you have the right to use the song publicly on a website. To replace it, keep the name `music.mp3`. To make a file smaller:

`ffmpeg -i yoursong.mp3 -ac 1 -b:a 64k assets/music.mp3`

## 8. Putting it online (free)
**GitHub Pages** (your repository `GOCPortfolio/GE2026`): upload every file so that `index.html` is at the top level of the repository. Then **Settings > Pages > Build from branch > main / (root) > Save**. After a minute the site is at `https://gocportfolio.github.io/GE2026/`.

**Netlify**: drag the whole `wedding-site` folder onto app.netlify.com/drop.
**Vercel**: import the repository, framework "Other", no build command.

### Your own domain
At your domain registrar add `A` records pointing to GitHub Pages (185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153) and a `CNAME` record for `www` pointing to `gocportfolio.github.io`. Set the custom domain in Settings > Pages. Afterwards change the 4 addresses in section 6.

## 9. Testing tips
- Add `?nointro` to skip the envelope while editing.
- Add `?now=2026-12-30T12:00:00%2B01:00` to preview the "We are married!" message.
