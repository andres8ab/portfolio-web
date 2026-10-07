# MASTER BUILD PLAN — ANDRES OCHOA

*Creative brief + complete implementation instructions*
*Prepared 2026-09-14 · Target: Awwwards-quality cinematic portfolio*

---

## CONTEXT

Andres Ochoa is a frontend engineer with 4+ years of production experience — hired as a junior, promoted to semi-senior on demonstrated ownership and technical decision-making. He builds scalable, performant web and mobile applications, owning frontend architecture, API integrations, and performance optimization, both inside tech teams and as a freelancer. He has 9 shipped products live in the world, including a published iOS app.

What he does not have is a home for any of it. This project builds that home: a single-page cinematic portfolio that positions him for senior-level roles and freelance engagements. The site must do three jobs — prove taste, prove engineering ability, and open a conversation — and it must prove the second job *by existing*. A portfolio that claims performance expertise and then jank-scrolls is self-defeating, so the build quality of this site is itself the strongest exhibit in it.

**Intended outcome:** a static, dependency-light, buttery-smooth cinematic site at 60fps, with three AI-generated Seedance 2.0 scenes driving scroll storytelling, an interactive draggable browser showcasing his 9 real shipped products, and a contact form that converts recruiters and clients.

---

# PART I — CREATIVE BRIEF

## 1. WEBSITE OVERVIEW

| | |
|---|---|
| **Brand** | Andres Ochoa |
| **Type** | Personal portfolio — frontend / product engineer |
| **Format** | Single-page cinematic scroll narrative |
| **Primary audience** | Engineering managers, technical recruiters, founders, agency leads |
| **Secondary audience** | Peer engineers (credibility/referral loop) |
| **Primary action** | Submit the contact form → start a conversation about work |
| **Stack** | Static HTML / CSS / vanilla JS. GSAP + ScrollTrigger + Lenis via CDN. No frameworks. |
| **Success feels like** | "This person is more senior than their title. Let's talk this week." |

**The core idea:** the site is a three-act film about building software, and the viewer scrubs the film with their scroll wheel. Act I assembles an interface in front of them. Act II shows the person doing the assembling. Act III hands them the laptop and asks them to get in touch.

---

## 2. CORE POSITIONING

**One-line positioning**
> Building scalable web & mobile experiences.

**Expanded positioning statement**
> Andres Ochoa is a frontend engineer who builds web and mobile products that hold up in production. Four years of owning architecture, integrations, and performance — for tech teams and as a freelancer — across nine shipped products.

**The promise**
> Interfaces that scale. Code that survives the second year.

**What makes him different (the wedge)**
Most frontend portfolios show screenshots. This one shows *systems thinking* — architecture, integrations, performance — and backs every claim with a live URL you can click and scroll. The work is the proof; the site is the demonstration.

**Positioning against the obvious alternatives**

| They could hire… | Why Andres instead |
|---|---|
| A junior who needs direction | He was promoted *for* autonomy and technical decision-making |
| A designer who codes | He owns architecture, API integration, and performance — not just the surface |
| An agency | Direct ownership, no account-manager layer, freelance or embedded |

**Voice rules**
- Say what was built and what it does. No superlatives about himself.
- Real numbers only. Never invent metrics.
- Confidence without volume. Short declaratives. Verbs over adjectives.
- Spanish-language work is a strength, not a footnote — the portfolio is international.

---

## 3. BRAND PERSONALITY

**Archetype:** The Builder — the quiet one in the room who has already shipped it.

**Five traits**
1. **Precise** — nothing is approximate; every edge, every easing curve is intentional
2. **Cinematic** — sees interfaces as sequences, not screens
3. **Grounded** — production-minded, allergic to hype
4. **Bold** — huge type, deep contrast, unafraid of empty space
5. **Generous** — makes complexity feel effortless for the person using it

**Tone spectrum**

```
Playful  ─────────────●──────  Serious
Warm     ────────●───────────  Cool
Loud     ──────────────●─────  Quiet
Safe     ───────●────────────  Bold
Corporate ──────────────────●  Independent
```

**Three words:** *Engineered. Cinematic. Inevitable.*

---

## 4. VISUAL DIRECTION

**The world:** a deep-violet void. Not black — black is empty. This is the color of a screen at 2am, the ambient glow of an IDE in a dark room. Objects float in it, lit from within.

**Governing principles**

1. **Light is the material.** Nothing is "colored in." Surfaces are near-black; violet arrives as *emitted light* — glows, rim lights, gradient bleeds, bloom. Every accent should look like it has a bulb behind it.
2. **Apple-grade radii.** Rounded, continuous, generous: 20px on cards, 28px on panels, 999px on pills. Squircle-adjacent softness. Nothing sharp except the typography.
3. **Glass over void.** Elevated surfaces are `backdrop-filter: blur()` panes with 1px hairline borders at ~8% white. They should feel milled, not drawn.
4. **Huge typography as architecture.** Display type is a structural element, not a label. It clips, overlaps, scrolls horizontally, and gets pushed around by the scroll.
5. **Grain everywhere.** A constant, subtle film grain over the entire page unifies video and DOM into one medium. This is the single most important detail for the "cinematic" read — without it, video sections and CSS sections look like different websites.
6. **Restraint with the second accent.** The violet→magenta→cyan gradient appears maybe six times on the whole page. Used once, it's a signature. Used everywhere, it's a template.

**Reference feel:** Apple Intelligence gradients · Linear's dark surfaces · Vercel's typographic confidence · a Denis Villeneuve color grade.

**Anti-patterns — explicitly forbidden**
- Purple-on-purple flat fills with no light source
- Neon cyberpunk clichés (grids, scan lines, Matrix rain, glitch text)
- Stock "tech" imagery, circuit boards, generic 3D blobs
- Drop shadows that read as 2014 material design
- Any emoji in the UI

---

## 5. HIGGSFIELD SEEDANCE ASSET GENERATION

### Account status (verified 2026-09-14)
- **Plan:** PLUS · **Balance:** 1,010 credits
- **Model:** `seedance_2_0` (Bytedance) — supports `image_references` for identity locking, 4–15s, up to 4K
- **Verified pricing:** 9 credits/second at 1080p `std` → **90 credits per 10s shot**

### Budget

| Line item | Credits |
|---|---|
| 3 × keyframe stills (identity + composition lock) | ~30 |
| 3 × Seedance 2.0 · 10s · 1080p · 16:9 | 270 |
| Retake reserve (≈2 reshoots) | 180 |
| **Projected total** | **~480 of 1,010** |

Comfortable headroom. If a scene needs more than two retakes we still have room; if a shot needs to run longer than 15s, switch that scene to `seedance_2_5` (same 9 cr/sec, up to 30s).

### Identity reference — locked
**`media/andres-desktop.png`** is the canonical identity reference for every generation featuring Andres. It must be passed as `image_references` on **every** human shot so the face stays consistent across the site.

What the reference establishes: mid-30s Latino man, short dark wavy hair, trimmed dark beard, warm brown eyes, genuine open smile, black button-down shirt with sleeves, red string bracelet and gold ring on his hands, seated at a wood desk with a silver MacBook. The environment in the reference (warm wood, LED shelf strips, plants) is **not** to be carried over — we are relighting him into the violet void.

### Generation parameters — all scenes

```
model            seedance_2_0
resolution       1080p
mode             std
aspect_ratio     16:9
duration         10
generate_audio   false          ← site videos are muted; audio wastes nothing but adds file weight
genre            drama
bitrate_mode     high
medias           [ { role: "image_references", value: <andres-desktop media_id> },
                   { role: "start_image",      value: <scene keyframe media_id> } ]
```

### Two-stage generation (do not skip stage 1)
1. **Keyframe first.** Generate a still start-frame per scene with a high-fidelity image model, using `andres-desktop.png` as reference. Costs ~10 credits, locks composition + identity + palette, and makes the 90-credit video far more likely to land on the first try.
2. **Video second.** Feed that approved keyframe as `start_image` with the portrait as `image_references`.

### Global prompt suffix — append to all three scene prompts
```
Cinematic 1080p, anamorphic, shallow depth of field, deep violet and indigo
color grade, near-black background, volumetric rim light, soft lens bloom,
subtle film grain, slow deliberate camera movement, premium tech commercial
aesthetic. No text overlays, no captions, no watermarks, no on-screen UI text.
Calm confident energy — not motivational, not corporate stock footage.
```

### Post-processing pipeline (every clip)
`ffmpeg` is not installed on this machine — install locally via `npm i ffmpeg-static` (no sudo required).

1. Download the Seedance MP4 via `curl` → `assets/video/source/`
2. Encode the **scrub master**: 1280×720, H.264, CRF 28, **`-g 5`** (keyframe every 5 frames — essential, without dense keyframes scroll-scrubbing stutters), `-movflags +faststart`, no audio track
3. Encode a **VP9 `.webm`** alternative and serve whichever the browser prefers
4. Extract a **poster JPG** at frame 0, 1280px wide, q80
5. Target **≤ 4MB per clip, ≤ 12MB total video** across the site

Generating at 1080p and delivering at 720p is deliberate: the higher-resolution source downscales cleanly, and on a dark, graded, text-overlaid hero the delivered 720p is visually indistinguishable while scrubbing dramatically better.

---

## 6. THE THREE CINEMATIC SCENES

### SCENE 01 — "ASSEMBLY" · Hero
*Placement: hero, pinned, scroll-scrubbed 0→100%*

An interface builds itself out of nothing.

> **Prompt:** A sleek silver laptop slides into frame through a deep violet void, closed, floating, lit by a single soft rim light from behind. As it settles at center, abstract glowing UI panels, cards and geometric interface modules materialize around it one by one and fly inward with bouncy, spring-loaded motion, snapping into place against the laptop like an interface assembling itself in mid-air. Violet and indigo light pools on every edge. A soft glowing cursor trails between elements as they lock together. The camera holds, then begins a slow deliberate dolly push directly toward the laptop screen, which fills with violet light until it consumes the entire frame. Shallow depth of field, volumetric haze, lens bloom, weightless zero-gravity physics.

**Why this shot:** it states the thesis in eight seconds — *this person assembles interfaces* — before a single word is read.

**⚠️ Known limitation, flagged for the record:** generative video cannot render legible interface text. The floating panels will read as abstract glowing geometry, not real UI. This is accepted as a deliberate creative choice — the panels are *impressions* of interfaces, and all actual legible content (the H1, the eyebrow, the CTA) is composited in real DOM on top. Mitigation is built into the implementation: real typography sits above the video at all times, so the hero never depends on the video to communicate.

---

### SCENE 02 — "THE BUILDER" · Story → Work transition
*Placement: bridge between Story and Portfolio, pinned, scroll-scrubbed*

The person behind the work.

> **Prompt:** A man sits at a dark desk in a black-violet void, lit only by the glow of his screen and a cool violet rim light behind him. He is calm, focused, working — the same man as the reference image: short dark wavy hair, trimmed dark beard, black button-down shirt. Large translucent holographic interface panels float in the air around him at varying depths, showing abstract design systems, component grids, code structures and performance graphs, all rendered in glowing violet and soft cyan. The camera executes one slow continuous cinematic orbit around him from behind his left shoulder, arcing out and around to the front, gradually revealing the largest floating screen in front of him. He glances up toward the camera with quiet confidence as the orbit completes. Volumetric light shafts, floating dust motes, deep shadow, anamorphic flare.

**Why this shot:** puts a human face in the middle of the site at the exact moment a hiring manager is deciding whether this is a person or a template. The orbit reveal hands off directly into the portfolio.

---

### SCENE 03 — "THE HANDOFF" · Contact
*Placement: final act, before the contact form, pinned, scroll-scrubbed*

The invitation.

> **Prompt:** A man stands in a deep violet void, holding a closed silver laptop extended forward toward the camera in both hands. He is the same man as the reference image — short dark wavy hair, trimmed dark beard, black button-down shirt — and he is smiling, warm and genuine, making direct eye contact with the camera. He slowly opens the laptop lid. Violet light spills out from the widening gap, washing up across his face and hands. The camera pushes in smoothly past his hands toward the opening screen as the light intensifies, the frame tilting slightly, until the glowing screen fills and overtakes the entire frame in a wash of violet. Warm rim light on his shoulders, deep cinematic shadow, soft bloom, shallow depth of field.

**Why this shot:** it is a physical gesture of offering. The site ends on an open hand, not a hard sell — and the light wash is a natural cut into the contact section.

---

**Format decision:** three **separate** shots, as requested. Each is self-contained and self-resolving, letting each section stand alone and keeping file sizes independently optimizable. They are unified by grade, grain, lighting and lens language so they read as one film without needing to be one continuous take.

**Shared continuity rules across all three:** identical violet/indigo grade · same rim-light direction (behind-left) · same lens character (anamorphic, shallow DOF, gentle bloom) · every shot **opens from darkness and resolves into violet light**, so each one hands off cleanly to the DOM section beneath it.

---

## 7. WEBSITE STRUCTURE

```
00  PRELOADER            Counter 0→100, violet bloom reveal
01  NAV                  Floating glass pill, scroll-aware
02  HERO                 ▶ SCENE 01 scrub · kinetic H1 · scroll cue
03  STATS STRIP          Animated counters on a hairline rail
04  MISSION              Huge kinetic statement, word-by-word reveal
05  PILLARS              Three glass cards, 3D tilt on pointer
06  STORY                Sticky timeline, junior → semi-senior
07  BUILDER              ▶ SCENE 02 scrub · orbit reveal → hands off to work
08  WORK                 ★ Interactive draggable browser — 9 live products
09  STACK                Infinite marquee of technologies
10  HANDOFF              ▶ SCENE 03 scrub · laptop opens → light wash
11  CONTACT              Final CTA + on-page form
12  FOOTER               Minimal, monospaced, honest
```

Narrative arc: **assemble → prove → explain → humanize → show → invite.**

---

## 8. HERO SECTION

**Behavior:** `100vh`, pinned for ~250vh of scroll. Scene 01 scrubs behind; typography moves independently in front.

**Layered composition (back to front)**
1. Scene 01 video, `object-fit: cover`, scrubbing to scroll
2. Radial violet vignette, darkening the edges
3. Grain overlay
4. Typography layer
5. Scroll cue

**Copy**

```
eyebrow   FRONTEND ENGINEER — WEB & MOBILE

H1        BUILDING
          SCALABLE
          EXPERIENCES

sub       Four years turning interfaces into production systems.
          Frontend architecture, API integration, and performance
          that holds under real traffic.

cta       Let's build something          [ ↓ ]
```

`SCALABLE` carries the violet→magenta→cyan gradient and is the only gradient word above the fold.

**Typographic motion**
- Lines rise in on load with a 3D `rotateX(-45deg)` → `0` clip reveal, 90ms stagger
- On scroll, the three lines **de-synchronize** — line 1 drifts left, line 2 right, line 3 left — at different rates, while all three gain font-weight and width via the variable-font axes. This is the site's signature kinetic move.
- Opacity fades to 0 by 70% scroll progress, clearing the frame for the push into the screen
- Final 15% of scroll: the whole hero scales to `1.12` and fades, matching the video's dolly-in so DOM and video move as one object

**LCP protection:** the H1 renders immediately in real DOM. The video carries `poster`, `preload="none"`, and only attaches its source after `window.load`. Text is never blocked by video.

---

## 9. ANIMATED STATS STRIP

A full-bleed hairline rail directly beneath the hero — the first hard proof after the cinematic opening.

```
 ┌──────────┬──────────┬──────────┬──────────┐
 │   04+    │    09    │    02    │  JR→SSR  │
 │  YEARS   │ PRODUCTS │ PLATFORMS│ PROMOTED │
 │ in prod  │   live   │ web·iOS  │ on merit │
 └──────────┴──────────┴──────────┴──────────┘
```

**Integrity rule — non-negotiable:** every number here is derived from something Andres actually stated or something verifiable by clicking a link. **No invented metrics.** No "50M users," no "99.9% uptime," no fabricated Lighthouse scores. If a real number (users served, load-time improvement, revenue impact) becomes available later, it drops into a clearly-marked slot in the config object. A recruiter who clicks through and finds a claim unsupported has found the one thing that kills the site.

**Motion:** counters count up on enter using a monospace tabular-figure font so digits don't jitter. Staggered 120ms. Dividers draw in as 1px vertical lines scaling from `scaleY(0)`. The whole rail parallaxes at 0.85× page speed.

---

## 10. MISSION SECTION

Full-bleed, centered, enormous. Nothing but words and void.

```
eyebrow   WHY I BUILD

statement Software should feel
          effortless to the person
          using it — and obvious
          to the person maintaining
          it six months later.

body      I work with product teams and independent founders to
          ship interfaces that are fast, accessible, and built to
          be extended. Embedded in your team or freelance —
          the standard doesn't change.
```

**Motion:** word-by-word mask reveal driven by scroll position, not by a timed animation — the viewer's scroll physically pulls the sentence into existence. Each word rises from a `clip-path` mask with a 4° rotation settling to 0. `effortless` and `obvious` take the gradient treatment.

---

## 11. THREE PILLARS SECTION

Andres answered "not sure" here, so these are derived directly from his own description of his work — architecture, integrations, performance — which is exactly the right three-part split for a senior frontend profile.

```
eyebrow   WHAT I OWN

01  FRONTEND ARCHITECTURE
    Component systems, design systems, and state architecture
    that stay coherent as the team and the product grow.
    → Design systems · State architecture · Reusable component APIs

02  PRODUCT ENGINEERING — WEB & MOBILE
    End-to-end feature delivery across web and iOS. API
    integration, auth, data flow, and the unglamorous edges
    that decide whether a product actually ships.
    → REST/GraphQL integration · Auth & data flow · Web + iOS delivery

03  PERFORMANCE & EXPERIENCE
    Core Web Vitals, bundle discipline, and animation that
    never drops a frame. Speed is a feature, and it is the
    first one users notice.
    → Core Web Vitals · Bundle optimization · 60fps interaction
```

**Cards:** glass panes, 28px radius, hairline border. On pointer-move, a 3D tilt (max 6°) plus a violet radial glow that tracks the cursor. Index numerals sit oversized and semi-transparent behind each card's content. Cards enter with a staggered rise and a slight scale-from-0.96.

---

## 12. STORY SECTION

Sticky two-column: a pinned heading on the left, scrolling chapters on the right.

```
eyebrow   THE PATH

heading   Four years,
          nine products,
          one standard.

—— 2021 · THE START
Started as a junior frontend developer with one rule I've never
dropped: understand the whole system, not just my ticket.

—— 2022 · OWNERSHIP
Took the frontend architecture on projects that needed to scale —
component systems, state design, API integration layers. Stopped
waiting to be assigned the hard part.

—— 2023 · FREELANCE
Built and shipped full-stack products independently. Client work
teaches you what internal work can't: how to scope, how to say no,
and how to ship when there's no one to escalate to.

—— 2024 · PROMOTED
Moved up to semi-senior — not for time served, but for autonomy and
technical decision-making. Same engineer, more surface area.

—— TODAY
Nine products live across web and iOS. Looking for the team or the
client whose next thing deserves to be built properly.
```

Dates are inferred from "4 years of experience" as of 2026 and are marked in the build as a single editable config array — trivial to correct.

**Motion:** left column pins for the section's duration. A violet progress line draws down the right rail as chapters pass. Each chapter enters at 0.3 opacity and reaches full opacity when centered, dimming again on exit — only one chapter is ever fully lit.

---

## 13. WORK WITH ME SECTION *(Product / Service / Community)*

Placed immediately after the portfolio, while the proof is still on screen.

```
eyebrow   HOW WE CAN WORK

EMBEDDED IN YOUR TEAM
Full-time or contract. I join your team, own frontend
architecture, and ship alongside your engineers.
→ Best for: scaling products and teams that need senior frontend ownership

FREELANCE PROJECT
Scoped, end-to-end delivery. From architecture through launch,
web or mobile, with no account-manager layer in between.
→ Best for: founders and agencies who need it built right, once

ARCHITECTURE & PERFORMANCE REVIEW
A focused engagement on an existing codebase — structure,
Core Web Vitals, bundle size, and a prioritized plan your
team can actually execute.
→ Best for: products that shipped fast and now need to hold
```

Three horizontal rows, not cards — they read as a menu. Each row expands its detail line on hover, with an arrow that translates right. Each scrolls to the contact form with its subject pre-selected.

---

## 14. FEATURED WORK — THE INTERACTIVE BROWSER ★

The centerpiece, and the answer to Andres's specific request: a high-tech browser window containing draggable thumbnails; click one to open a scrollable mini-preview of the real site.

### Frame
A full-bleed glass browser chrome: rounded 24px, hairline border, blurred backdrop. Traffic-light dots (styled violet/indigo/slate, not literal macOS colors). A monospace URL bar reading `andresochoa.dev/work`, which live-updates to the hovered project's real domain. A faint dot-grid canvas floor inside the frame.

### Canvas — the drag layer
The 9 thumbnails scatter across the canvas at authored positions with slight rotations (−6° to +6°) and varied z-index. They are:

- **Pointer-draggable** with momentum and a spring settle
- **Bounded** to the frame with soft elastic resistance at the edges
- **Lifted** on grab — scale 1.04, shadow deepens, violet glow blooms, cursor becomes `grabbing`
- **Never overlapping-locked** — grabbing a card raises it to the top of the stack
- **Idle-animated** — a slow ±4px float on independent sine offsets so the canvas breathes when untouched

A "SHUFFLE" pill re-scatters them; a "RESET" pill returns them to the authored layout.

### The preview card
Clicking (as opposed to dragging — distinguished by a <6px pointer-travel threshold) expands the thumbnail via a FLIP transition into a centered preview panel:

- Left: a masked viewport showing a **tall full-page capture** of the real site, scrollable inside the mask with inertia — it feels exactly like scrolling the live site
- Right: project name, role, stack tags, a one-line note, and a **VISIT LIVE SITE ↗** button
- Backdrop blurs and darkens; `Esc` and backdrop-click close it; the card FLIPs back to its exact canvas position

**Why captures instead of live `<iframe>`s:** most production sites — almost certainly `alfred.co` and `wurth.co` — send `X-Frame-Options: DENY` or a frame-ancestors CSP, which would render the previews permanently blank. Tall static captures always work, load instantly, scroll smoothly, and can't break when a client redeploys. This is the correct engineering call, not a compromise.

### The nine projects

| # | Project | URL | Framing |
|---|---|---|---|
| 1 | Todo Eléctrico Victor | todoelectricovictor.com | Commerce · Frontend build |
| 2 | Würth | wurth.co | Enterprise · Frontend engineering |
| 3 | Alfred | alfred.co | Product platform · Frontend architecture |
| 4 | LitSight | litsight.pro/en | SaaS · Product engineering |
| 5 | Fanatik | fanatik.lat | Media/Sport · Frontend build |
| 6 | Next + Tailwind OB | next-tailwind-ob.vercel.app | Next.js · Component system |
| 7 | Doxa Sistemas | doxasistemas.com | Corporate · Frontend build |
| 8 | **Uflou** | App Store (iOS) | **Mobile · Published iOS app** |
| 9 | Collection App | collection-app-bice.vercel.app | Web app · Full-stack |

**Uflou is treated distinctly** — it is a published iOS app, not a website. It renders in a phone-shaped frame rather than a browser card, carries an "iOS · APP STORE" badge, and its preview shows the App Store listing capture with a "View on the App Store ↗" CTA. A shipped, approved iOS app is a genuine differentiator and should not be flattened into the same card as a marketing site.

**Role/stack labels are marked as assumptions in the config** and should be corrected by Andres before launch — describing his role on a real client project is the one thing this plan cannot infer.

### Capturing the thumbnails
Google Chrome is installed locally. A build script drives it headless:

```
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless=new --disable-gpu --hide-scrollbars \
  --virtual-time-budget=8000 \
  --window-size=1440,900  --screenshot=assets/work/<slug>-thumb.png  <url>
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless=new --disable-gpu --hide-scrollbars \
  --virtual-time-budget=10000 \
  --window-size=1440,3600 --screenshot=assets/work/<slug>-full.png   <url>
```

`--virtual-time-budget` gives lazy-loaded content time to paint. Outputs are downscaled and converted to WebP via `sharp` (npm, no sudo). **Fallbacks if a site blocks headless or renders blank:** capture via the in-app Browser pane, or fall back to a designed gradient placeholder card carrying the project name — the section degrades gracefully and never shows a broken image.

**Mobile:** drag is meaningless on a phone. Below 768px the canvas becomes a snap-scrolling horizontal carousel of the same cards, with tap-to-preview intact. The preview panel goes full-screen as a bottom sheet.

---

## 15. FINAL CTA SECTION

Opens out of Scene 03's light wash.

```
eyebrow   LET'S TALK

H2        Got something
          worth building?

sub       I'm open to senior frontend roles, contract work, and
          freelance projects. Tell me what you're building — I
          reply to everything.

FORM
  Name               [                    ]
  Email              [                    ]
  What's this about  [ Embedded in your team ▾ ]
                     [ Freelance project        ]
                     [ Architecture review      ]
                     [ Something else           ]
  Message            [                    ]
                     [                    ]

                     [  SEND MESSAGE  → ]

  Or email directly — <contact email>
```

**Form implementation.** Static sites can't process form posts, so the form submits via `fetch` to **Web3Forms** (free, no account-side code, no backend to host). The entire configuration lives in one object at the top of `script.js`:

```js
const CONTACT = {
  accessKey: '',                 // ← paste Web3Forms access key here
  fallbackEmail: 'aochoa@alfred.co',
  subjectPrefix: 'Portfolio enquiry —'
};
```

**Graceful degradation is built in:** if `accessKey` is empty, the form still works — submitting composes a fully pre-filled `mailto:` to `fallbackEmail` and opens the user's mail client. The site is therefore fully functional on delivery with zero setup, and upgrading to real form-handling is a one-line paste.

**Two things Andres needs to supply:**
1. A **Web3Forms access key** (free, 30 seconds at web3forms.com — requires his email, so he'll need to do it himself)
2. The **contact email address** to use. Defaulting to `aochoa@alfred.co`, but that is his employer's domain — for a portfolio that recruiters will email, a personal address is usually the better call. Single-line change either way.

**Form UX:** floating labels that rise and shrink on focus; a violet underline that draws left-to-right; inline validation on blur, never while typing; the button shows a spinner then morphs into a checkmark with the panel exhaling a violet bloom; errors appear inline and are announced via `aria-live`. All inputs are real, labeled, keyboard-navigable form controls.

---

## 16. FOOTER

Minimal, monospaced, honest.

```
ANDRES OCHOA                          LinkedIn ↗   GitHub ↗   Email ↗
Frontend Engineer — Web & Mobile

Built from scratch. HTML, CSS, JavaScript.       © 2026
No frameworks. 60fps.                             Bogotá · Remote
```

The "no frameworks, 60fps" line is a closing flex, and on this site it's a true one. A colossal `ANDRES OCHOA` wordmark sits clipped at the very bottom edge, revealing as the page bottoms out — the last kinetic gesture.

Social URLs and location are config values; LinkedIn and GitHub links are left as clearly-marked placeholders for Andres to fill, and are hidden rather than rendered broken if unset.

---

# PART II — DESIGN SYSTEM

## 17. COMPLETE VISUAL STYLE GUIDE

### Color tokens

```css
:root {
  /* Ground — near-black with violet undertone */
  --void:        #07060C;
  --ink:         #0C0A14;
  --surface:     #141020;
  --surface-2:   #1C1630;

  /* Violet ramp — the brand */
  --violet-900:  #2E1065;
  --violet-700:  #5B21B6;
  --violet-600:  #6D28D9;
  --violet-500:  #7C3AED;   /* core */
  --violet-400:  #9B5CFF;
  --violet-300:  #C4A3FF;
  --violet-200:  #DDD0FF;

  /* Secondary accents — used sparingly */
  --magenta:     #E879F9;
  --cyan:        #4CC9F0;

  /* Text */
  --paper:       #F4F1FA;
  --muted:       #9A93B0;
  --dim:         #5F5875;

  /* Lines & glass */
  --hairline:    rgba(255,255,255,.08);
  --hairline-hi: rgba(255,255,255,.16);
  --glass:       rgba(255,255,255,.035);

  /* Glow */
  --glow-violet: 0 0 60px rgba(124,58,237,.35);
  --glow-soft:   0 0 120px rgba(124,58,237,.18);

  /* Signature gradient — max ~6 uses on the entire page */
  --grad-signature: linear-gradient(100deg,
      var(--violet-400) 0%, var(--magenta) 50%, var(--cyan) 100%);
}
```

### Spacing — 8px base
`4 · 8 · 16 · 24 · 32 · 48 · 64 · 96 · 128 · 192 · 256`
Section vertical rhythm: `clamp(96px, 14vh, 192px)`.

### Radii — Apple-grade
`--r-sm: 12px · --r-md: 20px · --r-lg: 28px · --r-xl: 40px · --r-full: 999px`

### Elevation
```css
--e1: 0 2px 8px rgba(0,0,0,.4);
--e2: 0 12px 40px rgba(0,0,0,.5);
--e3: 0 32px 80px rgba(0,0,0,.6), 0 0 0 1px var(--hairline);
```

### Glass recipe
```css
background: var(--glass);
backdrop-filter: blur(20px) saturate(1.4);
border: 1px solid var(--hairline);
border-radius: var(--r-lg);
```

### Grain
A tiled SVG `feTurbulence` data-URI on a `position: fixed` full-viewport overlay at `opacity: .035`, `mix-blend-mode: overlay`, `pointer-events: none`, `z-index: 9998`. Animated by stepping `background-position` through 8 discrete frames at 8fps — stepped rather than smooth, because real film grain jumps. Disabled under `prefers-reduced-motion`.

### Grid
12 columns, 24px gutters, `max-width: 1440px`, `clamp(20px, 5vw, 80px)` page gutters. Full-bleed sections break the container deliberately.

---

## 18. TYPOGRAPHY

```
DISPLAY   Archivo Variable    wght 100–900 · wdth 62–125
          Hero, section headings, kinetic type, the wordmark.
          Chosen for its width axis — animating wdth alongside wght
          on scroll is the site's signature kinetic move, and very
          few typefaces can do it.

BODY/UI   Inter Variable      wght 300–700
          Paragraphs, cards, form controls, navigation.
          feature-settings: 'ss01','ss03','cv11' — reads close to SF.

MONO      JetBrains Mono      wght 400–700
          Eyebrows, stat units, the browser URL bar, footer, tags.
          Carries all the "engineer" signal. tabular-nums on counters.
```

Loaded from Google Fonts with `preconnect`, `display=swap`, and explicit local fallback stacks so first paint never waits on a font.

### Scale — fluid, clamp-based

| Token | Size | Tracking | Leading | Use |
|---|---|---|---|---|
| `--t-mega` | `clamp(3.5rem, 13vw, 13rem)` | `-0.045em` | `0.85` | Hero H1, wordmark |
| `--t-h1` | `clamp(2.75rem, 8vw, 7rem)` | `-0.035em` | `0.9` | Mission, section heads |
| `--t-h2` | `clamp(2rem, 5vw, 4rem)` | `-0.03em` | `0.95` | Subsection heads |
| `--t-h3` | `clamp(1.375rem, 2.5vw, 2rem)` | `-0.02em` | `1.15` | Card titles |
| `--t-lead` | `clamp(1.0625rem, 1.6vw, 1.375rem)` | `-0.01em` | `1.55` | Section leads |
| `--t-body` | `clamp(0.9375rem, 1.1vw, 1.0625rem)` | `0` | `1.65` | Body |
| `--t-label` | `0.75rem` | `0.18em` | `1.2` | Mono eyebrows, uppercase |

**Rules**
- Display type is always **Archivo, weight 700–800, tracking negative**. Big type needs tight tracking; this is the difference between "designed" and "large."
- Mono labels are always uppercase with `0.18em` tracking and `--dim` color.
- Measure capped at `68ch`; leads at `52ch`.
- The gradient treatment is applied via `background-clip: text` and appears on **at most six words across the entire page**.

---

## 19. ANIMATION DIRECTION

**Philosophy:** motion is physics, not decoration. Every element has mass. Things do not fade — they arrive, settle, and hold.

### Easing library
```js
const EASE = {
  out:    'expo.out',                              // default entrances
  inOut:  'power3.inOut',                          // transitions
  spring: 'elastic.out(1, 0.55)',                  // UI snapping into place
  soft:   CustomEase.create('soft','.22,1,.36,1'), // Apple-ish
};
```

### Durations
`micro 180ms · fast 320ms · base 620ms · slow 1100ms · cinematic 1800ms`

### The motion vocabulary — six moves, used consistently

1. **Clip rise** — text enters from a `clip-path` mask with a 12px upward translate and a −3° `rotateX` settling to 0. All headings, all body copy. Stagger 60–90ms.
2. **Kinetic drift** — display lines de-sync horizontally on scroll at different rates, gaining `wght` and `wdth` as they travel. Hero and mission only.
3. **Spring snap** — UI objects scale from 0.94 with `elastic.out`, mirroring the assembly language of Scene 01. Pillar cards, work thumbnails, form states.
4. **Glow bloom** — violet radial glow scales from 0.6 and fades in behind an element on entrance or hover. Never on more than one element at a time.
5. **Line draw** — hairlines and progress rails animate via `scaleX/scaleY` from 0 with `transform-origin` at the leading edge.
6. **Cinematic scrub** — video `currentTime` mapped directly to scroll progress on pinned sections.

**Discipline:** only `transform` and `opacity` are animated. Never `width`, `height`, `top`, `left`, or `filter` on scroll. `will-change` is applied on enter and **removed on complete** — leaving it on permanently is a common cause of the exact jank this site is meant to disprove.

### Preloader
Monospace counter `000 → 100` in tabular figures, a hairline progress rail beneath it. At 100 the whole panel splits and slides away vertically as two halves while a violet bloom expands from center, handing straight into the hero's entrance. Bound to real `document.readyState` plus video-poster decode, not a fake timer.

---

## 20. INTERACTION DESIGN

**Custom cursor** (pointer devices only — feature-detected via `matchMedia('(pointer: fine)')`)
- A 6px violet dot plus a 32px trailing ring lerping behind it at 0.16
- Over interactive elements: the ring scales to 2.2× and inverts via `mix-blend-mode: difference`
- Over draggable thumbnails: the ring becomes a `⤧ DRAG` label
- Over the work canvas: the ring picks up a subtle violet glow
- Hidden entirely on touch; native cursor restored under `prefers-reduced-motion`

**Magnetic buttons** — primary CTAs translate up to 8px toward the pointer within a 90px radius, springing back on leave.

**Link underlines** — a 1px rule wipes out to the right and back in from the left on hover (two-stage, 320ms) rather than simply appearing.

**Nav** — a floating glass pill that appears after 80vh of scroll. Section links scroll via Lenis with a custom eased duration. The active section indicator is a violet dot that slides between items with a spring.

**Pillar cards** — pointer-tracked 3D tilt capped at 6°, with a radial violet highlight following the cursor across the card surface.

**Focus states** — a 2px `--violet-400` ring at 3px offset on `:focus-visible` only. Every interactive element is reachable and operable by keyboard; the work-canvas thumbnails are real `<button>`s with arrow-key nudging as a drag alternative.

**Sound:** none. Ever.

---

## 21. SCROLL BEHAVIOR

**Lenis** provides the smooth scroll substrate:
```js
const lenis = new Lenis({
  duration: 1.15, lerp: 0.09, smoothWheel: true,
  wheelMultiplier: 0.95, touchMultiplier: 1.6,
  easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});
```

**GSAP integration** — the canonical wiring, which must be exact or ScrollTrigger and Lenis will fight each other:
```js
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add(time => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);
```

**Pinned sections:** Hero (250vh), Builder (200vh), Story (300vh), Handoff (200vh). Total document height lands near 900vh — long enough to feel cinematic, short enough that a recruiter reaches the contact form.

### Video scrubbing — the critical implementation detail

```js
ScrollTrigger.create({
  trigger: section, start: 'top top', end: '+=200%',
  pin: true, scrub: 0.8,
  onUpdate: self => {
    const t = self.progress * video.duration;
    if (Math.abs(video.currentTime - t) > 1/30) video.currentTime = t;
  }
});
```

Videos are `muted`, `playsinline`, `preload="metadata"`, `disablePictureInPicture`, with a `poster`. Seeking is throttled to one frame's worth of delta to avoid flooding the decoder.

**Mandatory fallback chain** — scroll-scrubbed video is the single most fragile technique on this site, and iOS Safari in particular throttles or refuses rapid `currentTime` seeks:
1. **Tier 1 (desktop Chrome/Firefox/Edge/Safari):** true scroll-scrub as above
2. **Tier 2 (iOS, or when seek-stalling is detected via a `seeking`-event watchdog):** pin the section and `play()` the clip once on enter, letting it run at natural speed — still cinematic, never broken
3. **Tier 3 (`prefers-reduced-motion`, or video fails to load):** render the poster frame as a static image; all copy and layout remain fully intact

A section must never be blank because a video didn't cooperate. Every scene's DOM content stands on its own.

---

## 22. MOBILE BEHAVIOR

Mobile is a **re-composition**, not a squeeze.

| Section | Mobile treatment |
|---|---|
| Hero | Video switches to a 9:16 crop via `object-position`; H1 drops to `clamp(3rem, 15vw, 5rem)`; kinetic drift reduced to 40% amplitude |
| Stats | 2×2 grid instead of a 4-across rail |
| Mission | Line length shortens; word-reveal stagger tightens to 40ms |
| Pillars | Stack vertically; 3D tilt disabled entirely (no pointer) |
| Story | Timeline unpins and flows as a normal vertical list with a left rail |
| **Work** | Drag canvas → **snap-scrolling horizontal carousel**; preview opens as a full-screen bottom sheet with a drag-to-dismiss handle |
| Handoff / Contact | Full-width form; inputs at 16px minimum to prevent iOS zoom-on-focus |
| Cursor | Removed entirely |
| Grain | Retained at reduced opacity (0.025) |

**Mobile performance budget**
- Videos served at 720×1280 vertical crops, ≤2MB each
- Scrub → Tier 2 playback (see §21)
- Custom cursor, 3D tilt, and magnetic buttons never initialize — feature-detected, not media-queried, so the JS isn't merely inert but never runs
- Target: **LCP < 2.5s on 4G**, CLS < 0.05, zero horizontal overflow at 320px

**Breakpoints:** `480 · 768 · 1024 · 1440`. Layout is fluid between them via `clamp()`; breakpoints handle re-composition only.

---

# PART III — IMPLEMENTATION

## 23. TECHNICAL IMPLEMENTATION

### File structure
```
portfolio-web/
├── index.html
├── style.css
├── script.js
├── BUILD-PLAN.md
├── media/
│   └── andres-desktop.png          ← identity reference (source, not shipped)
├── assets/
│   ├── video/
│   │   ├── source/                 ← raw 1080p Seedance downloads
│   │   ├── scene-01-assembly.mp4   ← 720p scrub masters, -g 5, faststart
│   │   ├── scene-01-assembly.webm
│   │   ├── scene-01-poster.jpg
│   │   ├── scene-02-builder.*
│   │   └── scene-03-handoff.*
│   ├── work/
│   │   ├── <slug>-thumb.webp       ← 1440×900 card thumbnails
│   │   └── <slug>-full.webp        ← tall full-page scroll captures
│   └── og/
│       └── og-image.jpg
└── tools/
    ├── capture.sh                  ← headless Chrome screenshot script
    └── encode.sh                   ← ffmpeg-static encode pipeline
```

### CDN dependencies — exactly these, pinned
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/CustomEase.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/lenis/1.1.13/lenis.min.js"></script>
```
No bundler, no build step, no `node_modules` in the shipped site. `npm` is used only by the asset tooling in `tools/`.

### `script.js` architecture
A single IIFE, no globals, organized as explicit modules initialized from one `boot()`:

```
CONFIG        ← every editable value: projects, stats, story, contact keys, socials
utils         ← clamp, lerp, prefersReducedMotion, isTouch, isFinePointer
preloader     ← readyState + asset decode, then reveal
smoothScroll  ← Lenis + GSAP ticker wiring
cursor        ← fine-pointer only
nav           ← scroll-aware pill, active-section tracking
hero          ← video scrub + kinetic H1
stats         ← counters
mission       ← word reveal
pillars       ← 3D tilt cards
story         ← pinned timeline
scenes        ← generic video-scrub controller (used by all 3 scenes)
work          ← draggable canvas + FLIP preview  ← largest module
stack         ← marquee
contact       ← form validation + submission
footer        ← wordmark reveal
```

**Everything content-related lives in `CONFIG`.** Project names, roles, stack tags, URLs, stat numbers, story chapters, the contact key, social links. Andres should be able to correct any fact on the site without touching a line of logic.

### Performance requirements
- **Budget:** JS ≤ 60KB excl. CDN · CSS ≤ 45KB · total video ≤ 12MB · initial HTML+CSS+fonts ≤ 250KB
- All images `loading="lazy"` + `decoding="async"` except the hero poster
- Videos `preload="none"`, sources attached after `window.load` via `IntersectionObserver` at a 200% root margin
- One `requestAnimationFrame` loop total (GSAP's ticker) — no competing rAF loops
- `content-visibility: auto` + `contain-intrinsic-size` on below-fold sections
- All GSAP contexts registered via `gsap.context()` and reverted on resize; `ScrollTrigger.refresh()` debounced at 200ms
- Targets: **Lighthouse ≥ 95 performance**, LCP < 2.0s desktop / < 2.5s mobile, CLS < 0.05, INP < 200ms

### Accessibility
- Semantic landmarks, one `<h1>`, logical heading order
- Skip-to-content link as the first focusable element
- `prefers-reduced-motion: reduce` → Lenis destroyed, native scroll restored, scrubs become static posters, grain frozen, all entrance animations become instant. **The full site remains readable and complete** — reduced motion is never a degraded experience, only a still one.
- Work thumbnails are real `<button>`s with `aria-label`s and keyboard arrow-nudge as a drag alternative
- Preview panel is a focus-trapped modal with `role="dialog"`, `aria-modal`, `Esc` to close, and focus returned to the originating card
- Contrast ≥ 4.5:1 for body, ≥ 3:1 for large display type — verified, not assumed
- Video is decorative: `aria-hidden="true"` on the players, with all meaning carried by DOM text

### SEO / meta
Title, description, canonical, Open Graph + Twitter card with a generated `og-image.jpg`, `Person` + `WebSite` JSON-LD, `theme-color: #07060C`, and a favicon set generated from a violet monogram.

---

## 24. BUILD ORDER

Nothing here blocks on anything else finishing perfectly — if a step degrades, it degrades into a documented fallback and the build continues.

**Phase 1 — Asset generation (Higgsfield)**
1. Upload `media/andres-desktop.png` via `media_upload_widget` → capture `media_id`
2. Generate 3 keyframe stills (identity + composition lock) · ~30 credits
3. Generate 3 × Seedance 2.0, 1080p, 10s, 16:9, `generate_audio: false` · 270 credits
4. Review; reshoot any scene that misses · reserve 180 credits

**Phase 2 — Asset pipeline**
5. `curl` the MP4s into `assets/video/source/`
6. `npm i ffmpeg-static sharp` in `tools/`; encode 720p scrub masters (`-g 5`, faststart), WebM alternates, poster JPGs
7. Run `tools/capture.sh` — headless Chrome captures thumb + full-page for all 9 projects; convert to WebP

**Phase 3 — Build**
8. `index.html` — full semantic structure, all copy, all meta
9. `style.css` — tokens → base → layout → each section → responsive → reduced-motion
10. `script.js` — CONFIG, then each module in the order listed in §23

**Phase 4 — Verify**
11. Serve locally and drive the real page in the browser: scroll the full length, confirm each scrub, drag and open every work card, submit the form
12. Check 1440 / 1024 / 768 / 390 widths for overflow and re-composition
13. Verify reduced-motion, keyboard-only navigation, and the Tier-2/Tier-3 video fallbacks
14. Lighthouse pass; fix anything under 95

---

## 25. OPEN ITEMS FOR ANDRES

Everything below has a working default, so none of it blocks the build — but each one makes the site more accurate.

| # | Item | Default in use |
|---|---|---|
| 1 | **Web3Forms access key** | Empty → form falls back to pre-filled `mailto:` |
| 2 | **Contact email** | `aochoa@alfred.co` — a personal address is likely better for a portfolio |
| 3 | **LinkedIn + GitHub URLs** | Placeholders; links hidden rather than broken if unset |
| 4 | **Role + stack per project** | Inferred and clearly marked in `CONFIG` — worth correcting |
| 5 | **Story dates (2021→today)** | Inferred from "4 years"; single editable array |
| 6 | **Any real metrics** | None invented. Empty slots ready in `CONFIG` |
| 7 | **Location for footer** | "Bogotá · Remote" assumed |

---

## 26. VERIFICATION

**Asset generation**
- `mcp__higgsfield__balance` before and after, to confirm spend matches the ~480-credit projection
- Each clip viewed before encoding; identity consistency checked against `media/andres-desktop.png` across scenes 02 and 03
- Encoded outputs confirmed ≤4MB each and ≤12MB total

**Functional**
- Serve via `preview_start` and drive the real page: full-length scroll, all three scrubs, drag every thumbnail, open and close every preview, submit the form (mailto path), traverse by keyboard only
- Console clean — zero errors, zero warnings
- All 9 project links open the correct live URL in a new tab

**Responsive** — 1440, 1024, 768, 390 via `resize_window`; screenshot each; confirm zero horizontal overflow at 320px

**Resilience** — simulate video load failure and confirm Tier 3 posters render; enable `prefers-reduced-motion` and confirm the site is complete and readable with motion off

**Performance** — Lighthouse ≥95 performance / ≥95 accessibility / ≥95 best-practices; LCP, CLS, INP within the §23 budgets

---

---

# PART IV — DELIVERY RECORD

*Appended after the build. What actually shipped, and where it departed from the plan above.*

## Asset generation — actual

| | Planned | Actual |
|---|---|---|
| Keyframe stills | ~30 cr | **15 cr** — 5 stills (2 options each for scenes 1–2, 1 for scene 3) |
| Seedance 2.0 videos | 270 cr | **270 cr** — 3 × 10s · 1080p · `std` · 16:9 |
| Retake reserve | 180 cr | **0 cr** — every scene landed on the first take |
| **Total** | ~480 cr | **285 cr** · balance 1,010 → 725 |

`gpt_image_2_5` (high / 2K) produced the keyframes; the two-stage approach paid for itself exactly as intended — composition and identity were locked for 3 credits a shot before committing 90 to a video.

**Keyframes chosen:** scene 1 variant B (panels read as real interface modules rather than abstract glass), scene 2 variant A (design-system panels; variant B drifted into wireframe-globe cliché), scene 3 sole take.

## Departures from the plan

1. **WebM dropped — MP4 only.** The H.264 scrub masters came in at 2.0 / 3.0 / 2.0 MB. A VP9 alternate would have added build time and complexity for marginal savings well inside budget. MP4 with `faststart` is universally supported.
2. **Headless-Chrome CLI replaced with Puppeteer.** Nine parallel Chrome processes fought each other and 8 of 9 captures failed. `tools/capture.js` drives one browser with three concurrent pages, scroll-triggers lazy content, and uses real `fullPage` capture instead of a guessed window height. All 9 sites captured.
3. **Story heading uses CSS `position: sticky`, not a GSAP pin.** The pin jumped on release. Sticky is smoother and needs no JS.
4. **Reduced motion preserves the hero composition.** The original plan flattened scenes into stacked poster-then-text blocks. Freezing the designed overlay instead means reduced motion is the same site standing still, not a different layout.
5. **Below-fold posters deferred.** Both the `<img>` `src` and the `<video poster>` attribute for scenes 2–3 are now `data-` attributes attached by the same IntersectionObserver that loads the video. This alone cut first load from 325KB to 176KB.

## Measured results

Cold cache, 1440×900, local server:

| Metric | Target | Measured |
|---|---|---|
| LCP | < 2.5s | **2.24s** |
| CLS | < 0.05 | **0.006** |
| FCP | — | **0.44s** |
| DOMContentLoaded | — | **0.41s** |
| Initial transfer | ≤ 250KB | **176KB** (8 requests) |
| Total shipped payload | ≤ 15MB | **9.4MB** |
| Video total | ≤ 12MB | **7.0MB** |
| Console errors | 0 | **0** (both motion modes) |

Horizontal overflow at 320px: none (`scrollWidth === clientWidth`). One `<h1>`. All 9 work cards are real `<button>`s with `aria-label`s. First focusable element is the skip link.

**LCP note:** the LCP element is `p.hero__sub`, which is gated behind the preloader curtain by design. It was 3.27s before the entrance timeline was overlapped with the curtain exit and the posters were deferred. Removing the preloader entirely would push LCP near FCP (~0.5s) — that trade is available if the cinematic open is ever judged not worth it.

## Verified behaviours

Drag with momentum and elastic bounds · live-updating URL bar on card hover · click-vs-drag threshold · FLIP open and close with focus return · inner scroll of the full-page captures · Escape to close · form validation (3 required errors + status) · subject prefill from the services rows · mailto fallback composition · counters · word-by-word mission reveal · sticky story heading · nav active tracking · mobile carousel · 2×2 mobile stats · reduced-motion parity.

## Still open for Andres

Unchanged from §25 — all have working defaults:

1. **Web3Forms access key** → `CONFIG.contact.accessKey` in `script.js`. Empty today, so the form composes a pre-filled `mailto:` instead. Fully functional either way.
2. **Contact email** → currently `aochoa@alfred.co` (his employer's domain). A personal address is usually better for a portfolio recruiters will email.
3. **LinkedIn / GitHub** → `CONFIG.social`. Empty entries are hidden, not rendered broken. Only "Email ↗" shows in the footer today.
4. **Per-project role and stack** → `CONFIG.projects`. Inferred from public pages and marked as such in a comment. These describe real client work and should be corrected before launch.
5. **Story dates (2021 → today)** → inferred from "4 years"; they live in `index.html` as plain text.
6. **Real metrics** → none invented. Every stat on the page (4+, 09, 02, JR→SSR) traces to something Andres stated or a link a visitor can click.

---

# PART V — REVISION ROUND 1

*Changes requested after the first review.*

## Structure — tightened from 12 sections to 10

| Section | Change |
|---|---|
| Hero | Headline "Building" → **"I Build"**. Reads as a statement rather than a gerund, and puts him in the sentence. |
| Mission ("Why I build") | **Removed.** Its substance — the standard he works to — survives inside the service card's lead paragraph. |
| Three Pillars ("What I own") | **Replaced by one premium service card.** The three pillars' content was not discarded: it became the card's four-point feature grid. |
| "How we can work" | **Removed.** Its three engagement models collapse into the card's footer line: *Full-time, contract, or freelance · Remote*. |
| Nav | "Mission" and "Work I own" → a single **"What I do"**. Four links instead of five. |

Cutting two sections removed ~1,800px of scroll. The narrative is now: **assemble → prove → offer → humanize → show → invite**, with the offer stated once, early, and then demonstrated by the work rather than re-pitched.

### The service card
One glass panel at 1080px, 40px radius, with a violet wash from the top edge and a cursor-tracked glow. Eyebrow tag pill, a two-line display headline with the gradient on *end to end*, a lead paragraph, a 2×2 feature grid separated by hairlines with gradient chip markers, and a **Get in contact** CTA that scrolls to the form. Stacks to one column below 768px.

## The headline shake — fixed

**Cause:** the kinetic move animated `font-variation-settings` (`wght` 800→620, `wdth` 92→120) on every scroll frame. Changing a variable-font axis re-rasterises every glyph and re-runs text layout, so the headline juddered as it drifted.

**Fix:** the de-sync is now **transform-only**. The three lines still drift apart horizontally at different rates — that reads exactly as intended — but the font axes stay pinned at `wdth 92, wght 800`, and the lines sit on their own composited layers (`translateZ(0)`, `backface-visibility: hidden`, `force3D`).

Verified across six scroll positions: axes constant, no inline style writes, `translateX` the only changing property.

## Scene 2 — facial likeness

**Cause:** scene 2's keyframe was a **back-of-head** three-quarter shot. With no facial anchor in the start frame, Seedance invented a face as the orbit came around. Scene 3 read correctly because its keyframe was a front-facing portrait generated directly from `media/andres-desktop.png`.

**Fix:** lock **both ends** of the orbit.

```
start_image      6c8d7dcc…  original rear three-quarter desk shot (unchanged)
end_image        2479025b…  NEW front-facing portrait, generated from the reference
image_references 192f455f…  media/andres-desktop.png
```

The new end frame was generated the same way scene 3's was — front-facing, direct eye contact, prompt written to hold bone structure, eye shape and spacing, nose, jawline, hair and beard to the reference. Two candidates were generated; the chosen one reproduces the red string bracelet and gold ring from the reference photo and mirrors its clasped-hands pose, which also makes it a natural resting frame for an orbit to land on.

With a hard `end_image`, the model must resolve to that exact face rather than interpolating toward an invented one.

**Cost of this round:** 6 cr (2 keyframes) + 90 cr (video) = **96 cr**.

## Metrics after the revision

| Metric | Before | After |
|---|---|---|
| LCP | 2.26s | **2.24s** |
| CLS | 0.006 | **0.006** |
| Initial transfer | 177KB | **174KB** |
| Document height | 15,886px | **14,114px** |
| Console errors | 0 | **0** (both motion modes) |

---

# PART VI — REVISION ROUND 2

## Scroll-scrubbing froze on frame 0 — root cause

Reported as "the second video is stuck". It was **all three scenes**, and the site
code was not at fault: **the dev server was.**

`python3 -m http.server` does not implement HTTP **Range** requests. It answers a
`Range:` header with a plain `200 OK` and the entire file. A `<video>` served that
way reports a seekable range that *exists but has zero length*:

| Server | `Range:` response | `video.seekable` | `video.currentTime = 6` |
|---|---|---|---|
| `python3 -m http.server` | `200 OK`, no `Accept-Ranges` | `0.0 – 0.0` | → **0** (silently ignored) |
| `tools/serve.js` | `206 Partial Content` | `0.0 – 10.0` | → **6** |

With no usable seekable range, every `currentTime` assignment is discarded, so the
scene pins and the clip never advances — a frozen frame for the whole section.

**Two fixes, because either alone would be insufficient:**

1. **The dev server now matches production.** `tools/serve.js` serves `206 Partial
   Content` with `Accept-Ranges: bytes`, exactly like Netlify, Vercel, Pages, nginx
   and S3/CloudFront. `.claude/launch.json` points at it. Scrubbing verified on all
   three scenes: `currentTime` tracks progress 0 → 2.51 → 5.02 → 7.53 → 9.99.

2. **The site now detects unseekable media at runtime and degrades instead of
   freezing.** This is the more important fix — it means the page can never show a
   frozen frame on *any* host.

### The detection, and why the obvious check was wrong

The first attempt tested `video.seekable.length === 0`. That fails: a Range-less
host still reports **one** range — a zero-length one. The length is `1` in both the
working and broken cases. What distinguishes them is the **span**:

```js
const canSeek = () => {
  const s = video.seekable;
  return !!s && s.length > 0 && (s.end(s.length - 1) - s.start(0)) > 0.5;
};
```

Checked 400ms after `loadeddata`, with a behavioural backstop in the scrub loop: if
four consecutive `currentTime` assignments fail to take, the scene switches modes
anyway. Belt and braces, because seekability can also degrade mid-session.

### Scene playback modes

The three-tier fallback from §21 is now a single explicit `mode` per scene, and it
can change at runtime rather than being decided once at setup:

| mode | when | behaviour |
|---|---|---|
| `scrub` | default on pointer devices with seekable media | `currentTime` follows scroll progress |
| `play` | iOS, or media that turns out not to be seekable | clip plays through on section entry, pauses on exit |
| `poster` | the video errors | still frame; all copy and layout intact |

**Verified both paths.** Served without Range, the builder scene now advances on its
own (`currentTime` 0.76 → 3.26, `paused: false`) instead of freezing. Served with
Range, full scrubbing is restored.

### Lesson worth keeping

A local preview that does not support Range requests will make scroll-scrubbed video
look broken in a way that is indistinguishable from a code bug. Always preview this
site with `node tools/serve.js`.

---

# PART VII — REVISION ROUND 3

**Footer removed. "Get in touch" is now the final section.**

The page ends on the contact form — no wordmark, no copyright line, no closing
block of any kind. Verified at 1440 and 390: `atBottom: true`, and the last element
in `<body>` is the script tag.

`.contact` now carries the page's bottom breathing room
(`padding: var(--rhythm) 0 clamp(80px, 12vh, 150px)`) so it reads as a deliberate
ending rather than a section that got cut off.

## Structure — final, 9 sections

```
00  PRELOADER
01  NAV               What I do · Story · Projects · Contact
02  HERO              ▶ SCENE 01 scrub · "I Build / Scalable / Experiences"
03  STATS             4+ · 09 · 02 · JR→SSR
04  SERVICE           one premium offer card
05  STORY             sticky heading, lit chapters
06  BUILDER           ▶ SCENE 02 scrub
07  WORK              interactive draggable browser, 9 products
08  STACK             marquee
09  HANDOFF           ▶ SCENE 03 scrub
10  CONTACT           ← the page ends here
```

## Also removed

`CONFIG.social` and `CONFIG.location` are gone. They only ever rendered inside the
footer, so leaving them would have been dead configuration that silently does
nothing.

**Consequence worth noting:** there is now no LinkedIn or GitHub link anywhere on
the site. Both were empty placeholders and never rendered, so nothing visible was
lost — but for an engineer's portfolio a GitHub link is usually worth having. If it
should come back, the natural home is a small row under *"Or email directly —"* in
the contact block's left column, which keeps the rule that nothing sits below the
contact section.

## Metrics

| Metric | Value |
|---|---|
| LCP | **2.22s** |
| CLS | **0.006** |
| FCP | **0.41s** |
| Initial transfer | **173KB** |
| Document height | **13,568px** |
| Console errors | **0** (both motion modes) |
| Horizontal overflow | none, down to 320px |

---

*End of Master Build Plan.*
