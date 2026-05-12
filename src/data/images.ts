/** Unsplash photo IDs used for section backgrounds */
export const IMAGES = {
  hero: "photo-1414235077428-338989a2e8c0",
  privateDining: "photo-1517248135467-4c7edcad34c4",
  reservationCTA: "photo-1466978913421-dad2ebd01d17",
} as const;

/**
 * Build a responsive Unsplash URL from a photo ID.
 * Usage: unsplash(IMAGES.hero, 1920)
 *        unsplash(IMAGES.hero, 1920, { height: 1080, quality: 45 })
 */
export function unsplash(
  photoId: string,
  width: number,
  opts?: { height?: number; quality?: number },
): string {
  const q = opts?.quality ?? 75;
  let url = `https://images.unsplash.com/${photoId}?w=${width}&fit=crop&fm=webp&q=${q}`;
  if (opts?.height) url += `&h=${opts.height}`;
  return url;
}

/** Generate a srcSet string for responsive images */
export function unsplashSrcSet(
  photoId: string,
  widths: number[],
  opts?: { quality?: number },
): string {
  return widths
    .map((w) => `${unsplash(photoId, w, opts)} ${w}w`)
    .join(", ");
}
