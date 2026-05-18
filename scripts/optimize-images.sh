#!/usr/bin/env bash
# 压缩 docs/public 图片：PNG → WebP（q88），并优化 SVG
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
TOOLS="$ROOT/.tools"
PUBLIC="$ROOT/docs/public"
IMG="$PUBLIC/img"
QUALITY=88

ensure_cwebp() {
  local CWEBP="$TOOLS/cwebp"
  if [[ -x "$CWEBP" ]]; then
    echo "$CWEBP"
    return
  fi
  local ARCH OXIPNG_ARCH
  ARCH="$(uname -m)"
  case "$ARCH" in
    arm64) OXIPNG_ARCH="mac-arm64" ;;
    x86_64) OXIPNG_ARCH="mac-x86-64" ;;
    *)
      echo "Unsupported arch: $ARCH"
      exit 1
      ;;
  esac
  mkdir -p "$TOOLS"
  curl -fsSL "https://storage.googleapis.com/downloads.webmproject.org/releases/webp/libwebp-1.4.0-${OXIPNG_ARCH}.tar.gz" \
    | tar -xz -C /tmp
  cp "/tmp/libwebp-1.4.0-${OXIPNG_ARCH}/bin/cwebp" "$CWEBP"
  chmod +x "$CWEBP"
  echo "$CWEBP"
}

CWEBP="$(ensure_cwebp)"

echo "→ PNG → WebP (quality $QUALITY)"
shopt -s nullglob
for f in "$IMG"/*.png; do
  base=$(basename "$f" .png)
  "$CWEBP" -q "$QUALITY" -m 6 -mt "$f" -o "$IMG/${base}.webp"
  rm "$f"
  echo "  $base.webp"
done

echo "→ SVG (svgo)"
npx --yes svgo@3.3.2 -f "$PUBLIC" -r --multipass

echo "Done."
