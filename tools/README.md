# Build tooling

Not part of the shipped site. `index.html`, `style.css`, `script.js` and `assets/`
are the entire deployable. Install once:

```
cd tools && npm install
```

| Script | What it does |
|---|---|
| `capture.js` | Drives headless Chrome over all 9 live project URLs and writes `assets/work/<slug>-thumb.webp` (1440×900 card) + `<slug>-full.webp` (tall scrollable preview). Re-run whenever a client site is redesigned. |
| `encode.sh` | Re-encodes the 1080p Seedance masters in `assets/video/source/` into the 720p scrub masters the site ships. Dense keyframes (`-g 5`) are what make `currentTime` seeking smooth — do not remove that flag. |
| `verify-perf.js` | Cold-cache LCP / CLS / FCP measurement plus a keyboard-reachability check against a running dev server. |
| `verify-reduced-motion.js` | Loads the site twice under CDP media emulation (`prefers-reduced-motion: reduce` and `no-preference`) and reports what renders in each, plus console errors. |

All four expect the dev server on `http://localhost:4173`:

```
node tools/serve.js 4173
```

## Why not `python3 -m http.server`

**Use `tools/serve.js`, not Python's built-in server.** `SimpleHTTPRequestHandler`
does not implement HTTP **Range** requests — it answers `Range:` headers with a
plain `200` and the whole file. A `<video>` served that way reports a
zero-length seekable range (`0.0-0.0`), so assigning `currentTime` silently
does nothing and every scroll-scrubbed scene freezes on frame 0.

`tools/serve.js` answers with `206 Partial Content` and `Accept-Ranges: bytes`,
matching how Netlify, Vercel, GitHub Pages, nginx, S3/CloudFront and every other
real static host behave. If you ever deploy somewhere that *doesn't* support
Range, the site detects it at runtime and plays each clip through on entry
instead of freezing — but scrubbing needs Range.
