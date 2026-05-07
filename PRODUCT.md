# Product

## Register

brand

## Users

Three audiences of roughly equal weight, each landing for a different reason:

- **Prospective PhDs and postdocs** evaluating whether this is a lab worth joining. They scan People, Open Positions, and Research to read culture, scope, and PI quality.
- **Peer researchers and collaborators** (other labs, conference contacts, potential co-authors) checking whether the group's science is rigorous and current. They go straight to Publications and the Research detail.
- **Funders, press, and university leadership** looking for impact signals. They read News, the PI narrative, and the home page first.

Common context: read on a laptop, often after a citation or recommendation, often with high standards and low patience for marketing language.

## Product Purpose

The public web presence for Prof. Andrew B. Wong's electrochemistry lab at NUS. Communicates four research directions (CO₂ reduction in molten salt, microenvironment engineering, hybrid biotic–abiotic systems, perovskite-inspired materials), the people doing the work, the publication record, recent news, and recruiting.

Success looks like: a visitor who could not have guessed this was a research-group site from a template, leaves understanding what the lab actually does, and trusts that the science behind it is serious.

## Brand Personality

Bold, ambitious, frontier.

Voice and tone: confident and specific. Names molecules, methods, and mechanisms rather than gesturing at "innovation." Comfortable with technical density on the right surfaces; capable of being legible to a non-specialist on the home page. Never breathlessly promotional. Avoids "cutting-edge," "leveraging," "innovative," "transformative."

Emotional goals: respect (this is real science), curiosity (these problems are interesting), and a quiet kind of awe at the scale of the questions (energy, carbon, nitrogen, materials).

## Anti-references

Two families to refuse, by name and by tell:

- **Clinical biotech / corporate-lab sites** (Moderna, Genentech, Illumina-style). Tells: white + teal palettes, stock microscope photography, glass-and-steel building photos, copy like "Innovating tomorrow's chemistry." Wrong because it reads as a press kit, not a lab.
- **SaaS / startup landing pages** (the Linear/Vercel/Notion-clone aesthetic when applied to academia). Tells: gradient or video hero, bento grid, "Trusted by" logo wall, hero-metric blocks ("4 research directions / 50+ publications / 8 PhDs"), dark mode by default, AI-startup-cream. Wrong because it copies a register the science predates.

Generic NUS / Bootstrap-era academic templates are also out of scope, but treated as baseline-bad rather than active anti-references; the failure mode worth guarding against is sliding toward the corporate or startup look while trying to escape the academic one.

## Design Principles

1. **Frontier over institution.** This lab is pushing pathways that don't exist yet. The site should feel like ambition meeting rigor, not like a faculty page checking template boxes. Where there's a choice between safe and committed, choose committed.
2. **Show the science as a story.** A non-specialist should leave the home page knowing roughly what molten-salt CO₂ reduction is and why it matters. Research surfaces use narrative, hierarchy, and visual structure, not decorative panels around a paragraph.
3. **Editorial confidence, journal-grade restraint.** Bold typographic and structural moves are encouraged; decorative chrome is not. The site earns trust by not flinching toward startup tropes, no gradient text, no glass cards, no hero-metric template.
4. **People are visible, not buried.** All three audiences want to see who is in the lab. Real photos, real names, real roles, a present PI voice. Avoid anonymous "team" grids that read as placeholders.
5. **Specificity over slogan.** Name the molecule, the method, the mechanism, the institution, the year. Specific facts are the brand. Generic adjectives ("innovative," "world-class") are the brand's enemy.

## Accessibility & Inclusion

Target: WCAG 2.2 AA across the site.

Concrete commitments:
- Body text and primary UI hit AA contrast against the cream surface; the gold accent is reserved for non-text decoration or large/bold treatments where it clears AA.
- Full keyboard reachability for nav, accordions, tabs, and the contact form. Visible focus rings (not the suppressed default).
- `prefers-reduced-motion` honored: ticker, breathe, and rotate-slow animations stop or fade out. No motion gates important content.
- Semantic landmarks (`header`, `nav`, `main`, `footer`), one `<h1>` per page, real lists for lists.
- Image `alt` text describes content (people: name + role; research: what's depicted), not file names.
- Forms label every field, surface validation in text not just color, and announce success/error states.
