# MB CoreX — Stage 2: Design System Reference

Status: implemented and building cleanly (`npx tsc --noEmit` + `npm run build` both pass with zero pages of real site content — only the `/` route, which is a component-preview canvas, not the homepage). Stack notes: Next.js 16 (App Router, Turbopack), React 19, Tailwind CSS v4 (CSS-based `@theme`, no `tailwind.config.ts`), shadcn's `base-nova` style on top of **Base UI** (not Radix — the CLI's current default), Framer Motion, React Hook Form + Zod, `next/font` Geist Sans/Mono.

This document is the map of what exists and where. Read [01-discovery-architecture.md](./01-discovery-architecture.md) first for *why* — this file is *what*.

---

## 1. Theme foundation

All tokens live in `app/globals.css`, two layers:

- `@theme inline` — semantic slots (`--color-background`, `--color-primary`, `--radius-lg`, …) that shadcn/base-ui components consume. These indirect to plain CSS vars set on `:root, .dark` (combined selector — the site is dark-only today; a future light theme would split `:root` off from `.dark` here).
- `@theme` (static) — brand-specific tokens: `--color-brand-blue-{50…950}`, `--color-brand-red-{50…950}` (sampled directly from the logo PNG: blue `#0049FF`, red `#FC1410`), `--color-success/warning/error/info-500`, the custom `--text-*` type scale, `--shadow-ambient(-lg)`, `--shadow-glow-blue(-lg)`, `--shadow-glow-red`, `--breakpoint-3xl` (120rem / ultra-wide), `--ease-out-expo`.

Semantic slot → brand mapping (the important ones): `--background #05070b`, `--card/--popover` = `--surface` / `--surface-elevated`, `--primary` = brand blue 500, `--destructive` = a separate `error-500` (`#EF4444`) so form/system errors never compete visually with the brand-red accent, `--ring` = brand blue 400.

Utilities added in `@layer utilities`: `.glass-surface` (scrolled navbar / overlays), `.skip-link` (visible-on-focus, wired in `Navbar`).

## 2. Typography — `components/typography/typography.tsx`

| Component | Use | Notes |
|---|---|---|
| `Display` | Hero H1 only, one per page | `size="2xl\|xl\|lg"`, responsive (mobile falls back to Tailwind's default `text-3xl/4xl`, desktop uses the custom `--text-display-*` tokens) |
| `Heading` | H2–H6 | `level` sets the semantic tag, `size` decouples visual size from it (`xl/lg/md/sm/xs`) — defaults are sane per level |
| `Text` | Body copy | `size="lg\|md\|sm"`, `tone="default\|muted\|brand"`, polymorphic via `as` |
| `Caption` | Eyebrows/meta | uppercase, tracked |
| `InlineCode` / `CodeBlock` | Technical snippets | font-mono, surface-elevated bg |
| `Quote` | Testimonials/pull-quotes | left border accent |

## 3. Layout primitives — `components/layout/`

`Container` (width `default 1280px / wide 1440px / narrow 768px`), `Section` (vertical rhythm `default 128px desktop / tight 64px`, optional `glow="top\|center"` radial blue glow, `fullBleed` to skip the container), `Grid` (`cols 1–12` presets), `Stack` + `Spacer` (flex primitive + fixed gap), `Divider` (Separator alias, optional centered label), `SplitLayout` (two-column, `ratio`/`reverseOnMobile`), `HeroLayout` (clears sticky nav, min-height, optional media column) — `Hero` in `components/sections` composes on top of this one.

## 4. Navigation — `components/layout/`

`Navbar` (glass-on-scroll via `useScrolled`, desktop nav switches in at `xl` — 8 primary items didn't fit comfortably at `lg`), `NavDropdown` (Services mega-menu-lite over `NavigationMenu`, sourced from `solutionsNav` in `lib/constants.ts`), `MobileNav` (Sheet-based drawer, closes on link click via `SheetClose`), `NavLink` (route-aware `aria-current`), `Breadcrumbs` (data-driven wrapper over shadcn's breadcrumb parts), `Footer`, `Logo` (aspect-locked from the source PNG, decorative alt when wrapped in a labelled link).

`lib/constants.ts` is the single source of truth for `primaryNav`, `solutionsNav`, `footerNav`, `ctaCopy`, and `socialChannels` (toggle `enabled` to add/remove a social icon everywhere at once).

## 5. Icon system — `components/icons/`

Lucide-react v1 dropped all brand/wordmark icons from the core set (confirmed by inspecting the installed package — `Github`, `Linkedin`, `Youtube`, `Instagram`, `Twitter` are all `undefined`). `brand-icons.tsx` fills that gap with Simple Icons path data for GitHub/LinkedIn/X/YouTube/Instagram/TikTok/Discord. `icon-config.ts` defines the standard size scale (`inline 16 / sm 20 / md 24 / lg 32 / xl 48`), semantic color classes, and curated `serviceIcons` / `securityIcons` / `aiIcons` maps (every key verified to actually exist in the installed lucide-react before use). `SocialLinks` renders `socialChannels` automatically.

## 6. Motion system — `lib/motion.ts` + `components/motion/`

Variant objects (`fadeIn`, `slideUp`, `slideDown`, `scaleIn`, `staggerChildren()`, `cardHover`, `buttonTap`, `pageTransition`, `drawerSlide`, `modalScale`, `accordionContent`, `imageReveal`) all share the `--ease-out-expo` curve for entrances. `Reveal`/`StaggerItem` (scroll-triggered, `viewport={{ once: true }}`), `Counter` (count-up, snaps instantly under reduced motion), `ImageReveal` (clip-path wipe). `useReducedMotion` gates every one of these down to opacity-only. `app/template.tsx` provides the route-level cross-fade (Next's per-navigation remount convention — the only place a page-transition effect is possible).

## 7. Buttons — `components/ui/button.tsx`

Base is shadcn/base-nova's button; MB CoreX added a `cta` variant (brand-blue with `shadow-glow-blue`, brightens further on hover) and a `loading` prop (shows `Spinner`, sets `aria-busy`, force-disables). Existing variants: `default/outline/secondary/ghost/destructive/link`. Sizes: `default/xs/sm/lg/icon/icon-xs/icon-sm/icon-lg`. Polymorphic via `render={<a .../>}` (Base UI's render-prop pattern, not Radix `asChild`).

## 8. Forms — `components/forms/` + `components/ui/field.tsx`

`TextField` is the base (label/description/error/icon, forwardRef for RHF `register()`); `EmailField`/`PhoneField`/`SearchField` preset `type`+icon. `TextareaField`, `SelectField`, `CheckboxField`, `RadioField`, `ToggleField` (Switch), `FileUploadField` (custom — no shadcn primitive exists for this; drag-and-drop + click, keyboard-operable). `ContactForm` wires all of this to React Hook Form + Zod (`lib/validations/contact.ts`) end to end, `onSubmit` is an injected prop so the component isn't coupled to a specific backend (Server Action wiring happens where it's used).

## 9. Cards — `components/cards/`

`FeatureCard` (no link — mission/value grids) vs `ServiceCard` (optional `href`, hover glow) are intentionally separate per the Stage-2 spec despite near-identical anatomy. `PortfolioCard` (aliased as `ProjectCard`), `TestimonialCard` (rating stars, avatar fallback), `TeamCard`, `BlogCard`, `StatCard` (wraps `Counter`), `TechCard`, `PricingCard` (scaffolded for a future productized tier — not required for launch copy), `CaseStudyCard` (before/after two-column, matches the reference collage's Case Studies pattern exactly).

## 10. Content sections — `components/sections/`

`Hero`, `FeatureGrid`, `StatsBand`, `Timeline` (+ `ProcessTimeline` alias, numbered), `TestimonialCarousel` (embla via shadcn's `Carousel`), `CTABanner`, `FAQAccordion`, `PricingTable`, `LogoCloud`, `TechStackBadges`, `BeforeAfterComparison`, `ContactSection` (`SplitLayout` + `ContactForm`), `NewsletterSection`. All are prop-driven — no copy is hardcoded in any section component, per the "content lives outside components" rule from the architecture doc.

## 11. Feedback — `components/feedback/` + shadcn primitives

Directly from shadcn: `Dialog`, `Sheet`, `Tooltip`, `Popover`, `Alert`, `Badge`, `Progress`, `Skeleton`, `Spinner`, `Empty`, `Sonner` (toast, mounted globally in `components/providers.tsx`). Custom: `Modal` (Dialog convenience wrapper), `Chip` (removable/toggleable pill, distinct from the static `Badge` — marked `"use client"` since it owns a DOM `onClick`), `EmptyState` / `ErrorState` / `SuccessMessage` (thin presets over `Empty`/`Alert`).

## 12. Accessibility

Baked in rather than retrofitted: skip link (`.skip-link` → `#main-content`, set on `<main>` in `app/layout.tsx`), every decorative icon has `aria-hidden="true"`, every form field is label-associated via `htmlFor`/`id`, focus-visible rings use the brand ring color everywhere (inherited from the `--ring` token, not per-component), all interactive primitives come from Base UI which handles roving focus / focus trap / `aria-*` state internally (Dialog, Sheet, NavigationMenu, Accordion, Select, etc.), motion respects `prefers-reduced-motion` throughout. Contrast check: `muted-foreground` (`#7B8494`) on `background` (`#05070b`) ≈ 5.25:1, clears WCAG AA (4.5:1) for normal text with headroom.

## 13. Responsiveness

Tailwind defaults (`sm 640 / md 768 / lg 1024 / xl 1280 / 2xl 1536`) plus a custom `3xl` (1920px) for ultra-wide. The one deliberate deviation from the Stage-1 plan: primary nav collapses to the mobile drawer at `xl` instead of `lg`, because the real 8-item nav (once "AI Solutions" was added in Stage 3) doesn't fit comfortably at laptop width — this was a build-time discovery, not a plan change worth going back to rewrite Stage 1 for.

## 14. Code quality

Every component is typed (no `any`), variant props go through `class-variance-authority` where there's more than one axis of variation, `cn()` (`clsx` + `tailwind-merge`) is the only way class names get merged, naming is consistent (`*Field` for form fields, `*Card` for cards, `*Section`/section-level components take arrays of card props rather than children). `npx tsc --noEmit` and `npm run build` both pass clean.
