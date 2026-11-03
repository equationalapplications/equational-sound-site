// Artist roster. Roster split per decision D8: full pages for these four;
// krtRa and Eden Oz appear on the Catalog page only (D17 — no artist pages).
// Identity rulings (D17): "Heigira" spelling; Eden he/him; Gia they/them;
// band name is "Oh, Blue" (comma part of it) but slugs drop the comma (A4).

export interface ArtistLink {
  label: string;
  url: string;
  // UNVERIFIED links are shown to Kurt for review before publish (D6 gate).
  verified?: boolean;
}

export interface Artist {
  slug: string;
  name: string;
  bio: string; // GEO-citable opener: who, where, genre, releases — plain facts.
  bioDetail?: string[];
  releases: string[]; // release ids from releases.ts
  links: ArtistLink[];
  placeholder?: boolean; // D9: Oh, Blue page is a placeholder at launch
  members?: string[];
  guestNote?: string;
}

export const ARTISTS: Artist[] = [
  {
    slug: 'diamond-84',
    name: 'Diamond 84',
    bio: 'Diamond 84 is a psychedelic experimental art rock band and recording project from Grand Rapids, Michigan, on the independent label Equational Sound. The band released the album "No No No You\'re the Algorithm" on July 12, 2018 — eight tracks of indie music self-crafted with love and care: psychedelic, transverse lateral, experimental, bedroom art rock.',
    bioDetail: [
      'The album was written by the project\'s songwriters: Kurt Vandusen, Steven Michael Leitelt, Aurora Gaea Behling, and Eden Osband, with lyrics by Behling, Leitelt, and Osband. It draws comparisons to Beach House, The Cure, and Yo La Tengo.',
      'Full lyrics to every track are published below.',
    ],
    releases: ['diamond-84-no-no-no-youre-the-algorithm'],
    links: [
      { label: 'Spotify', url: 'https://open.spotify.com/artist/3OrzwLhjwd93tgQ3P0eexx', verified: true },
      { label: 'Spotify — No No No You\'re the Algorithm', url: 'https://open.spotify.com/album/2vElLNgHjcd2YhwdjPFpr4', verified: true },
      { label: 'Apple Music', url: 'https://music.apple.com/us/artist/diamond-84/1412438706', verified: true },
      { label: 'YouTube (full album playlist)', url: 'https://www.youtube.com/playlist?list=OLAK5uy_k8uUDzg2NCRhqGK-21_7jED6rMJyheaP8', verified: true },
    ],
    // Kurt review items (research 2026-11-02): Amazon/CDBaby/Facebook/Jango/HearNow links
    // on the legacy site are unverified or dead (CD Baby retail store closed 2020;
    // diamond84.hearnow.com 404s; no attributable Facebook page found). Not published.
  },
  {
    slug: 'elvis-christ-snake',
    name: 'Elvis Christ Snake',
    bio: 'Elvis Christ Snake is a psychedelic and experimental rock project from Grand Rapids, Michigan, on the independent label Equational Sound — a project of Kurt Vandusen (music) and Steven Michael Leitelt (lyrics) who call their sound "ignorant bedroom art rock." The project released the single "That Fire" on January 15, 2018 and the ten-track album "Hey! Come Down from There" on February 27, 2018 — dreamy, brooding rock likened to Brian Eno, The Cure, Echo and the Bunnymen, Pixies, and Yo La Tengo.',
    releases: ['elvis-christ-snake-that-fire', 'elvis-christ-snake-hey-come-down-from-there'],
    links: [
      { label: 'Spotify', url: 'https://open.spotify.com/artist/1FetEBKaw7msN5FZ5bZseZ', verified: true },
      { label: 'Spotify — Hey! Come Down from There', url: 'https://open.spotify.com/album/4BNjGUYWxbAnmmhIFDHNNU', verified: true },
      { label: 'Spotify — That Fire (single)', url: 'https://open.spotify.com/album/3UZuaKvO8fd6FYZRgdkfdA', verified: true },
      { label: 'Apple Music', url: 'https://music.apple.com/us/artist/elvis-christ-snake/1337442047', verified: true },
      { label: 'YouTube', url: 'https://www.youtube.com/channel/UC3pbEpPgVES1SwPWkuVi4CQ', verified: true },
      { label: 'Facebook', url: 'https://www.facebook.com/elvischristsnake', verified: true },
    ],
    // Kurt review items: Bandcamp (elvischristsnake.bandcamp.com) no longer exists — the old
    // site's BUY NOW embed is dead. CD Baby store page redirects to login (store closed 2020).
  },
  {
    slug: 'st-buffalo-blue',
    name: 'St. Buffalo Blue',
    bio: 'St. Buffalo Blue is a psychedelic, shoegaze, and experimental electronic rock project from Grand Rapids, Michigan, on the independent label Equational Sound — a project of Kurt Vandusen (music) and Steven Michael Leitelt (lyrics) who describe their music simply as "bedroom art rock." Across two twelve-track albums — "Related to Such Pretty Dolls" (2007) and "Trismegistus" (2012) — the band worked a dreamy vein of art rock likened to Brian Eno, New Order, Radiohead, My Bloody Valentine, and The Cure.',
    releases: ['st-buffalo-blue-related-to-such-pretty-dolls', 'st-buffalo-blue-trismegistus'],
    links: [
      { label: 'Spotify', url: 'https://open.spotify.com/artist/6pcQh6rE2017PN9H3qlJ3R', verified: true },
      { label: 'Spotify — Related to Such Pretty Dolls', url: 'https://open.spotify.com/album/5HfnIrpPLAGrI9nFV6aVqx', verified: true },
      { label: 'Spotify — Trismegistus', url: 'https://open.spotify.com/album/1XZfckLVoPrOM8M0LbmTSz', verified: true },
      { label: 'Apple Music', url: 'https://music.apple.com/us/artist/st-buffalo-blue/264473076', verified: true },
      { label: 'YouTube', url: 'https://www.youtube.com/channel/UCJ99d0z1XfegJmGzOLBGj8A', verified: true },
      { label: 'Facebook', url: 'https://www.facebook.com/stbuffaloblue', verified: true },
    ],
    // Kurt review items: CD Baby store pages (store.cdbaby.com/cd/stbuffaloblue, /StBuffaloBlue1)
    // redirect to login — retail store closed 2020. No Bandcamp presence found. Spotify shows
    // "Related to Such Pretty Dolls" released Aug 13, 2007; CD Baby catalog record says Jan 1,
    // 2007 — discrepancy flagged for Kurt.
  },
  {
    slug: 'oh-blue',
    name: 'Oh, Blue',
    placeholder: true, // D9: placeholder page at launch; OQ-6 parked (bio/release data pending from Kurt)
    bio: 'Oh, Blue is a band from Grand Rapids, Michigan, on the independent label Equational Sound. New music is on the way — this page is a placeholder and will grow into a full band page when the first release is announced.',
    members: ['Eden Osband', 'Gia Paprika', 'Steven Michael', 'Kurt VanDusen'],
    guestNote: 'Guest appearances: Patti Sunshine.',
    releases: [],
    links: [],
  },
];
