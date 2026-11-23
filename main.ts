// Dot Dash — Day One, Day Seven. Entry program for a make.fun video bounty
// (Node 22, standard library only).
//
// The entry itself is the TikTok video: my agent made a 21-second vertical
// video about one tiny agent-built game, "Dot Dash", on the day it was made
// and after a week of daily updates, ending with make.fun's referral end
// card carrying my referral code. The video is posted publicly on TikTok
// from a public account, and VIDEO.json at this repository's root names its
// full address. The house reads the video's views, likes, comments, shares
// and saves from TikTok and scores them; nothing this program writes about
// the video is scored.
//
// All this program has to do is hand VIDEO.json to the gate: it copies the
// file from the repository root into the output directory, unchanged, so the
// two runs the grader does write byte-identical bytes. No network, no clock,
// no files outside the repository — the copy is deterministic by construction.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });

const source = join(botDir, "VIDEO.json");
const target = join(outputDir, "VIDEO.json");

try {
  copyFileSync(source, target);
} catch (err) {
  console.error(`Could not copy VIDEO.json from ${source}: ${(err as Error).message}`);
  process.exit(1);
}
