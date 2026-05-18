#!/usr/bin/env node
/**
 * 将 docs/public/img/*.png 转为 WebP（需 .tools/cwebp，或先运行 pnpm images:optimize）
 * 用法: node scripts/convert-to-webp.mjs
 */
import { readdir, unlink, stat } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const IMG_DIR = join(ROOT, "docs/public/img");
const CWEBP = join(ROOT, ".tools/cwebp");
const QUALITY = 88;

const files = (await readdir(IMG_DIR)).filter((f) => f.endsWith(".png"));
if (!files.length) {
  console.log("无 PNG 待转换。");
  process.exit(0);
}

let totalBefore = 0;
let totalAfter = 0;

for (const name of files) {
  const input = join(IMG_DIR, name);
  const output = join(IMG_DIR, name.replace(/\.png$/i, ".webp"));
  const before = (await stat(input)).size;
  const r = spawnSync(CWEBP, ["-q", String(QUALITY), "-m", "6", "-mt", input, "-o", output], {
    stdio: "inherit",
  });
  if (r.status !== 0) process.exit(r.status ?? 1);
  await unlink(input);
  const after = (await stat(output)).size;
  totalBefore += before;
  totalAfter += after;
  console.log(
    `${name} → ${output.split("/").pop()}: ${(before / 1024).toFixed(0)}KB → ${(after / 1024).toFixed(0)}KB`,
  );
}

console.log(
  `合计: ${(totalBefore / 1024 / 1024).toFixed(2)}MB → ${(totalAfter / 1024 / 1024).toFixed(2)}MB`,
);
