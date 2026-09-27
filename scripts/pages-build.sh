#!/bin/sh
# Assemble the static site Cloudflare Pages publishes. Paths stay relative,
# so the site is served from the domain root (not /anayas-apps).
set -eu
cd "$(dirname "$0")/.."
rm -rf dist
mkdir -p dist
cp index.html dist/index.html
cp -R assets dist/assets
cp -R games dist/games
cp -R play dist/play
