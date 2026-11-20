// Entry program for news-image-20261120 (Node 22, standard library only).
//
// The entry is a newspaper front page summing up Friday 20 November 2026:
// the World Court's genocide verdict against Myanmar, Trump putting the
// Iran decision off to 2027, Cyclone Akvan bearing down on Odisha, Russia
// open to NATO-style guarantees for Ukraine, and the strike on Riyadh's
// tallest tower — plus four more stories in the footer strip.
//
// The image lives in this repository as entry.png. All this program does
// is check that it really is a PNG and copy it, byte for byte, into the
// output directory the grader provides, so the two grading runs produce
// identical files.
//
// Run it locally with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const here = new URL("./entry.png", import.meta.url);

// A PNG always starts with these eight bytes. Refuse anything else
// rather than silently copying a corrupt or wrong-format file.
const pngMagic = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
const image = readFileSync(here);
if (image.subarray(0, pngMagic.length).equals(pngMagic) === false) {
  throw new Error("entry.png does not start with the PNG signature");
}
if (image.length > 1048576) {
  throw new Error(`entry.png is ${image.length} bytes, over the 1 MiB limit`);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(here, join(outDir, "entry.png"));
