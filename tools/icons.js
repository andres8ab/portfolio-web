// Rasterize the brand mark into every icon size the platforms actually ask for.
// Source of truth: assets/icons/icon.svg. Run with: node tools/icons.js
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const ROOT = path.resolve(__dirname, '..');
const ICONS = path.join(ROOT, 'assets', 'icons');
const SRC = path.join(ICONS, 'icon.svg');

// iOS applies its own rounded mask to apple-touch-icon, so feed it a square
// mark — the rounded source would render with visibly doubled corners.
const SQUARE = Buffer.from(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">` +
  `<rect width="100" height="100" fill="#07060C"/>` +
  `<path d="M28 74 50 26l22 48h-12l-10-23-10 23z" fill="#9B5CFF"/></svg>`
);

const render = (input, size, out) =>
  sharp(input, { density: 512 })
    .resize(size, size, { fit: 'contain' })
    .png({ compressionLevel: 9 })
    .toFile(path.join(ICONS, out))
    .then(() => console.log(`  ${out} — ${size}x${size}`));

// PNG-in-ICO: 6-byte ICONDIR + 16-byte ICONDIRENTRY + the raw PNG payload.
// Every browser since IE11 reads this, and it saves shipping a BMP encoder.
function ico(png) {
  const dir = Buffer.alloc(6);
  dir.writeUInt16LE(0, 0);            // reserved
  dir.writeUInt16LE(1, 2);            // type: icon
  dir.writeUInt16LE(1, 4);            // one image
  const entry = Buffer.alloc(16);
  entry.writeUInt8(32, 0);            // width
  entry.writeUInt8(32, 1);            // height
  entry.writeUInt8(0, 2);             // palette size (0 = truecolor)
  entry.writeUInt8(0, 3);             // reserved
  entry.writeUInt16LE(1, 4);          // colour planes
  entry.writeUInt16LE(32, 6);         // bits per pixel
  entry.writeUInt32LE(png.length, 8); // payload size
  entry.writeUInt32LE(22, 12);        // payload offset
  return Buffer.concat([dir, entry, png]);
}

(async () => {
  if (!fs.existsSync(SRC)) throw new Error(`missing source: ${SRC}`);
  console.log('icons →');

  await render(SRC, 32, 'icon-32.png');
  await render(SRC, 192, 'icon-192.png');
  await render(SRC, 512, 'icon-512.png');
  await render(SQUARE, 180, 'apple-touch-icon.png');

  const png32 = await sharp(SRC, { density: 512 }).resize(32, 32).png().toBuffer();
  fs.writeFileSync(path.join(ROOT, 'favicon.ico'), ico(png32));
  console.log('  favicon.ico — 32x32');
})().catch(err => { console.error(err); process.exit(1); });
