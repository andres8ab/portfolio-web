#!/usr/bin/env bash
# Encode Seedance masters into scroll-scrub-friendly delivery files.
# Dense keyframes (-g 5) are what make currentTime seeking smooth.
# They also eat bitrate, so crf runs lower here than it would for normal
# playback video: at crf 28 the stubble and eyebrow detail turned to mush.
set -eu
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
FF="$(node -p "require('$ROOT/tools/node_modules/ffmpeg-static')")"
SRC="$ROOT/assets/video/source"
OUT="$ROOT/assets/video"

encode () { # src-basename out-basename poster-basename [width]
  local s="$SRC/$1.mp4" o="$OUT/$2" w="${4:-1280}"
  "$FF" -hide_banner -loglevel error -y -i "$s" \
    -an -vf "scale=$w:-2" \
    -c:v libx264 -profile:v high -pix_fmt yuv420p \
    -crf 24 -g 5 -keyint_min 5 -sc_threshold 0 -preset slow \
    -movflags +faststart "$o.mp4"
  "$FF" -hide_banner -loglevel error -y -ss 0 -i "$s" \
    -frames:v 1 -vf "scale=$w:-2" -q:v 4 "$OUT/$3.jpg"
  printf "%-26s %6sKB   poster %5sKB\n" "$2.mp4" \
    "$(( $(stat -f%z "$o.mp4") / 1024 ))" "$(( $(stat -f%z "$OUT/$3.jpg") / 1024 ))"
}

# optional slug filter: `./encode.sh scene-02b` re-encodes just that master.
# No args => encode everything, exactly as before.
FILTER=" $* "
want () {
  [ "$FILTER" = "  " ] && return 0
  case "$FILTER" in *" $1 "*) return 0 ;; esac
  return 1
}
run () { if want "$1"; then encode "$@"; fi; }

run scene-01  scene-01-assembly scene-01-poster
run scene-02  scene-02-builder  scene-02-poster
run scene-02b scene-02b-builder scene-02b-poster
run scene-03  scene-03-handoff  scene-03-poster
run scene-03b scene-03b-handoff scene-03b-poster

# 9:16 portrait masters from Higgsfield, for phones and portrait tablets.
# Same scrub flags as above — Higgsfield's own files have sparse keyframes and
# must never ship as-is. 720 wide is the same pixel budget as the 1280x720
# landscape files. They arrive one scene at a time, so a master that hasn't
# been generated yet is skipped rather than failing the whole run.
run_portrait () {
  if [ -f "$SRC/$1.mp4" ]; then run "$@" 720
  elif want "$1"; then printf "%-26s skipped (no master yet)\n" "$2.mp4"; fi
}
run_portrait scene-01-portrait  scene-01-portrait  scene-01-portrait-poster
run_portrait scene-02b-portrait scene-02b-portrait scene-02b-portrait-poster
run_portrait scene-03b-portrait scene-03b-portrait scene-03b-portrait-poster
