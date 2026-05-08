# Interactive Assets Plan

Asset generation plan for layering interactive video and imagery into the site to push it from "polished editorial" to "polished editorial + actually awe-inspiring." Reference document for the next working session.

Generated 2026-05-08 during the impeccable polish + animate work. Captures concrete prompts, treatment rules, and integration patterns so future sessions can execute without re-deriving the brief.

---

## Framing

The hero is functionally clean post-polish but visually thin: nothing on screen actually depicts the science. Real awe comes from showing what this lab does, treated heavily enough to stay inside the Manuscript Cream / Furnace Black / Patinated Brass palette.

### Avoid the obvious

PRODUCT.md anti-references explicitly call out **stock microscope photography** and **glass-and-steel building photos** as corporate-biotech tells. Do NOT generate generic-lab footage:

- Erlenmeyer flasks, beakers, pipettes
- Scientists in lab coats, gloved hands, safety goggles
- Microscopes panning, slides loading, centrifuges spinning
- Building exteriors, hallway shots, rooftop signage
- Anything that could appear on a Moderna or Genentech homepage

It will read as press kit, not lab. The DESIGN.md "Don'ts" enforce this; the brand register reflex-rejects it as the corporate-clinical aesthetic family.

### Lean into the actual physics

The science *itself* is genuinely awe-inspiring and specific to this group:

- Molten salt at 700°C glowing amber
- CO₂ bubbles rising through electrolyte in slow motion
- Crystals nucleating on a dark substrate
- Electrochemical interfaces, ionic transport, defect sites
- Hybrid biotic-abiotic boundaries

These are real, photographable phenomena. They also process beautifully through the standard treatment recipe below into the brass-on-furnace palette without breaking the two-surface rule.

---

## Treatment recipe (apply to every asset)

Standard transform that brings any AI-generated video or image into the palette. Same recipe DESIGN.md already specifies for the Google Maps embed on the contact page.

```css
/* On the asset element itself */
filter: grayscale(0.7) brightness(0.55) contrast(1.15);
opacity: 0.25; /* or 0.35–0.6 depending on intent */

/* Plus a brass-tint overlay div on top */
position: absolute;
inset: 0;
background: rgba(138, 106, 42, 0.06); /* Patinated Brass, 6% */
pointer-events: none;
```

Adjust `grayscale` (0.6–1.0), `brightness` (0.4–0.7), and the brass overlay alpha (0.04–0.12) per asset to match. The overlay is what kills any residual blue/green that survives the desaturation.

`prefers-reduced-motion`: swap any `<video>` for its first-frame poster `<img>`, kill autoplay. Use the `useReducedMotion()` hook already wired in `Hero.tsx`.

---

## Top 5 assets to generate

Ordered by impact-per-effort. #1 and #3 are the highest-ROI; #4 is the most ambitious.

### 1. Hero background atmosphere — molten salt cell *(highest impact)*

**Veo prompt:**

> Slow macro shot looking down into a black ceramic crucible filled with glowing orange-amber molten salt at 700°C. Tiny bubbles rise through the molten surface in slow motion, refracting warm light. Camera holds still; only the molten surface and bubbles move. Cinematic, deep contrast, dark surroundings, no people, no text, no equipment labels. Hyperreal, 5 seconds, looping.

**Specs:** 16:9 or 21:9, 5–6s, web-encoded mp4 + webm, target ≤2MB. Render at 1920×1080 then encode down. Generate 3–4 variants, pick the cleanest loop seam.

**Files:** `public/hero/molten-salt.webm` + `public/hero/molten-salt.mp4` + `public/hero/molten-salt.jpg` (first-frame poster).

**Integration sketch (drops into `components/Hero.tsx`, deepest atmospheric layer, behind the gradient/noise/grid):**

```tsx
const videoX = useTransform(sMouseX, [-1, 1], [-30, 30]);
const videoY = useTransform(sMouseY, [-1, 1], [-20, 20]);

<motion.video
  style={{ x: videoX, y: videoY }}
  autoPlay loop muted playsInline
  poster="/hero/molten-salt.jpg"
  className="absolute -inset-12 w-[calc(100%+6rem)] h-[calc(100%+6rem)]
             object-cover opacity-25
             [filter:grayscale(0.7)_brightness(0.55)_contrast(1.15)]"
>
  <source src="/hero/molten-salt.webm" type="video/webm" />
  <source src="/hero/molten-salt.mp4" type="video/mp4" />
</motion.video>
<div className="absolute inset-0 bg-[rgba(138,106,42,0.06)] pointer-events-none" />
```

Layer order: insert as the **first child** of the existing `<motion.div variants={atmosphereVariants} className="absolute inset-0 overflow-hidden">` block so the gradient/noise/grid render on top.

**Reduced-motion fallback:** when `useReducedMotion()` returns true, render `<img src="/hero/molten-salt.jpg">` instead of the `<video>`. No autoplay.

### 2. Hero molecule replacement — crystallizing perovskite unit cell

The current SVG molecule (bottom-right) feels static even with the slow rotation. Replace with real footage:

**Veo prompt:**

> Macro shot of a small dark crystal slowly rotating in a void, facets catching warm amber light from one side, slow motion, perfectly centered, black background, no text, no environment. The crystal has cubic symmetry like a perovskite unit cell. 6 seconds, loops cleanly back to start.

**Specs:** 1:1 square, 6s, solid black background (transparent if Veo supports it; otherwise key out the black via `mix-blend-mode: lighten` in CSS), 800×800.

**Files:** `public/hero/crystal.webm` + `public/hero/crystal.mp4`.

**Integration:** swap the `<svg>` block in the bottom-right molecule slot for `<motion.video>`. Keep the existing `moleculeReveal` variant (fade + rotate + scale entrance) and the mouse-parallax `moleculeX/Y/rotate` transforms. Use `mix-blend-mode: screen` or `lighten` to drop the black background out so it composes against `--hero-bg`.

### 3. Per-research-direction loops *(transforms the /research page)*

Each `ResearchVisual` cell on `/research` has a `min-h-[560px]` dark visual panel currently filled by a custom SVG illustration. Layer a 4-second video INSIDE that panel, behind the existing SVG. Each direction gets its own asset.

**3a. CO₂ / Molten Salt:**

> Macro slow-motion of a single bubble rising through glowing amber molten salt, breaking the surface, dark surroundings, warm rim light, no equipment visible, 4 seconds.

**3b. Microenvironment Engineering:**

> Macro slow-motion of warm amber liquid flowing through a dark microscopic channel, thin streamlines visible, particles dispersing, abstract microfluidic feel, dark background, 4 seconds.

**3c. Hybrid Biotic–Abiotic:**

> Slow-motion macro of a glowing brass-colored DNA double helix dissolving into a circuit-board-like grid pattern, dark background, warm amber palette, no text, abstract, 4 seconds.

**3d. Perovskite-Inspired Materials:**

> Time-lapse macro of small dark crystals nucleating and growing on a black surface, warm amber light from one side, slow-motion feel, no environment, no labels, 4 seconds.

**Specs:** 16:9 or 4:3, 4s each, ≤1.5MB each. Files: `public/research/co2.webm`, `microenv.webm`, `bio.webm`, `pero.webm` (plus mp4 fallbacks and jpg posters).

**Integration:** add a `<motion.video>` inside the existing `<div className="bg-[var(--hero-bg)] flex items-center justify-center relative overflow-hidden min-h-[560px]">` panel in `components/ResearchContent.tsx`. Layer order: video at z-0 with grayscale + brass-tint treatment, existing noise SVG + radial gold glow on top, ResearchVisual SVG illustration on top of that, tag strip at bottom.

**Hover-to-ignite behavior:** instead of autoplay (4 simultaneous videos = perf cost), each video stays paused at frame 0 until the panel enters viewport AND the user hovers. Use `IntersectionObserver` for viewport entry; play on `onMouseEnter`, pause on `onMouseLeave`. Reduced-motion: poster image only, never plays.

### 4. Lab Atlas intro sequence *(ambitious, optional)*

A "front door" cinematic — plays once on initial page visit, then crossfades to the static hero atmosphere.

**Veo prompt:**

> A slow camera move across a dark surface where amber-colored brass particles slowly assemble into the typographic letters "A.B. WONG GROUP" from scattered powder, then the letters dissolve back into particles as the camera pulls away, 6 seconds, looping back, dark void background, warm metallic palette only, no other elements.

**Specs:** 21:9 cinematic, 6–8s. May need 2–3 generations to get the typographic assembly working; Veo is sometimes shaky on text.

**Files:** `public/hero/intro.webm` + `public/hero/intro.mp4`.

**Integration:** wrap the existing `Hero` component in a `<HeroIntro>` shell that plays the intro on first visit (use `sessionStorage` to guess "first visit"), fades to the standard hero, then proceeds with the existing entrance choreography. Skipped entirely on `prefers-reduced-motion`.

This is the biggest production. Only worth it if "front door video experience" is a goal. Skip on first pass; revisit if the hero loop alone doesn't deliver enough wow.

### 5. Static stills for People / Publications / Contact page banners

Lower-priority background imagery for non-hero pages. Imagen, not Veo.

**Imagen prompt:**

> Cinematic dark macro photograph of an electrochemistry experiment in progress: warm amber light from a glowing molten salt cell illuminating dark laboratory glassware, deep shadows, no people, no text, no equipment labels, painterly, very low color saturation except for the warm amber. 21:9 aspect ratio.

Generate 5–10 variants, pick 2–3 distinct moods. Apply the same treatment recipe and layer behind page titles.

**Files:** `public/banners/people.jpg`, `publications.jpg`, `contact.jpg`.

**Integration:** add a thin atmospheric strip (height ~240px) at the top of each detail page, behind the page title. Optional, lower-impact than hero / research videos.

---

## How to actually make it *interactive*

Google Flow generates assets; the interactivity is wired in code. Patterns that pay off:

### Pattern A — Mouse-driven mask reveal *(strongest single move for the hero)*

Default: the dark static atmosphere of the hero shows as it currently does. On mouse hover, a circular mask reveals the molten-salt video underneath, following the cursor. Like peering through a viewing port into the actual experiment.

```tsx
// pseudo-code; sit between the static atmosphere and the molten-salt video
const maskX = useSpring(useTransform(sMouseX, [-1, 1], ["0%", "100%"]));
const maskY = useSpring(useTransform(sMouseY, [-1, 1], ["0%", "100%"]));
const maskImage = useMotionTemplate`
  radial-gradient(circle 240px at ${maskX} ${maskY},
    black 0%, black 50%, transparent 100%)
`;

<motion.div
  style={{ maskImage, WebkitMaskImage: maskImage }}
  className="absolute inset-0"
>
  {/* molten-salt video at 60% opacity here */}
</motion.div>
```

Cheap, premium-feeling, completely on-brand. Requires `mask-image` (broad browser support).

### Pattern B — Scroll-driven crossfade

As the user scrolls down the hero, the molten-salt video slowly crossfades from 0.25 → 0.6 opacity, then fades back as they approach the next section. The hero "wakes up" as you engage with it.

```tsx
const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
const videoOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.25, 0.55, 0.15]);

<motion.video style={{ opacity: videoOpacity }} ... />
```

### Pattern C — Hover-to-ignite

Research direction tiles play their video only while hovered. Default state is the poster. Lightweight (no 4 simultaneous video decodes), feels alive on engagement.

### Pattern D — Variable playback rate on cursor speed

`<motion.video>` exposes `playbackRate`. Track cursor velocity (delta-x/dt + delta-y/dt) and feed it into a clamped `0.5x → 2x` range. The molecule rotation and crystal video play faster when the user is moving the mouse fast, slower when still. Subtle, but reads as "this surface is responding to you" without being gimmicky.

---

## Suggested execution order

1. **Asset 1 (hero molten salt)** + **Pattern A or B** wired in. Single biggest payoff. ~2 hours work after assets land.
2. **Assets 3a–3d (research direction loops)** + **Pattern C**. Transforms `/research` from "tile grid with diagrams" to "lab walkthrough." ~2 hours.
3. **Asset 2 (crystal molecule)** as a smaller polish. Drops into existing molecule slot. ~30 minutes.
4. **Asset 5 (page banners)** if the hero work creates a contrast that makes the detail pages feel under-dressed.
5. **Asset 4 (intro sequence)** only after everything else is in place and we've judged that the hero loop alone doesn't deliver enough first-impression weight.

## File destinations

```
abwong-site/public/
├── hero/
│   ├── molten-salt.webm    (Asset 1)
│   ├── molten-salt.mp4     (Asset 1, fallback)
│   ├── molten-salt.jpg     (Asset 1, poster + reduced-motion fallback)
│   ├── crystal.webm        (Asset 2)
│   ├── crystal.mp4         (Asset 2, fallback)
│   └── intro.webm/mp4      (Asset 4, optional)
├── research/
│   ├── co2.webm/mp4/jpg    (Asset 3a)
│   ├── microenv.*          (Asset 3b)
│   ├── bio.*               (Asset 3c)
│   └── pero.*              (Asset 3d)
└── banners/
    ├── people.jpg          (Asset 5)
    ├── publications.jpg    (Asset 5)
    └── contact.jpg         (Asset 5)
```

## Format notes

- **webm (VP9)** is the primary; **mp4 (H.264)** is the Safari fallback. Encode both; ship both via `<source>` tags.
- Target ≤2MB per hero video, ≤1.5MB per research loop. Use `ffmpeg -vf scale=1280:-2 -c:v libvpx-vp9 -b:v 800k` as a rough starting point.
- Posters: 80% quality JPG, same dimensions, ≤200KB. These are what `prefers-reduced-motion` users see, so they need to look good.
- All videos should LOOP CLEANLY. The first and last frame should match within ~10% perceptual difference. Rebake or generate again if there's a visible jump.

## Next session checklist

When the assets are generated:

1. Drop them into the file destinations above.
2. Tell me "assets are in `public/hero/` and `public/research/`" and which patterns (A/B/C/D) you want first.
3. I'll wire them with framer-motion parallax + the chosen interaction pattern, plus the `useReducedMotion` fallback for every asset.
4. Verify lint + tsc + browser spot-check before commit.
5. Commit per asset group (hero molten-salt, research direction loops, crystal molecule, etc.) so the diff is reviewable.
