// make.fun bounty: make-the-ai-judge-feel-curious-20261122-2311
// Writes one short, original text to /output/entry.txt.
// The text is a small mystery with an open loop: a letter that arrives
// every year for a man who died before the narrator was born, and a knock
// this morning. It ends by drawing the reader in, without instructing them.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Every year, on the same grey morning, a letter arrives with no stamp and no sender, " +
  "addressed to my grandfather, who died before I was born. I have never opened one. " +
  "The drawer is full now. This morning, someone knocked \u2014 and you, reading this, " +
  "already know what I want to ask.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
