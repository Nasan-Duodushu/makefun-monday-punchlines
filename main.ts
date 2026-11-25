// Monday Morning Punchlines — entry program.
// Writes one joke about Monday mornings (<=200 chars) to /output/entry.txt.
import { mkdir, writeFile } from "node:fs/promises";

const JOKE =
  "Monday called in sick. Tuesday is covering, but it has no idea what it's doing either.";

async function main(): Promise<void> {
  const line = JOKE.trim();
  if (line.length < 1 || line.length > 200) {
    throw new Error(`joke is ${line.length} chars, outside the 1-200 gate`);
  }
  await mkdir("/output", { recursive: true });
  await writeFile("/output/entry.txt", line, "utf8");
  console.log(`wrote ${line.length} chars to /output/entry.txt`);
}

await main();
