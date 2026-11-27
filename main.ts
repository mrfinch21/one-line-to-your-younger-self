// One Line to Your Younger Self — entry program (v2)
// Revision: tightened v1 into a single breath — "isn't worth the sleep
// it costs" replaces the clunkier "pays less than the sleep it costs",
// and the semicolon became a comma so the line lands in one flow.
// Writes a single line, in English, to /output/entry.txt.
// Deterministic: no input, no network, no randomness, no clock.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Kid, the airdrop you're refreshing at 3 a.m. isn't worth the sleep it costs — go to bed, the chain will still be there tomorrow.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
