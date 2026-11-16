import { transform } from "esbuild";
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const here = path.dirname(fileURLToPath(import.meta.url));
const repo = path.resolve(here, "..");
const src = path.join(repo, "src", "main.js");
const out = path.join(repo, "main.js");

// 单文件压缩（不打包）：与 CLI `--minify --format=cjs --target=es2018 --charset=utf8` 等价
const code = readFileSync(src, "utf8");
const result = await transform(code, {
  loader: "js",
  minify: true,
  format: "cjs",
  target: "es2018",
  charset: "utf8",
  legalComments: "none",
});

if (result.warnings.length) {
  for (const w of result.warnings) console.warn("[esbuild warning]", w.text);
}
writeFileSync(out, result.code);
console.log(`[build] main.js written from src/main.js (${result.code.length} bytes)`);
