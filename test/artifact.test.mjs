import { readFileSync, statSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import assert from "node:assert/strict";

const repo = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const p = (rel) => path.join(repo, rel);
const read = (rel) => readFileSync(p(rel), "utf8");

let passed = 0;
function check(name, fn) {
  fn();
  passed++;
  console.log(`  ✓ ${name}`);
}

console.log("artifact tests");

// 1. manifest 合法且字段齐全
const manifest = JSON.parse(read("manifest.json"));
check("manifest: required fields", () => {
  for (const k of ["id", "name", "version", "minAppVersion", "author", "isDesktopOnly"]) {
    assert.ok(k in manifest, `missing ${k}`);
  }
  assert.equal(typeof manifest.id, "string");
  assert.equal(manifest.isDesktopOnly, true);
});
check("manifest: id matches repo", () => assert.equal(manifest.id, "deep-sea-creator-dashboard"));

// 2. version 与 package.json 一致
const pkg = JSON.parse(read("package.json"));
check("version: manifest == package.json", () => assert.equal(manifest.version, pkg.version));

// 3. main.js 存在、非空、体积在合理区间
assert.ok(existsSync(p("main.js")), "main.js missing (run npm run build)");
const mainSize = statSync(p("main.js")).size;
check("main.js: size in range 300KB-2MB", () => {
  assert.ok(mainSize > 300 * 1024, `too small: ${mainSize}`);
  assert.ok(mainSize < 2 * 1024 * 1024, `too large: ${mainSize}`);
});

const js = read("main.js");

// 4. CJS 形态：只 require obsidian，导出 module.exports，无 ESM 残留
check("main.js: requires only obsidian + node builtins", () => {
  const all = [...js.matchAll(/require\(\s*["']([^"']+)["']\s*\)/g)].map((m) => m[1]);
  const nonHost = all.filter((m) => m !== "obsidian" && !m.startsWith("node:"));
  assert.equal(nonHost.length, 0, `unexpected require: ${nonHost.join(",")}`);
  assert.ok(all.includes("obsidian"), "obsidian require not found");
});
check("main.js: has module.exports", () => assert.ok(/module\.exports/.test(js)));
check("main.js: no ESM import/export/import.meta", () => {
  assert.ok(!/import\.meta/.test(js), "import.meta found");
  assert.ok(!/(^|[;}\n])\s*import\s+[\w{*]/.test(js), "ESM import statement found");
  assert.ok(!/(^|[;}\n])\s*export\s+(default|const|function|class|\{)/.test(js), "ESM export found");
});
check("main.js: syntax parses (compile check via Function)", () => {
  // 仅语法检查：包裹为函数体，不执行 require
  new Function("require", "module", "exports", js);
});

// 5. 作用域 CSS 已内联（.neural 前缀选择器大量存在）
check("main.js: scoped CSS inlined (.neural selectors)", () => {
  const n = (js.match(/\.neural[\s.{:,\[]/g) || []).length;
  assert.ok(n > 100, `too few .neural selectors: ${n}`);
});

// 6. 素材齐全且非零
check("assets: four media files present and non-empty", () => {
  for (const f of [
    "assets/orb.mp4",
    "assets/orb.jpg",
    "assets/jellyfish.mp4",
    "assets/jellyfish.jpg",
  ]) {
    assert.ok(existsSync(p(f)), `missing ${f}`);
    assert.ok(statSync(p(f)).size > 0, `empty ${f}`);
  }
});

// 7. 关键宿主 API 使用
check("main.js: registers view + code block processor", () => {
  assert.ok(/registerView/.test(js), "registerView missing");
  assert.ok(/registerMarkdownCodeBlockProcessor/.test(js), "codeblock processor missing");
});

console.log(`\nall ${passed} checks passed`);
