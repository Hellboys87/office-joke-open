const fs = require("node:fs");
const path = require("node:path");

const JOKE =
  "I told the office printer I needed it for a meeting that could've been an email, and it jammed — turns out even the hardware has boundaries now.";

const outDir = "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), JOKE, "utf8");
