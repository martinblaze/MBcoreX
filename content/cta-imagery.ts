/**
 * Backdrops for the closing CTA band.
 *
 * Every theme carries a light and a dark photograph. `ThemedImage` renders
 * both and toggles them with the `dark:` variant, so the correct one is
 * already painted at first paint — no post-mount swap, no flash.
 *
 * Picking rules, if you add more:
 * - The photo is *texture behind type*, never the subject. It sits under an
 *   82% scrim, so anything busy or high-contrast in the centre will fight the
 *   headline and lose.
 * - The light variant must genuinely read light and the dark variant dark.
 *   A moody photo does not become a light-mode image by being cropped.
 * - Prefer atmospheric over literal. A stock handshake for "let's work
 *   together" is the fastest way to make the page look templated.
 *
 * Provenance: all eight are Unsplash, whose licence permits commercial use
 * with no attribution required. Source ids are noted per entry so they can be
 * traced or replaced. Unsplash+ ("premium") images are deliberately excluded —
 * those carry a different licence.
 */
export type CTATheme = "build" | "secure" | "systems" | "talk"

type CTAArt = {
  light: string
  dark: string
  /** object-position, when the subject is off-centre. */
  position?: string
}

export const ctaImagery: Record<CTATheme, CTAArt> = {
  /** Projects, partnership, "let's build something". Glass towers / night skyline. */
  build: {
    light: "/images/cta/cta-build-light.jpg", // unsplash photo-1764591696226
    dark: "/images/cta/cta-build-dark.jpg", // unsplash photo-1757445060456
  },
  /** Security and data. Abstract brand-blue energy rather than padlock clip-art. */
  secure: {
    light: "/images/cta/cta-secure-light.jpg", // unsplash photo-1771846340715
    dark: "/images/cta/cta-secure-dark.jpg", // unsplash photo-1765901177316
  },
  /** Software systems, automation, platforms. Engineered space / blue-lit machinery. */
  systems: {
    light: "/images/cta/cta-systems-light.jpg", // unsplash photo-1762928289094
    dark: "/images/cta/cta-systems-dark.jpg", // unsplash photo-1606206873764
  },
  /** Questions, writing, joining the team. Desk / sculptural form. */
  talk: {
    light: "/images/cta/cta-talk-light.jpg", // unsplash photo-1752223638233
    dark: "/images/cta/cta-talk-dark.jpg", // unsplash photo-1752606402425
  },
}
