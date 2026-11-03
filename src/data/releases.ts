// Release catalog — data straight from the CD Baby catalog record (harvested & verified
// 2026-11-02). Carries the catalog-note fields (UPC, ISRC, credits, genres) so every
// page and JSON-LD block renders from data.
//
// Royalty SPLIT PERCENTAGES are intentionally NOT published on the public site —
// composer/lyricist credits are public metadata; splits are business data. Flag for Kurt at review.
// "Heigira" spelling is authoritative (D17) even though CD Baby prints "Hegira" on Diamond 84 records.

export interface Track {
  no: number;
  title: string;
  duration: string;
  isrc?: string;
  composer?: string;
  lyricist?: string;
  instrumental?: boolean;
  note?: string;
}

export interface Release {
  id: string;
  title: string;
  artistName: string; // display name as released
  artistSlug?: string; // null for krtRa / Eden Oz (D17: no artist pages) and archive items
  type: 'album' | 'single' | 'archive';
  released: string; // ISO date
  releasedDisplay: string;
  upc?: string;
  genres: string[];
  mood?: string;
  soundsLike: string[];
  origin?: string;
  spotifyAlbum?: string; // full URL
  appleArtistId?: string;
  appleAlbumUrl?: string;
  cdbabyUrl?: string; // NOTE: CD Baby retail store closed 2020 — existing store pages redirect
                      // to login. Kept only when Kurt confirms a working URL; not rendered by default.
  youtubePlaylist?: string;
  tracks: Track[];
  archiveNote?: string;
}

const KURT = 'Kurt Fredrick Vandusen';
const LEITELT = 'Steven Michael Leitelt';

export const RELEASES: Release[] = [
  {
    id: 'diamond-84-no-no-no-youre-the-algorithm',
    title: "No No No You're the Algorithm",
    artistName: 'Diamond 84',
    artistSlug: 'diamond-84',
    type: 'album',
    released: '2018-07-12',
    releasedDisplay: 'July 12, 2018',
    upc: '192914596738',
    genres: ['Rock (Psychedelic)', 'Avant Garde (Experimental)'],
    mood: 'Dreamy',
    soundsLike: ['Beach House', 'The Cure', 'Yo La Tengo'],
    origin: 'Michigan, USA',
    spotifyAlbum: 'https://open.spotify.com/album/2vElLNgHjcd2YhwdjPFpr4',
    appleArtistId: '1412438706',
    appleAlbumUrl: 'https://music.apple.com/us/album/no-no-no-youre-the-algorithm/1412439374',
    youtubePlaylist: 'https://www.youtube.com/playlist?list=OLAK5uy_k8uUDzg2NCRhqGK-21_7jED6rMJyheaP8',
    tracks: [
      { no: 1, title: 'Machinations', duration: '02:56', isrc: 'ushm21890520', composer: `${KURT}, ${LEITELT}`, lyricist: 'Aurora Gaea Behling, Steven Michael Leitelt' },
      { no: 2, title: 'Above Solaris', duration: '03:31', isrc: 'ushm21890521', composer: `${KURT}, ${LEITELT}`, lyricist: 'Aurora Gaea Behling, Steven Michael Leitelt' },
      { no: 3, title: "Siren's Call", duration: '04:44', isrc: 'ushm21890522', composer: `${KURT}, Eden Osband, ${LEITELT}`, lyricist: 'Eden Osband' },
      { no: 4, title: 'New Strings Feed off Dogs', duration: '01:41', isrc: 'ushm21890523', instrumental: true, composer: `Eden Osband, ${LEITELT}` },
      { no: 5, title: "I've Done Some Waking up in My Room", duration: '03:05', isrc: 'ushm21890524', composer: `${KURT}, ${LEITELT}`, lyricist: LEITELT },
      { no: 6, title: 'Ambivalence', duration: '02:13', isrc: 'ushm21890525', composer: `${KURT}, ${LEITELT}`, lyricist: LEITELT },
      { no: 7, title: 'Merry Marry', duration: '02:26', isrc: 'ushm21890526', composer: 'Aurora Gaea Behling, Kurt Fredrick Vandusen, Steven Michael Leitelt', lyricist: 'Aurora Gaea Behling' },
      { no: 8, title: 'Down with You', duration: '02:59', isrc: 'ushm21890527', composer: `${KURT}, ${LEITELT}`, lyricist: 'Aurora Gaea Behling, Steven Michael Leitelt' },
    ],
  },
  {
    id: 'elvis-christ-snake-that-fire',
    title: 'That Fire',
    artistName: 'Elvis Christ Snake',
    artistSlug: 'elvis-christ-snake',
    type: 'single',
    released: '2018-01-15',
    releasedDisplay: 'January 15, 2018',
    upc: '191924787327',
    genres: ['Rock (Psychedelic)', 'Rock (Post-Rock/Experimental)'],
    mood: 'Brooding',
    soundsLike: ['Echo and the Bunnymen', 'Pixies', 'Yo La Tengo'],
    spotifyAlbum: 'https://open.spotify.com/album/3UZuaKvO8fd6FYZRgdkfdA',
    appleArtistId: '1337442047',
    appleAlbumUrl: 'https://music.apple.com/us/album/that-fire-single/1337442046',
    tracks: [
      // Kurt ruled 2026-11-02: single credits = album version credits.
      { no: 1, title: 'That Fire', duration: '03:38', isrc: 'uscgh1829054', composer: KURT, lyricist: LEITELT },
    ],
  },
  {
    id: 'elvis-christ-snake-hey-come-down-from-there',
    title: 'Hey! Come Down from There',
    artistName: 'Elvis Christ Snake',
    artistSlug: 'elvis-christ-snake',
    type: 'album',
    released: '2018-02-27',
    releasedDisplay: 'February 27, 2018',
    upc: '191061146353',
    genres: ['Rock (Psychedelic)', 'Avant Garde (Experimental)'],
    mood: 'Dreamy',
    soundsLike: ['Brian Eno', 'The Cure', 'Yo La Tengo'],
    spotifyAlbum: 'https://open.spotify.com/album/4BNjGUYWxbAnmmhIFDHNNU',
    appleArtistId: '1337442047',
    appleAlbumUrl: 'https://music.apple.com/us/album/hey-come-down-from-there/1355240965',
    // Legacy CD Baby store URL (store.cdbaby.com/cd/elvischristsnake2) is dead — retail store closed 2020.
    tracks: [
      { no: 1, title: 'Outside', duration: '03:32', isrc: 'uscgj1814947', composer: KURT, lyricist: LEITELT },
      { no: 2, title: 'That Fire', duration: '03:39', isrc: 'uscgj1814948', composer: KURT, lyricist: LEITELT },
      { no: 3, title: 'Maybe Bored?', duration: '03:58', isrc: 'uscgj1814949', composer: KURT, lyricist: LEITELT },
      { no: 4, title: 'The Idiot Performs for the Space People', duration: '02:28', isrc: 'uscgj1814950', composer: KURT, lyricist: LEITELT },
      { no: 5, title: 'Oort Cloud', duration: '00:38', isrc: 'uscgj1814951', instrumental: true, composer: `${KURT}, ${LEITELT}` },
      { no: 6, title: 'Embers', duration: '04:10', isrc: 'uscgj1814952', composer: KURT, lyricist: LEITELT },
      { no: 7, title: "Shakin' in the 9th House", duration: '00:53', isrc: 'uscgj1814953', instrumental: true, composer: `${KURT}, ${LEITELT}` },
      { no: 8, title: 'Recall This', duration: '02:30', isrc: 'uscgj1814954', composer: KURT, lyricist: LEITELT },
      { no: 9, title: 'What Channel Are You?', duration: '01:35', isrc: 'uscgj1814955', composer: KURT, lyricist: LEITELT },
      { no: 10, title: 'Head Noise', duration: '02:22', isrc: 'uscgj1814956', composer: KURT, lyricist: LEITELT },
    ],
  },
  {
    id: 'krtra-xiv',
    title: 'XIV',
    artistName: 'Krtra',
    artistSlug: undefined, // D17: catalog page only, no artist page
    type: 'album',
    released: '2020-05-22',
    releasedDisplay: 'May 22, 2020',
    upc: '195079631436',
    genres: ['Electronic (Ambient)', 'Avant Garde (Electronic Avant-Garde)'],
    mood: 'Dreamy',
    soundsLike: ['Brian Eno', 'Kraftwerk', 'Phillip Glass'],
    spotifyAlbum: 'https://open.spotify.com/album/6xptQddoGydMTA6ABv7jvB',
    appleArtistId: '1520714279',
    tracks: [
      { no: 1, title: 'Mystic', duration: '01:52', isrc: 'ushm82026110', instrumental: true, composer: KURT },
      { no: 2, title: 'Love One Another', duration: '01:30', isrc: 'ushm82026111', instrumental: true, composer: KURT },
      { no: 3, title: 'Relaxing into Sleep', duration: '01:07', isrc: 'ushm82026112', instrumental: true, composer: KURT },
      { no: 4, title: 'Strange Thing', duration: '01:04', isrc: 'ushm82026113', instrumental: true, composer: KURT },
      { no: 5, title: 'Incense Drifts', duration: '01:40', isrc: 'ushm82026114', instrumental: true, composer: KURT },
    ],
  },
  {
    id: 'eden-oz-bars-and-boundaries',
    title: 'Bars & Boundaries',
    artistName: 'Eden Oz',
    artistSlug: undefined, // D17: catalog page only, no artist page
    type: 'album',
    released: '2024-01-29',
    releasedDisplay: 'January 29, 2024',
    upc: '198026852144',
    genres: ['Pop (with Electronic Production)', 'Easy Listening (Adult Contemporary)'],
    mood: 'Lyrical',
    soundsLike: ['Dresden Dolls', 'Perfume Genius', 'Regina Spektor'],
    spotifyAlbum: 'https://open.spotify.com/album/5PWm0mimLdIDrL0a13hAk1',
    appleArtistId: '1723547139',
    tracks: [
      { no: 1, title: 'Retrograde', duration: '04:32', isrc: 'usy282321915', composer: 'Omega Ambrosia Heigira Eden Osband', lyricist: 'Omega Ambrosia Heigira Eden Osband' },
      { no: 2, title: 'Bars', duration: '03:34', isrc: 'usy282321916', composer: 'Omega Ambrosia Heigira Eden Osband', lyricist: 'Omega Ambrosia Heigira Eden Osband' },
      { no: 3, title: 'Rage Anthem', duration: '02:53', isrc: 'usy282321917', composer: 'Omega Ambrosia Heigira Eden Osband', lyricist: 'Omega Ambrosia Heigira Eden Osband' },
      { no: 4, title: 'Boundaries', duration: '02:23', isrc: 'usy282321918', composer: 'Omega Ambrosia Heigira Eden Osband', lyricist: 'Omega Ambrosia Heigira Eden Osband' },
      { no: 5, title: 'Corruption Waltz', duration: '04:45', isrc: 'usy282321919', composer: 'Omega Ambrosia Heigira Eden Osband', lyricist: 'Omega Ambrosia Heigira Eden Osband' },
      { no: 6, title: 'Strife Song', duration: '05:57', isrc: 'usy282321920', composer: 'Omega Ambrosia Heigira Eden Osband', lyricist: 'Omega Ambrosia Heigira Eden Osband' },
      { no: 7, title: 'Ash and Dust', duration: '03:51', isrc: 'usy282321921', composer: 'Omega Ambrosia Heigira Eden Osband', lyricist: 'Omega Ambrosia Heigira Eden Osband' },
    ],
  },
  {
    id: 'st-buffalo-blue-related-to-such-pretty-dolls',
    title: 'Related to Such Pretty Dolls',
    artistName: 'St. Buffalo Blue',
    artistSlug: 'st-buffalo-blue',
    type: 'album',
    released: '2007-01-01',
    releasedDisplay: 'January 1, 2007',
    upc: '837101383608',
    genres: ['Rock (Psychedelic)', 'Electronic (Experimental)'],
    mood: 'Dreamy',
    soundsLike: ['Brian Eno', 'New Order', 'Radiohead', 'The Cure', 'TV on the Radio'],
    spotifyAlbum: 'https://open.spotify.com/album/5HfnIrpPLAGrI9nFV6aVqx',
    appleArtistId: '264473076',
    appleAlbumUrl: 'https://music.apple.com/us/album/related-to-such-pretty-dolls/264473073',
    // Legacy CD Baby store URL (store.cdbaby.com/cd/stbuffaloblue) is dead. Date note: CD Baby
    // catalog record says released Jan 1, 2007; Spotify shows Aug 13, 2007 — flagged for Kurt.
    tracks: [
      { no: 1, title: 'Rise On', duration: '03:28', isrc: 'ushm90780829', composer: KURT, lyricist: LEITELT },
      { no: 2, title: 'Aurelius', duration: '03:53', isrc: 'ushm90780830', composer: KURT, lyricist: LEITELT },
      { no: 3, title: 'Buffalo Dance', duration: '02:25', isrc: 'ushm90780831', instrumental: true, composer: `${KURT}, ${LEITELT}` },
      { no: 4, title: 'Woes Of A Plant Collector', duration: '03:46', isrc: 'ushm90780832', composer: KURT, lyricist: LEITELT },
      { no: 5, title: 'Crystallized', duration: '02:58', isrc: 'ushm90780833', composer: KURT, lyricist: LEITELT, note: 'Was offered as a free MP3 download on the legacy site.' },
      { no: 6, title: 'Myriads Of Myriads', duration: '01:58', isrc: 'ushm90780834', instrumental: true, composer: `${KURT}, ${LEITELT}` },
      { no: 7, title: 'Detroit To Manchester', duration: '03:08', isrc: 'ushm90780835', composer: KURT, lyricist: LEITELT },
      { no: 8, title: 'Our King Plasma', duration: '02:15', isrc: 'ushm90780836', instrumental: true, composer: `${KURT}, ${LEITELT}` },
      { no: 9, title: 'Monkey Queen', duration: '02:30', isrc: 'ushm90780837', composer: KURT, lyricist: LEITELT },
      { no: 10, title: 'Patterned Out', duration: '03:48', isrc: 'ushm90780838', composer: KURT, lyricist: LEITELT },
      { no: 11, title: 'American Love', duration: '02:31', isrc: 'ushm90780839', composer: KURT, lyricist: LEITELT },
      { no: 12, title: 'It Breaks All', duration: '04:04', isrc: 'ushm90780840', instrumental: true, composer: `${KURT}, ${LEITELT}` },
    ],
  },
  {
    id: 'st-buffalo-blue-trismegistus',
    title: 'Trismegistus',
    artistName: 'St. Buffalo Blue',
    artistSlug: 'st-buffalo-blue',
    type: 'album',
    released: '2012-08-08',
    releasedDisplay: 'August 8, 2012',
    upc: '885767180970',
    genres: ['Rock (Shoegaze)', 'Electronic (Experimental)'],
    mood: 'Dreamy',
    soundsLike: ['Brian Eno', 'My Bloody Valentine', 'Pixies'],
    spotifyAlbum: 'https://open.spotify.com/album/1XZfckLVoPrOM8M0LbmTSz',
    appleArtistId: '264473076',
    appleAlbumUrl: 'https://music.apple.com/us/album/trismegistus/551679743',
    // Legacy CD Baby store URL (store.cdbaby.com/cd/StBuffaloBlue1) is dead.
    tracks: [
      { no: 1, title: 'Whispers from the Outer', duration: '02:53', isrc: 'ushm81253049', composer: KURT, lyricist: LEITELT },
      { no: 2, title: 'Your Golden Goals', duration: '04:36', isrc: 'ushm81253050', composer: KURT, lyricist: LEITELT },
      { no: 3, title: "What's the Allure?", duration: '04:40', isrc: 'ushm81253051', composer: KURT, lyricist: LEITELT },
      { no: 4, title: 'The Forever Lullaby', duration: '03:53', isrc: 'ushm81253052', composer: KURT, lyricist: LEITELT },
      { no: 5, title: "Mr. Gromble's Conversation", duration: '03:53', isrc: 'ushm81253053', composer: KURT, lyricist: LEITELT },
      { no: 6, title: 'Behold a Blue Buffalo', duration: '02:11', isrc: 'ushm81253054', instrumental: true, composer: `${KURT}, ${LEITELT}` },
      { no: 7, title: 'Wire to Wire', duration: '02:51', isrc: 'ushm81253055', composer: KURT, lyricist: LEITELT },
      { no: 8, title: 'Trigger Nap', duration: '03:56', isrc: 'ushm81253056', composer: KURT, lyricist: LEITELT },
      { no: 9, title: 'Lapis Lazuli', duration: '01:08', isrc: 'ushm81253057', instrumental: true, composer: `${KURT}, ${LEITELT}` },
      { no: 10, title: 'Rock Rock Roll', duration: '01:53', isrc: 'ushm81253058', composer: KURT, lyricist: KURT },
      { no: 11, title: 'Hounds', duration: '02:19', isrc: 'ushm81253059', composer: KURT, lyricist: LEITELT },
      { no: 12, title: 'Translations', duration: '03:18', isrc: 'ushm81253060', composer: KURT, lyricist: LEITELT },
    ],
  },
];

// Legacy free-MP3 downloads from the old Google Sites page. These were never CD Baby
// releases; the original MP3 files/links were lost with the old site's embeds —
// listed as archive items per the ratified design. Recovery of files: ask Kurt (review item).
export const ARCHIVE_ITEMS = [
  { title: 'Crystallized', artistName: 'St. Buffalo Blue', note: 'Free MP3 download on the legacy site; official release on "Related to Such Pretty Dolls".' },
  { title: 'Sun Shines Today', artistName: 'Dr. Fatty', note: 'Legacy free MP3 download.' },
  { title: 'NormanMasheene vs. Dr. Fatty', artistName: 'krtRa', note: 'Legacy free MP3 download.' },
  { title: 'Dub Radio Edit', artistName: 'NormanMasheene', note: 'Legacy free MP3 download.' },
];

export function releasesForArtist(slug: string): Release[] {
  return RELEASES.filter((r) => r.artistSlug === slug);
}
