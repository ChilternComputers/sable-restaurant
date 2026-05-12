/** Local self-hosted hero images (formerly Unsplash hotlinks) */
export const IMAGES = {
  hero: "/images/unsplash/1414235077428-338989a2e8c0.webp",
  privateDining: "/images/unsplash/1517248135467-4c7edcad34c4.webp",
  reservationCTA: "/images/unsplash/1466978913421-dad2ebd01d17.webp",
} as const;

/**
 * Kept for callsite compatibility — images are now self-hosted, so width /
 * quality / height hints are ignored and the local asset path is returned
 * as-is. The browser handles scaling via CSS / object-fit.
 */
export function unsplash(
  path: string,
  _width?: number,
  _opts?: { height?: number; quality?: number },
): string {
  return path;
}

/**
 * Kept for callsite compatibility. Local images have a single high-res
 * source, so the srcset just announces the natural width as 1920w —
 * the browser will pick this entry and CSS handles the scaling down.
 */
export function unsplashSrcSet(
  path: string,
  _widths: number[],
  _opts?: { quality?: number },
): string {
  return `${path} 1920w`;
}
