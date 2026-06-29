---
version: alpha
name: Mohawk Valley Services
description: A grounded, earthy local business directory for the Mohawk Valley region of New York. The design evokes the rural landscape — green hills, amber farmland, dark forest — while remaining professional and trustworthy. Where North NJ feels like a neighbor's recommendation in the suburbs, Mohawk Valley feels like the general store bulletin board in a small town. The palette centers on deep forest green and warm harvest gold against warm cream surfaces. Typography uses Inter for consistency with the sister site, but the visual personality is distinct — wider cards, more breathing room for agricultural and rural service listings, and a section-title underline in gold that echoes wheat fields and autumn leaves.

colors:
  primary: "#3e6b3e"
  primary-light: "#4a7c4a"
  primary-dark: "#2e4a2e"
  accent: "#8b6914"
  accent-hover: "#7a5b10"
  accent-soft: "#f5ecd0"
  surface-hero-start: "#1a2e1a"
  surface-hero-mid: "#2e4a2e"
  surface-hero-end: "#3e6b3e"
  canvas: "#ffffff"
  canvas-warm: "#f8f9f5"
  canvas-soft: "#f0f1ec"
  surface-card: "#ffffff"
  surface-dark: "#1a2e1a"
  ink: "#1a2e1a"
  body: "#3d4d3d"
  muted: "#6b7a6b"
  muted-soft: "#99a999"
  on-primary: "#ffffff"
  on-accent: "#ffffff"
  on-dark: "#ffffff"
  link: "#3e6b3e"
  link-hover: "#2e4a2e"
  hairline: "#d8dcd4"
  hairline-strong: "#c0c4b8"
  border-card: "#d4d8cc"
  success: "#3e6b3e"
  success-soft: "#d4edda"
  warning: "#8b6914"
  warning-soft: "#f5ecd0"
  error: "#a63d3d"
  error-soft: "#f5d4d4"
  star: "#f59e0b"
  star-empty: "#d4d4d8"

typography:
  display-xl:
    fontFamily: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif
    fontSize: 2.2rem
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: -0.02em
  display-md:
    fontFamily: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif
    fontSize: 1.5rem
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: -0.01em
  display-sm:
    fontFamily: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif
    fontSize: 1.25rem
    fontWeight: 600
    lineHeight: 1.35
  heading-section:
    fontFamily: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif
    fontSize: 1.5rem
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif
    fontSize: 1.1rem
    fontWeight: 400
    lineHeight: 1.6
  body-md:
    fontFamily: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif
    fontSize: 0.9rem
    fontWeight: 400
    lineHeight: 1.5
  caption:
    fontFamily: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif
    fontSize: 0.8rem
    fontWeight: 400
    lineHeight: 1.4
  label-caps:
    fontFamily: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif
    fontSize: 0.75rem
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0.05em
  button-md:
    fontFamily: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif
    fontSize: 0.9rem
    fontWeight: 600
    lineHeight: 1.4
  button-lg:
    fontFamily: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif
    fontSize: 1rem
    fontWeight: 600
    lineHeight: 1.4

rounded:
  none: 0px
  xs: 4px
  sm: 6px
  md: 8px
  lg: 12px
  xl: 16px
  pill: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 64px
  section: 80px

components:
  nav-bar:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-sm}"
    height: 56px
    padding: "{spacing.sm} {spacing.lg}"
  nav-link:
    backgroundColor: transparent
    textColor: "#d0e0d0"
    typography: "{typography.body-sm}"
    rounded: "{rounded.xs}"
    padding: "{spacing.xxs} {spacing.sm}"
    hoverBackgroundColor: "rgba(255,255,255,0.15)"
    hoverTextColor: "{colors.on-dark}"
  hero-banner:
    backgroundColor: "{colors.surface-dark}"
    backgroundGradient: "linear-gradient(135deg, {colors.surface-hero-start} 0%, {colors.surface-hero-mid} 50%, {colors.surface-hero-end} 100%)"
    textColor: "{colors.on-dark}"
    padding: "{spacing.2xl} {spacing.lg}"
  hero-cta:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.xs}"
    padding: "{spacing.sm} {spacing.xl}"
    hoverBackgroundColor: "{colors.accent-hover}"
  section-title:
    textColor: "{colors.primary}"
    typography: "{typography.heading-section}"
    borderBottom: "2px solid {colors.accent}"
    marginBottom: "{spacing.lg}"
  cat-card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
    boxShadow: "0 2px 8px rgba(0,0,0,0.07)"
    hoverBoxShadow: "0 4px 16px rgba(0,0,0,0.12)"
    hoverTransform: "translateY(-2px)"
  cat-card-heading:
    typography: "{typography.display-sm}"
    textColor: "{colors.primary}"
  cat-card-desc:
    typography: "{typography.body-sm}"
    textColor: "{colors.body}"
  cat-card-count:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    typography: "{typography.label-caps}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xxs} {spacing.sm}"
    marginTop: "{spacing.sm}"
  biz-card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
    borderLeft: "3px solid {colors.primary}"
    boxShadow: "0 2px 8px rgba(0,0,0,0.07)"
  biz-card-name:
    typography: "{typography.display-sm}"
    textColor: "{colors.ink}"
  biz-card-category:
    typography: "{typography.label-caps}"
    textColor: "{colors.accent}"
    letterSpacing: "0.5px"
  biz-card-info:
    typography: "{typography.body-sm}"
    textColor: "{colors.body}"
  biz-card-area:
    typography: "{typography.caption}"
    textColor: "{colors.muted}"
    fontStyle: "italic"
  biz-card-website:
    typography: "{typography.body-sm}"
    textColor: "{colors.link}"
    fontWeight: 500
  biz-card-rating-stars:
    textColor: "{colors.star}"
    typography: "{typography.body-sm}"
  biz-card-rating-count:
    typography: "{typography.caption}"
    textColor: "{colors.muted}"
  cta-section:
    backgroundGradient: "linear-gradient(135deg, {colors.accent} 0%, {colors.accent-hover} 100%)"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl} {spacing.lg}"
  cta-button:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.accent}"
    typography: "{typography.button-lg}"
    fontWeight: 600
    rounded: "{rounded.xs}"
    padding: "{spacing.sm} {spacing.xl}"
  ad-banner:
    backgroundColor: "{colors.canvas-soft}"
    borderColor: "{colors.hairline-strong}"
    borderStyle: "dashed"
    borderWidth: "2px"
    rounded: "{rounded.md}"
    padding: "{spacing.xl} {spacing.lg}"
  footer:
    backgroundColor: "{colors.surface-dark}"
    textColor: "#aaaaaa"
    typography: "{typography.caption}"
    padding: "{spacing.xl} {spacing.lg}"
  footer-link:
    textColor: "{colors.accent}"
  coming-soon-badge:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.muted}"
    typography: "{typography.label-caps}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xxs} {spacing.sm}"

---

## Overview

Mohawk Valley Services is the rural counterpart to North NJ Services — a local business directory serving Montgomery, Fulton, Herkimer, and Oneida counties in upstate New York. Where the NJ site evokes suburban trust, this one channels **Country General Store** — warm, unpretentious, and built for people who know their neighbors.

The palette shifts from navy/coral to **forest green and harvest gold**. Deep green (`#3e6b3e`) is the backbone — it reads as rural reliability, the color of hills and pastures. Warm gold (`#8b6914`) is the accent — amber wheat, old brass, autumn leaves. Against a warm cream canvas (`#f8f9f5`) with a slight green undertone, the combination feels rooted in place without being kitschy.

The structure is identical to North NJ for maintainability, but the personality is distinct. Wider generous spacing reflects the open landscape. The section-title underline in gold (not coral) signals "this is farmland country." Categories include rural-specific listings like Well & Septic and Farm & Agriculture that would never appear in the NJ directory.

**Key Characteristics:**
- Forest green + harvest gold palette — earthy, trustworthy, distinctly upstate
- Warm cream canvas (`#f8f9f5`) with a subtle green undertone — not the warmer yellow-cream of NJ
- Same card/grid system as North NJ for code reuse, different color personality
- Gold section-title underline — harvest/wheat reference
- Left-border accent in forest green on business cards
- Broader category set reflecting rural needs (Well & Septic, Farm & Agriculture, General Contracting)
- Mobile-first directory — users are often on-site at a property or farm
- Emoji category icons for instant recognition in low-bandwidth rural mobile

## Colors

### Brand & Accent
- **Forest Green** (`{colors.primary}` — `#3e6b3e`): The authoritative anchor. Used for headings, nav background, card borders, and the green that says "this is our land." Not corporate green — it's deep enough to feel trustworthy, light enough to feel approachable.
- **Harvest Gold** (`{colors.accent}` — `#8b6914`): The action color. CTAs, count badges, section underlines, category labels. Warm amber that evokes wheat fields and brass hardware — a natural complement to the green.
- **Accent Hover** (`{colors.accent-hover}` — `#7a5b10`): Deeper gold for hover states.

### Surfaces
- **Canvas Warm** (`{colors.canvas-warm}` — `#f8f9f5`): Page background. Slightly green-tinted cream — not the yellow-warmth of NJ's `#f8f7f4`, but a cooler cream that reads as "fresh" and "country." Used for the `<body>` and section backgrounds.
- **Canvas** (`{colors.canvas}` — `#ffffff`): Pure white for card surfaces and overlays.
- **Canvas Soft** (`{colors.canvas-soft}` — `#f0f1ec`): Deeper warm gray for ad banners and alternate sections.
- **Surface Dark** (`{colors.surface-dark}` — `#1a2e1a`): The deep forest gradient base for header, footer, and CTA sections. Dark green-black, not pure black.

### Text
- **Ink** (`{colors.ink}` — `#1a2e1a`): Primary heading color. Deep forest green-black.
- **Body** (`{colors.body}` — `#3d4d3d`): Paragraph text. Green-tinted dark gray.
- **Muted** (`{colors.muted}` — `#6b7a6b`): Secondary info. Green-gray that stays readable.
- **Muted Soft** (`{colors.muted-soft}` — `#99a999`): Placeholders and disabled states.

### Borders
- **Hairline** (`{colors.hairline}` — `#d8dcd4`): Green-tinted dividers.
- **Hairline Strong** (`{colors.hairline-strong}` — `#c0c4b8`): Stronger borders, ad banner dashes.
- **Border Card** (`{colors.border-card}` — `#d4d8cc`): Card borders when shadow isn't enough.

### Functional
- **Star** (`{colors.star}` — `#f59e0b`): Gold for star ratings — universal trust signal.
- **Link** (`{colors.link}` — `#3e6b3e`): Interactive text links in forest green.
- **Error** (`{colors.error}` — `#a63d3d`): Warm brick red for errors — not bright red, more barn-door.
- **Success** (`{colors.success}` — `#3e6b3e`): Reuses primary green for success — natural and cohesive.

### Gradient
The hero and CTA sections use a three-stop forest gradient (`{colors.surface-hero-start}` → `{colors.surface-hero-mid}` → `{colors.surface-hero-end}`). This gradient creates depth in the header/footer bands — a walk from deep forest into sunlight — without requiring photography.

## Typography

### Font Family
**Inter** throughout, with the same system font fallback as North NJ. Consistency across the two sites makes maintenance easy while the color palette does all the personality work.

### Hierarchy
Identical scale to North NJ for cross-site consistency:

| Token | Size | Weight | Use |
|---|---|---|---|
| `{typography.display-xl}` | 2.2rem | 700 | Hero title ("Mohawk Valley Services") |
| `{typography.display-md}` | 1.5rem | 600 | Category headings, CTA headings |
| `{typography.display-sm}` | 1.25rem | 600 | Business name in listing cards |
| `{typography.heading-section}` | 1.5rem | 600 | Section titles |
| `{typography.body-lg}` | 1.1rem | 400 | Hero subtitle, CTA body |
| `{typography.body-md}` | 1rem | 400 | Default body text |
| `{typography.body-sm}` | 0.9rem | 400 | Business details |
| `{typography.caption}` | 0.8rem | 400 | Fine print, area served |
| `{typography.label-caps}` | 0.75rem | 600 | Category labels, badges |
| `{typography.button-md}` | 0.9rem | 600 | Nav links, secondary buttons |
| `{typography.button-lg}` | 1rem | 600 | Primary CTAs |

### Principles
- Same typographic principles as North NJ — mobile readability, weight contrast for hierarchy, no uppercase headings
- Emoji as functional category icons — one per category, placed at card top
- The gold accent in section underlines (`2px solid {colors.accent}`) replaces the coral of NJ

## Layout

Same responsive grid system as North NJ (1200px max, auto-fill cards). The structure is shared for code reuse — the personality comes from color, not layout.

### Spacing System
Identical to North NJ: 4px base unit, 80px section padding, 24px card padding, 16-24px grid gaps.

### Responsive Breakpoints
Same three-tier: <600px mobile single column, 600-959px tablet 2-column, ≥960px desktop 3-4 columns.

### Whitespace Philosophy
Identical philosophy — generous spacing for scanning, warm canvas fills gaps. The green-tinted cream background feels like a sunlit farmhouse kitchen wall, not a hospital.

## Elevation & Depth

Same four-tier system as North NJ. Level 0 flat backgrounds, Level 1 subtle card shadows, Level 2 hover lift, Level 3 sticky nav. The forest green left border on business cards does the visual work — shadows are secondary.

## Shapes

Same rounded scale as North NJ. Cards at 8px, CTAs at 4px (sharp = trustworthy action), badges at pill. The shape language is shared; the color language differentiates.

## Components

### Navigation (`nav-bar`)
Sticky dark forest-green bar. Same layout as North NJ, different palette. Warm light-green text on dark green background.

### Hero Banner (`hero-banner`)
Three-stop forest gradient (deep green to mid-green). Contains site title, tagline, and CTA. The gradient reads as "hills at dawn" rather than "corporate header."

### Section Title (`section-title`)
Left-aligned heading with **gold underline** (`2px solid {colors.accent}`). This is the key differentiator from NJ's coral underline — gold says harvest, wheat, autumn warmth.

### Category Card (`cat-card`)
Same structure as NJ but with forest green headings and gold count badges. The emoji icons should reflect rural categories — wrench, tractor, tree, water drop, etc.

### Business Listing Card (`biz-card`)
Same structure with 3px left forest-green border. Gold category labels instead of coral. The visual rhythm of green left borders down a list creates a cohesive reading pattern.

### CTA Section (`cta-section`)
Gold gradient band (harvest gold → deeper gold) with white text and white button. Warm and direct — "List Your Business Free" feels inviting in gold.

### Ad Banner (`ad-banner`)
Dashed border, soft green-tinted background. Clearly labeled "Advertisement."

### Footer (`footer`)
Dark forest-green band matching the header. Gold links provide warmth against the dark background.

### Coming Soon Badge (`coming-soon-badge`)
Muted pill on soft background. Same honest signaling as NJ.

## Do's and Don'ts

### Do
- Use forest green (`#3e6b3e`) as the primary identity color — it's the "country" in Country General Store
- Use harvest gold (`#8b6914`) for accents, CTAs, and section underlines — it's the warmth that differentiates from NJ
- Keep the warm cream background (`#f8f9f5`) — the slight green undertone is intentional and cohesive
- Use the gold section underline consistently — it's the visual signature that ties the site together
- Reflect the community in category choices — Well & Septic, Farm & Agriculture, General Contracting belong here
- Make phone numbers and addresses easy to tap on mobile — rural users are often on-site with spotty coverage
- Use the same card/grid system as North NJ for maintainability
- Show listing counts honestly

### Don't
- Don't use the gold gradient outside of hero/CTA bands
- Don't mix NJ's coral into this site — the two directories must feel like siblings, not twins
- Don't use pure white (`#ffffff`) as the page background — the cream is part of the identity
- Don't use emoji in headings or body text — functional category icons only
- Don't use blue as an accent color — this is a green + gold site, not a blue + red site
- Don't use rounded corners on CTA buttons beyond `{rounded.xs}` (4px)
- Don't hide rural-specific categories — Well & Septic and Farm & Agriculture are features, not afterthoughts
- Don't use `{colors.primary}` as a large-area background — it's for text and borders, the dark green is too heavy as a fill