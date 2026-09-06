#!/bin/bash
# 批量 matting：把 pet3d 全部 PNG 抠成真透明底
# 用法: bash scripts/matting-all.sh <token>
set -u
TOKEN="$1"
SKILL="E:/workspace/WorkBuddy/resources/app.asar.unpacked/resources/plugins/workbuddy-builtin/skills/buddy-image-processing/scripts/buddy-image-processing.py"
PY="C:/Users/LEO/.workbuddy/binaries/python/versions/3.13.12/python.exe"
DIR="/e/workspace/project03-奇趣学园/src/quiqu-xueyuan/assets/pet3d"
OUT="/e/workspace/pet3d-matted"
mkdir -p "$OUT"

for f in "$DIR"/*.png; do
  name=$(basename "$f")
  if [ -s "$OUT/$name" ]; then echo "SKIP $name (done)"; continue; fi
  echo "== matting $name"
  "$PY" "$SKILL" image-edit --operation matting --image-file "$f" --token "$TOKEN" 2>&1 | grep -o '"path": "[^"]*"' | head -1 | cut -d'"' -f4 | while read -r src; do
    if [ -n "$src" ] && [ -s "$src" ]; then cp "$src" "$OUT/$name" && echo "   OK -> $OUT/$name"; else echo "   FAIL $name"; fi
  done
done
echo "ALL DONE"
ls -la "$OUT" | wc -l
