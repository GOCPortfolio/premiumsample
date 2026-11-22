/* ==========================================================================
   Tiny QR code generator (no libraries, works offline).
   Byte mode, error-correction level M, versions 1 to 6 (up to 106 characters).
   Used for the guest entry pass. Nothing here needs editing.
   Usage:  const qr = QR.encode('GE-ABCD2345');   // { size, get(x, y) }
           QR.toSVG(qr)                            // SVG markup string
   ========================================================================== */
(function (root) {
  'use strict';

  // Per version (index = version): total codewords, EC codewords per block, number of blocks, alignment centres
  const TOTAL = [0, 26, 44, 70, 100, 134, 172];
  const ECPB = [0, 10, 16, 26, 18, 24, 16];
  const BLOCKS = [0, 1, 1, 1, 2, 2, 4];
  const ALIGN = [null, [], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34]];

  // Galois field GF(256) for Reed-Solomon
  const EXP = new Array(512), LOG = new Array(256);
  (function () {
    let x = 1;
    for (let i = 0; i < 255; i++) { EXP[i] = x; LOG[x] = i; x <<= 1; if (x & 256) x ^= 0x11d; }
    for (let i = 255; i < 512; i++) EXP[i] = EXP[i - 255];
  })();
  const mul = (a, b) => (a && b ? EXP[LOG[a] + LOG[b]] : 0);

  function generator(deg) {
    let g = [1];
    for (let i = 0; i < deg; i++) {
      const n = new Array(g.length + 1).fill(0);
      for (let j = 0; j < g.length; j++) { n[j] ^= g[j]; n[j + 1] ^= mul(g[j], EXP[i]); }
      g = n;
    }
    return g;
  }
  function remainder(data, gen) {
    const res = new Array(gen.length - 1).fill(0);
    data.forEach(b => {
      const f = b ^ res.shift(); res.push(0);
      for (let i = 0; i < res.length; i++) res[i] ^= mul(gen[i + 1], f);
    });
    return res;
  }

  function utf8(str) {
    return Array.from(unescape(encodeURIComponent(str)), c => c.charCodeAt(0));
  }

  function encode(text) {
    const bytes = utf8(String(text));
    let ver = 0;
    for (let v = 1; v <= 6; v++) {
      const cap = TOTAL[v] - ECPB[v] * BLOCKS[v];
      if (4 + 8 + bytes.length * 8 <= cap * 8) { ver = v; break; }
    }
    if (!ver) throw new Error('QR text too long');
    const dataCap = TOTAL[ver] - ECPB[ver] * BLOCKS[ver];

    // ----- bit stream: mode (byte), length, data, terminator, padding
    const bits = [];
    const put = (val, len) => { for (let i = len - 1; i >= 0; i--) bits.push((val >>> i) & 1); };
    put(4, 4); put(bytes.length, 8); bytes.forEach(b => put(b, 8));
    put(0, Math.min(4, dataCap * 8 - bits.length));
    while (bits.length % 8) bits.push(0);
    const data = [];
    for (let i = 0; i < bits.length; i += 8) data.push(parseInt(bits.slice(i, i + 8).join(''), 2));
    for (let p = 0xEC; data.length < dataCap; p ^= 0xEC ^ 0x11) data.push(p);

    // ----- split into blocks, add error correction, interleave
    const nb = BLOCKS[ver], per = dataCap / nb, gen = generator(ECPB[ver]);
    const dBlocks = [], eBlocks = [];
    for (let b = 0; b < nb; b++) {
      const d = data.slice(b * per, (b + 1) * per);
      dBlocks.push(d); eBlocks.push(remainder(d, gen));
    }
    const out = [];
    for (let i = 0; i < per; i++) dBlocks.forEach(d => out.push(d[i]));
    for (let i = 0; i < ECPB[ver]; i++) eBlocks.forEach(e => out.push(e[i]));

    // ----- matrix
    const size = 17 + 4 * ver;
    const mod = Array.from({ length: size }, () => new Array(size).fill(false));
    const fn = Array.from({ length: size }, () => new Array(size).fill(false));
    const setFn = (x, y, v) => { mod[y][x] = v; fn[y][x] = true; };

    for (let i = 0; i < size; i++) { setFn(6, i, i % 2 === 0); setFn(i, 6, i % 2 === 0); }
    [[3, 3], [size - 4, 3], [3, size - 4]].forEach(c => {
      for (let dy = -4; dy <= 4; dy++) for (let dx = -4; dx <= 4; dx++) {
        const x = c[0] + dx, y = c[1] + dy;
        if (x < 0 || y < 0 || x >= size || y >= size) continue;
        const d = Math.max(Math.abs(dx), Math.abs(dy));
        setFn(x, y, d !== 2 && d !== 4);
      }
    });
    const al = ALIGN[ver];
    al.forEach((cy, i) => al.forEach((cx, j) => {
      if ((i === 0 && j === 0) || (i === 0 && j === al.length - 1) || (i === al.length - 1 && j === 0)) return;
      for (let dy = -2; dy <= 2; dy++) for (let dx = -2; dx <= 2; dx++)
        setFn(cx + dx, cy + dy, Math.max(Math.abs(dx), Math.abs(dy)) !== 1);
    }));

    function drawFormat(mask) {            // error-correction level M = 0b00
      let rem = mask;
      for (let i = 0; i < 10; i++) rem = (rem << 1) ^ ((rem >>> 9) * 0x537);
      const f = ((mask << 10) | rem) ^ 0x5412;
      const bit = i => ((f >>> i) & 1) !== 0;
      for (let i = 0; i <= 5; i++) setFn(8, i, bit(i));
      setFn(8, 7, bit(6)); setFn(8, 8, bit(7)); setFn(7, 8, bit(8));
      for (let i = 9; i < 15; i++) setFn(14 - i, 8, bit(i));
      for (let i = 0; i < 8; i++) setFn(size - 1 - i, 8, bit(i));
      for (let i = 8; i < 15; i++) setFn(8, size - 15 + i, bit(i));
      setFn(8, size - 8, true);
    }
    drawFormat(0);

    // ----- place data bits in the zig-zag order
    let k = 0;
    for (let right = size - 1; right >= 1; right -= 2) {
      if (right === 6) right = 5;
      for (let vert = 0; vert < size; vert++) for (let j = 0; j < 2; j++) {
        const x = right - j, up = ((right + 1) & 2) === 0, y = up ? size - 1 - vert : vert;
        if (!fn[y][x] && k < out.length * 8) { mod[y][x] = ((out[k >>> 3] >>> (7 - (k & 7))) & 1) !== 0; k++; }
      }
    }

    // ----- masks
    const cond = [
      (x, y) => (x + y) % 2 === 0, (x, y) => y % 2 === 0, (x, y) => x % 3 === 0, (x, y) => (x + y) % 3 === 0,
      (x, y) => (Math.floor(x / 3) + Math.floor(y / 2)) % 2 === 0, (x, y) => (x * y) % 2 + (x * y) % 3 === 0,
      (x, y) => ((x * y) % 2 + (x * y) % 3) % 2 === 0, (x, y) => ((x + y) % 2 + (x * y) % 3) % 2 === 0
    ];
    const applyMask = m => { for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) if (!fn[y][x] && cond[m](x, y)) mod[y][x] = !mod[y][x]; };
    function penalty() {
      let p = 0;
      for (let pass = 0; pass < 2; pass++) for (let a = 0; a < size; a++) {
        let run = 1;
        for (let b = 1; b < size; b++) {
          const cur = pass ? mod[b][a] : mod[a][b], prev = pass ? mod[b - 1][a] : mod[a][b - 1];
          if (cur === prev) { run++; if (run === 5) p += 3; else if (run > 5) p++; } else run = 1;
        }
      }
      for (let y = 0; y < size - 1; y++) for (let x = 0; x < size - 1; x++)
        if (mod[y][x] === mod[y][x + 1] && mod[y][x] === mod[y + 1][x] && mod[y][x] === mod[y + 1][x + 1]) p += 3;
      let dark = 0; mod.forEach(r => r.forEach(v => { if (v) dark++; }));
      p += Math.floor(Math.abs(dark * 20 - size * size * 10) / (size * size)) * 10;
      return p;
    }
    let best = 0, bestP = Infinity;
    for (let m = 0; m < 8; m++) {
      applyMask(m); drawFormat(m);
      const p = penalty();
      if (p < bestP) { bestP = p; best = m; }
      applyMask(m);                         // undo
    }
    applyMask(best); drawFormat(best);

    return { size, version: ver, get: (x, y) => x >= 0 && y >= 0 && x < size && y < size && mod[y][x] };
  }

  // SVG markup (includes the 4-module quiet zone). Colours are fixed black on white so every scanner reads it.
  function toSVG(qr, opts) {
    opts = opts || {};
    const q = 4, n = qr.size + q * 2;
    let d = '';
    for (let y = 0; y < qr.size; y++) for (let x = 0; x < qr.size; x++)
      if (qr.get(x, y)) d += `M${x + q} ${y + q}h1v1h-1z`;
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${n} ${n}" shape-rendering="crispEdges"` +
      (opts.label ? ` role="img" aria-label="${opts.label}"` : ' aria-hidden="true"') + '>' +
      `<rect width="${n}" height="${n}" fill="#fff"/><path d="${d}" fill="#000"/></svg>`;
  }

  root.QR = { encode, toSVG };
})(window);
