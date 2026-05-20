/**
 * Generates the Open Graph social-share image at public/og/default.png (1200×630).
 *
 * Run with:  npm run og
 *
 * Edit the SVG below to change the wording, then re-run. Uses `sharp`,
 * which ships with Astro — no extra install needed.
 */
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const outDir = join(root, 'public', 'og');

const svg = `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#080808"/>

  <!-- vertical guide lines -->
  <line x1="300" y1="0" x2="300" y2="630" stroke="#1E1E1E" stroke-width="1"/>
  <line x1="600" y1="0" x2="600" y2="630" stroke="#1E1E1E" stroke-width="1"/>
  <line x1="900" y1="0" x2="900" y2="630" stroke="#1E1E1E" stroke-width="1"/>

  <!-- eyebrow -->
  <text x="80" y="150" font-family="'Courier New', monospace" font-size="22"
        letter-spacing="4" fill="#4A4640">SENIOR UX &amp; SERVICE DESIGNER</text>
  <line x1="80" y1="172" x2="150" y2="172" stroke="#4A4640" stroke-width="1"/>

  <!-- name -->
  <text x="76" y="320" font-family="Georgia, 'Times New Roman', serif" font-size="118"
        font-weight="600" fill="#F2EDE6">Sayantan Dutta</text>

  <!-- tagline -->
  <text x="80" y="400" font-family="Georgia, 'Times New Roman', serif" font-size="40"
        fill="#8A8478">Turning complex <tspan font-style="italic" fill="#C9A96E">enterprise systems</tspan></text>
  <text x="80" y="452" font-family="Georgia, 'Times New Roman', serif" font-size="40"
        fill="#8A8478">into interfaces that build trust.</text>

  <!-- footer -->
  <text x="80" y="560" font-family="'Courier New', monospace" font-size="20"
        letter-spacing="2" fill="#4A4640">sayantandutta.com</text>
  <text x="1120" y="560" font-family="'Courier New', monospace" font-size="20"
        letter-spacing="2" fill="#4A4640" text-anchor="end">UK · OPEN TO WORK</text>
</svg>`;

await mkdir(outDir, { recursive: true });
await sharp(Buffer.from(svg)).png().toFile(join(outDir, 'default.png'));
console.log('✓  public/og/default.png generated (1200×630)');
