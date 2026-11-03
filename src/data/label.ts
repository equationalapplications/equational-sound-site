// Equational Sound label-level data. Single source of truth for org identity.
// Facts per the engagement records: independent record label, Grand Rapids, Michigan.

export const LABEL = {
  name: 'Equational Sound',
  shortName: 'Equational Sound',
  tagline: 'Independent record label based in Grand Rapids, Michigan.',
  description:
    'Equational Sound is an independent record label based in Grand Rapids, Michigan, releasing psychedelic, experimental, and art rock music by Diamond 84, Elvis Christ Snake, St. Buffalo Blue, and Oh, Blue.',
  // Canonical production URL. Staging deploys use SITE_ORIGIN from astro.config.mjs;
  // this value is used for JSON-LD identifier fields and bio copy.
  canonicalUrl: 'https://equationalsound.com',
  socials: {
    facebook: 'https://www.facebook.com/equationalsound',
    youtube: 'https://www.youtube.com/user/EquationalSound',
  },
  // NOTE (Kurt review item): press/booking email — placeholder until Kurt supplies one.
  contact: {
    line: 'Press & booking: message us on Facebook',
    email: null as string | null,
  },
} as const;
