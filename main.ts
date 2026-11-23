import { mkdirSync, writeFileSync } from "node:fs";

// One-Star Review of Something Essential: a deadpan complaint filed in
// earnest against a thing that cannot be fixed — oxygen, and no opt-out.
const review =
  "Oxygen: invisible, odourless, and yet I have to keep breathing it every second just to stay alive. No opt-out.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, review, "utf8");
