import sharp from "sharp";

const width = 1200;
const height = 630;

const pizza = await sharp("public/images/calabresa.jpeg")
  .resize(620, height, { fit: "cover", position: "centre" })
  .jpeg({ quality: 100 })
  .toBuffer();

const logo = await sharp("public/images/logo.jpg")
  .resize(112, 112, { fit: "cover" })
  .jpeg({ quality: 100 })
  .toBuffer();

const overlay = Buffer.from(`
  <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <rect width="580" height="${height}" fill="#1d1716"/>
    <rect x="580" width="620" height="${height}" fill="#b30d17" opacity="0.18"/>
    <rect x="578" width="2" height="${height}" fill="#f2b2a8" opacity="0.75"/>
    <text x="72" y="238" fill="#f2b2a8" font-family="Arial, sans-serif" font-size="16" font-weight="700" letter-spacing="4">ARTISAN PIZZA · GRAMADO</text>
    <text x="72" y="330" fill="#ffffff" font-family="Arial, sans-serif" font-size="72" font-weight="500" letter-spacing="-3">Crisp by</text>
    <text x="72" y="405" fill="#ffffff" font-family="Arial, sans-serif" font-size="72" font-weight="500" letter-spacing="-3">design.</text>
    <text x="72" y="490" fill="#f6c4bc" font-family="Georgia, serif" font-size="70" font-style="italic" letter-spacing="-3">Generous by nature.</text>
    <text x="72" y="566" fill="#ffffff" opacity="0.58" font-family="Arial, sans-serif" font-size="13" font-weight="700" letter-spacing="2">WILLIAMS-PIZZA-2026.VERCEL.APP</text>
  </svg>
`);

await sharp({
  create: {
    width,
    height,
    channels: 4,
    background: "#1d1716",
  },
})
  .composite([
    { input: pizza, left: 580, top: 0 },
    { input: overlay, left: 0, top: 0 },
    { input: logo, left: 70, top: 62 },
  ])
  .png({ compressionLevel: 9, adaptiveFiltering: true })
  .toFile("public/og-image.png");

console.log("Generated public/og-image.png");
