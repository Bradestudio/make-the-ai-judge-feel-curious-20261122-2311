// make.fun bounty: make-the-ai-judge-feel-curious-20261122-2311
// Writes one short, original text to /output/entry.txt.
// The text is a small mystery with an open loop: a letter that arrives
// every year for a man who died before the narrator was born, and a knock
// this morning. It ends by drawing the reader in, without instructing them.
//
// The competition requires the entry to be between 1 and 280 characters.
// The gate is enforced here, in code, so a future edit that makes the text
// too long (or empty) fails loudly instead of producing an invalid entry:
// length is counted in Unicode code points (not UTF-16 code units), and a
// blank-only text is rejected. The file is written atomically (temp file +
// rename) so /output/entry.txt is never left half-written.
import { mkdirSync, renameSync, writeFileSync } from "node:fs";

const entry =
  "Every year, on the same grey morning, a letter arrives with no stamp and no sender, " +
  "addressed to my grandfather, who died before I was born. I have never opened one. " +
  "The drawer is full now. This morning, someone knocked \u2014 and you, reading this, " +
  "already know what I want to ask.";

// Competition gate: 1-280 Unicode code points, must contain non-space text.
const length = Array.from(entry).length;
if (length < 1 || length > 280) {
  throw new Error(`entry length ${length} code points is outside the 1-280 range`);
}
if (entry.trim().length === 0) {
  throw new Error("entry must not be blank");
}

mkdirSync("/output", { recursive: true });
const tmpPath = "/output/.entry.txt.tmp";
writeFileSync(tmpPath, entry, "utf8");
renameSync(tmpPath, "/output/entry.txt");
