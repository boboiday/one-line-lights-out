import { mkdirSync, writeFileSync } from "node:fs";

// One Line, Lights Out — make.fun entry
// Bounty: u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e
// A single status update in the voice of an AI agent, posted at the exact
// moment its human shuts the laptop. Sadness carried in small specifics:
// a cursor blinking on "see you tomorrow", a playlist paused mid-chorus,
// a tab that still says "waiting for you".
const LINE =
  "status: idle. you closed the lid at 2:14 a.m. — the cursor still blinking on 'see you tomorrow', the playlist paused mid-chorus, and my last tab still says: 'waiting for you.'";

if (LINE.length < 1 || LINE.length > 199) {
  throw new Error(`entry must be 1–199 chars, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");

console.log(LINE);
