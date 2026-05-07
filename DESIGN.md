---
name: A.B. Wong Group
description: Editorial cream-and-brass cartography for an electrochemistry lab at NUS.
colors:
  manuscript-cream: "#f5f4f0"
  page-cream: "#eeecea"
  surface-stone: "#e6e3de"
  bitumen-ink: "#141210"
  ink-dim: "#1412108c"
  ink-faint: "#14121038"
  hairline: "#1412101a"
  hairline-bright: "#14121038"
  patinated-brass: "#8a6a2a"
  patinated-brass-dim: "#8a6a2a59"
  patinated-brass-faint: "#8a6a2a1a"
  furnace-black: "#141210"
  furnace-surface: "#1e1b17"
  lit-brass: "#c8aa64"
  paper-white: "#ffffff"
typography:
  display:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "clamp(64px, 9vw, 140px)"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "clamp(36px, 4.5vw, 64px)"
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "26px"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "0.01em"
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 300
    lineHeight: 1.85
    letterSpacing: "normal"
  label:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "10px"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.2em"
spacing:
  hairline: "1px"
  xs: "8px"
  sm: "16px"
  md: "32px"
  lg: "60px"
  xl: "80px"
  xxl: "120px"
rounded:
  none: "0px"
components:
  button-primary:
    backgroundColor: "{colors.patinated-brass}"
    textColor: "{colors.manuscript-cream}"
    rounded: "{rounded.none}"
    padding: "18px 48px"
    typography: "{typography.label}"
  button-primary-hover:
    backgroundColor: "{colors.bitumen-ink}"
    textColor: "{colors.manuscript-cream}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.bitumen-ink}"
    rounded: "{rounded.none}"
    padding: "18px 48px"
    typography: "{typography.label}"
  button-ghost-hover:
    textColor: "{colors.bitumen-ink}"
  button-hero-primary:
    backgroundColor: "{colors.paper-white}"
    textColor: "{colors.bitumen-ink}"
    rounded: "{rounded.none}"
    padding: "14px 36px"
  button-hero-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.paper-white}"
    rounded: "{rounded.none}"
    padding: "14px 36px"
  member-card:
    backgroundColor: "{colors.manuscript-cream}"
    textColor: "{colors.bitumen-ink}"
    rounded: "{rounded.none}"
    padding: "32px"
  member-card-hover:
    backgroundColor: "{colors.surface-stone}"
  list-row:
    backgroundColor: "transparent"
    textColor: "{colors.bitumen-ink}"
    rounded: "{rounded.none}"
    padding: "28px 0"
  list-row-hover:
    backgroundColor: "{colors.page-cream}"
  nav:
    backgroundColor: "transparent"
    textColor: "{colors.paper-white}"
    height: "60px"
    padding: "0 48px"
  nav-scrolled:
    backgroundColor: "{colors.manuscript-cream}"
    textColor: "{colors.bitumen-ink}"
---

# Design System: A.B. Wong Group

## 1. Overview

**Creative North Star: "The Lab Atlas"**

The site reads as a navigational document of the lab's territory. Research directions are regions; people are expeditions; publications are the record. The visual language is editorial-cartographic: small uppercase labels function as map keys, the brass accent functions as a coordinate marker, and the dark furnace surfaces act as the deep field where the actual work happens. Cream pages carry the published proceedings.

The system commits to surfaces, not decoration. A page is either cream (for record) or furnace-dark (for field), and the contrast between them is the site's primary structural move. There is no third surface family. There are no shadows, no rounded corners, no glass, no gradients in text, no decorative chrome between content and reader. Hairline rules and tonal alternation do all the work.

This system explicitly rejects the corporate-clinical lab aesthetic (white-and-teal press-kit) and the SaaS-startup landing template (gradient hero, bento grid, "Trusted by" wall). Where there's a choice between safe and committed, the system chooses committed; where there's a choice between decoration and specificity, it chooses specificity. The page should feel like a serious cartographer made it, not a marketing team.

**Key Characteristics:**
- Two-surface system: Manuscript Cream pages and Furnace Black fields, in deliberate alternation.
- Type-led hierarchy: Playfair Display for record, Inter for instrument; the italic-in-brass treatment is the signature emphasis.
- Hairline-only structure: 1px rules carry every division, no shadows or gradients.
- Brass as coordinate: the gold accent marks position, never decorates surface.
- Sharp corners everywhere; the system has no radius vocabulary.

## 2. Colors: The Brass-on-Manuscript Palette

A two-temperature palette. Warm cream and ink for the record, slightly cooler ash-brass on dark for the field. Brass appears in two registers, calibrated for the surface it sits on.

### Primary

- **Patinated Brass** (`#8a6a2a` / `oklch(48% 0.07 76)`): The lab's coordinate marker. Used for accent dashes preceding labels, italic emphasis words inside Playfair headlines, gold underlines under links, hover transitions on borders, and the section-header dash. Always functional; never decorative fill.
- **Lit Brass** (`#c8aa64` / `oklch(74% 0.09 78)`): The dark-surface counterpart. Same hue, lifted lightness so it survives against `furnace-black`. Used inside the hero, the dark research tiles, and the dark people-page bio panel. Never appears on cream surfaces.

### Neutral

- **Manuscript Cream** (`#f5f4f0`): Body background across `/`, `/research`, `/news`, `/publications`, `/people`, `/open-positions`. The default surface.
- **Page Cream** (`#eeecea`): One step warmer-grey, used for hover states on list rows and for the home Contact CTA section.
- **Surface Stone** (`#e6e3de`): The footer, the alumni section, the home news strip. Differentiates "supporting matter" surfaces from main record.
- **Bitumen Ink** (`#141210`): Primary text on cream, and also doubles as `furnace-black` on dark sections.
- **Furnace Surface** (`#1e1b17`): One step lighter than furnace-black, used inside dark research tiles for tonal layering without shadow.
- **Ink Dim** (`#1412108c`, 55% alpha): Body copy on cream where the headline ink would be too heavy.
- **Ink Faint** (`#14121038`, 22% alpha): Tertiary metadata, secondary borders, dividers.
- **Hairline** (`#1412101a`, 10% alpha): The single line that does most of the structural work.

### Named Rules

**The Two-Surface Rule.** Every page is either Manuscript Cream or Furnace Black at any vertical position. There is no third surface family. Tonal layering happens within a family (cream → page-cream → surface-stone, or furnace-black → furnace-surface), never across them.

**The Brass-Marks-Position Rule.** Brass is a marker, not a fill. It appears as a hairline dash before a label, as the italic word inside a Playfair headline, as a 0.5–2px line indicating focus, and as the fill of a single primary CTA per surface. Brass never tints a body of text or fills a card background.

**The 10% Rule, Inverted.** On dark surfaces (Furnace Hall family), Lit Brass is allowed to push to ~15% of the surface (it has to fight more contrast). On cream, brass stays under 8%.

## 3. Typography

**Display Font:** Playfair Display (with Georgia fallback). Weights 400, 500, 700, 900 in regular and italic.
**Body Font:** Inter (with system-ui fallback). Weights 300, 400, 500, 600 (no italic).

**Character:** Playfair carries the editorial voice; Inter carries the instrument voice. The pairing reads as "scientific publication" rather than "tech blog." The signature move is an italic word inside a Playfair headline rendered in Patinated Brass — used for emphasis on names ("A.B. *Wong*"), call-to-action verbs ("Get In *Touch*"), and section accents ("Latest *News*").

### Hierarchy

- **Display** (Playfair 700, `clamp(64px, 9vw, 140px)`, lh 0.95, ls -0.02em): Hero h1 only. One per page. Used on `/` and `/contact` over Furnace Black; reserved for surface-defining moments.
- **Page Headline** (Playfair 700, `clamp(52px, 7vw, 110px)`, lh 0.95, ls -0.02em): Top-of-page h1 on detail pages. Slightly smaller than hero display so the hero stays singular.
- **Headline** (Playfair 500, `clamp(36px, 4.5vw, 64px)`, lh 1.05, ls -0.01em): Section h2s rendered through `SectionHeader`. The `accent` word renders italic-in-brass on a new line.
- **Title** (Playfair 400, `26–28px`, lh 1.2, ls 0.01em): News titles, position titles, research-tile headings, member names. Slightly tracked for editorial feel.
- **Body** (Inter 300 light, `15–17px`, lh 1.75–1.85): Paragraph copy. Light weight; long line-height; capped at ~70ch implicitly via column widths (`max-w-[480px]` to `max-w-[640px]`).
- **Label / Eyebrow** (Inter 500, `9–11px`, ls 0.10–0.20em, uppercase): The map-key voice. Always preceded by a 24–32px hairline brass dash on the left. Wraps roles, dates, journal names, NUS metadata.

### Named Rules

**The Italic-in-Brass Rule.** Every Playfair headline >36px is allowed exactly one italic word, rendered in Patinated Brass on cream or Lit Brass on dark. The italic word breaks to its own line via `<br/>`. Used intentionally; never decorative.

**The Eyebrow-Dash Rule.** Every uppercase eyebrow label is preceded by a horizontal hairline brass dash (`w-8 h-px`), separated by a `gap-3.5` flex gap. The dash IS the marker; without it the label is naked.

**The Three-Weight Rule.** Inter ships in 300/400/500/600. Body copy uses 300. UI labels use 500. Buttons use 600. There is no 400 body, no 700 anything in Inter; that range belongs to Playfair.

## 4. Elevation

The system is flat. There are no shadows, no blurs, no z-axis effects of any kind, on any surface. Depth is constructed entirely through hairlines, tonal layering within a surface family, and the hard cut between cream and furnace-black surfaces.

When a card needs to feel "lifted" on hover, it shifts background tone (Manuscript Cream → Surface Stone) or adds a hairline brass top bar that scales in on the x-axis. When a list row needs hover affordance, it shifts background tone (Manuscript Cream → Page Cream). State is communicated by tonal shift and hairline appearance, not by altitude.

### Shadow Vocabulary

None. The single allowed exception is the dark hero/contact pages' bottom-vignette gradient (`bg-gradient-to-t from-[rgba(10,9,8,0.7)]`), which is an atmospheric blend, not a shadow.

### Named Rules

**The Flat-By-Doctrine Rule.** No `box-shadow` anywhere in the system. If a hover state needs to register, use a 1px hairline appearance, a tonal background shift, or a transformation of an existing decoration (`scaleX`, `scaleY`). If those aren't enough, the underlying interaction is wrong.

**The No-Glass Rule.** No `backdrop-filter: blur` anywhere. The current Navbar uses `backdrop-blur-xl` over a translucent cream — this is grandfathered as a Don't and is scheduled for removal in the next polish pass. Solid Manuscript Cream with a hairline bottom border is the correct treatment.

## 5. Components

### Buttons

- **Shape:** Sharp (`border-radius: 0`). No exceptions.
- **Primary (cream surface):** `Patinated Brass` background, `Manuscript Cream` text, 18px × 48px padding, Inter 600 12–13px tracked 0.08em uppercase. Hover transitions background to `Bitumen Ink` (200ms `transition-colors`).
- **Ghost (cream surface):** Transparent background, `Bitumen Ink` text, 1px `Hairline Bright` border, same padding/typography. Hover transitions border to `Bitumen Ink`.
- **Hero primary (dark surface):** `Paper White` background, `Bitumen Ink` text, 14px × 36px padding, slightly lighter weight (Inter 500). Hover background `#e8e6e0`.
- **Hero ghost (dark surface):** Transparent, white text at 80% alpha, 1px white-25% border. Hover lifts text to 100% white and border to 60%.

### List Rows (News, Publications, Open Positions)

- **Shape:** Full-width row, 1px `Hairline` bottom border. Internal padding 28–36px vertical.
- **Layout:** Three-column grid: leading metadata (date, journal, type chip), title + body, trailing affordance (View arrow, Apply button, → icon).
- **Default state:** Bitumen Ink title in Playfair 26–28px, Ink Dim body in Inter Light, Patinated Brass leading metadata in Inter 10–11px tracked.
- **Hover state:** Background shifts to `Page Cream`, leading affordance border + text shifts to Patinated Brass. **No left-stripe accent.** The tonal shift is the affordance.

### Member Cards

- **Shape:** Sharp, 1px `Hairline` border on Manuscript Cream background. 32px padding.
- **Default:** Initials box (48px square, hairline-bright border, Playfair 18px ink-dim glyph). Member name (Playfair 20px ink). Eyebrow sub-role (Inter 500 10px brass tracked 0.14em). Body focus line (Inter Light 13px ink-dim). Trailing "Since [date]" (Inter 10px ink-faint).
- **Hover:** Background shifts to `Surface Stone`. Initials box border and glyph both shift to Patinated Brass. **No left scale-y stripe.** The tone + initials shift is the affordance.

### Section Header (Signature Component)

- **Composition:** Hairline brass dash (`w-8 h-px`) + Inter 500 10px uppercase label tracked 0.2em, then a 16px gap, then a Playfair Headline (500 weight, clamp scale) where the title sits on line 1 and the optional `accent` word renders italic-in-brass on line 2 via `<br/>`.
- **Light mode prop:** When placed on a Furnace surface, the dash uses Lit Brass at 70% alpha and the label uses Lit Brass at 90% alpha. Title text shifts to white, accent to Lit Brass at 85%.

### Eyebrow Label (Signature Primitive)

- **Composition:** `<div class="ds-eyebrow"><span class="dash"></span><span class="text">LABEL</span></div>`
- The 32px brass dash + uppercase Inter 500 10px tracked 0.2em label is the system's most repeated atomic primitive. It precedes every section header, every credential row, every status badge, the "Find Us" map intro, and the journal-name eyebrow on every publication row.

### Navigation

- **Style:** Fixed top, 60px height, full-width, 48px horizontal padding. Logo (28px hairline-brass square housing a Playfair "W") + brand name on the left; horizontal nav links on the right.
- **Default on home (above fold):** Transparent over the Furnace Black hero. White brand name; nav links at white-55% alpha, hover to white-100%.
- **Scrolled / non-home pages:** Solid Manuscript Cream (per the No-Glass Rule, this replaces the current `backdrop-blur-xl` translucent treatment), 1px `Hairline` bottom border. Brand name shifts to Bitumen Ink; links shift to Ink Dim, hover to Bitumen Ink.
- **Active link:** Patinated Brass on cream, Lit Brass on dark.
- **Typography:** Inter 400 12px uppercase tracked 0.06em across all states.

### Research Tile (Signature Component, Dark)

- **Container:** Single grid cell on a `gap-px` grid where the gap-color is `Hairline` — so the gaps render as a 1px hairline grid between tiles. Background `#1a1712` default; hover background `#1c1a16`.
- **Content:** Brass numeral ("01", "02") in Inter 11px tracked, Playfair 26px white tile heading, Inter 10px tag label tracked-uppercase Lit Brass at 40% alpha.
- **Hover:** A 2px Patinated Brass top bar scales from `scaleX(0)` to `scaleX(1)` from the left over 300ms (this is the system's ONE allowed scaling-bar accent — see Don'ts for why it's narrow). Body copy reveals via `max-height` and `opacity` transition.

### Map / Static Image Embed

- **Treatment:** Always rendered with `filter: grayscale(1)` and overlaid with a `bg-[rgba(138,106,42,0.04)]` Patinated-Brass tint to keep it inside the palette. No exceptions; raw Google Maps colors break the system.

## 6. Do's and Don'ts

### Do:
- **Do** use the two-surface rule: every page is either Manuscript Cream or Furnace Black; tonal layering stays inside a family.
- **Do** lead every uppercase eyebrow with a `w-8 h-px` Patinated Brass dash and a `gap-3.5` flex gap.
- **Do** render exactly one italic word per Playfair headline ≥36px in Patinated Brass on cream or Lit Brass on dark.
- **Do** keep all corners sharp: `border-radius: 0` is the system's only radius value.
- **Do** use 1px hairlines (`Hairline #1412101a` on cream, `rgba(255,255,255,0.1)` on dark) as the primary divider, not shadows.
- **Do** use tonal shift (`Manuscript Cream → Page Cream`, `Manuscript Cream → Surface Stone`) for hover and active states on rows and cards.
- **Do** name molecules, methods, mechanisms, the institution, the year. Specificity is the brand.
- **Do** keep body copy at Inter 300 light, 15–17px, line-height 1.75–1.85, max ~70ch column.
- **Do** apply `filter: grayscale(1)` and a 4% Patinated-Brass tint to any third-party embed (maps, iframes).
- **Do** honor `prefers-reduced-motion`: ticker, breathe, and rotate-slow animations stop or fade.

### Don't:
- **Don't** use side-stripe `border-left` greater than 1px as a hover accent on list rows, cards, or callouts. The current `border-left: 2px solid var(--gold)` hover on News, Publications, Open Positions, the home news strip, and the Member card is grandfathered as a fix-on-next-polish-pass anti-pattern. Replace with a tonal background shift (`Manuscript Cream → Page Cream`) or, for cards, a tonal shift plus brass on the initials box.
- **Don't** use `backdrop-filter: blur` anywhere. The current Navbar's `backdrop-blur-xl` and the hero badge's `backdrop-blur-sm` are scheduled for removal. Solid Manuscript Cream + a hairline bottom border is the correct Navbar; the hero badge becomes a solid Furnace Surface chip with a 1px Lit Brass border.
- **Don't** use the hero-metric template ("4 / Research Dirs.", "20+ / Publications", "6 / Team Members"). The current hero block is the SaaS-cliché PRODUCT.md anti-references. Replace with a one-line editorial standfirst that names the four research directions in prose, or with the lab's founding-year + institution metadata only.
- **Don't** use gradient text (`background-clip: text` on a gradient background). The italic-in-brass rule replaces it for all emphasis.
- **Don't** use any glassmorphism — no blurred translucent cards, no decorative blur layers.
- **Don't** introduce a third color family. White-and-teal corporate-biotech palettes, navy-and-gold finance palettes, and SaaS-cream are out of scope by name.
- **Don't** use a logo wall, a "Trusted by" strip, a bento grid, or a hero metric block.
- **Don't** paint the brass into a card background or use it as a surface fill. Brass marks position; it does not fill space.
- **Don't** soften corners. No `border-radius: 4px`, no `rounded-md`, no exceptions.
- **Don't** use Inter italic. If italic is needed, the moment belongs to Playfair-italic-in-brass. Inter stays roman.
- **Don't** write "innovative," "cutting-edge," "leveraging," "world-class," "transformative" in any visible UI copy.
- **Don't** wrap every section in a max-width container. Many sections want to breathe edge-to-edge with internal padding only.
