// Normalized base path for link joining.
// import.meta.env.BASE_URL is '/' at a domain root, so naive joins like
// `${BASE_URL}/artists/` produce '//artists/' — a protocol-relative URL that
// browsers resolve to http://artists/. Normalize once here: strip the trailing
// slash (unless it's just '/'), then always join as `${BASE}/path/`.
export const BASE: string =
  import.meta.env.BASE_URL === '/' ? '' : import.meta.env.BASE_URL.replace(/\/+$/, '');
