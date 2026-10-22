import type { CSSProperties } from 'react';

/**
 * Static-export image with an automatic WebP source.
 *
 * The project ships pre-generated `.webp` siblings next to each `.jpg/.png`
 * (see scripts). We serve WebP first via <picture>, falling back to the
 * original for older browsers. next/image is disabled under `output: 'export'`,
 * so this is the lightest way to get modern formats + lazy loading + no CLS.
 */
export function Img({
  src,
  alt,
  className = '',
  loading = 'lazy',
  fetchPriority,
  sizes,
  style,
}: {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  fetchPriority?: 'high' | 'low' | 'auto';
  sizes?: string;
  style?: CSSProperties;
}) {
  const webp = src.replace(/\.(jpe?g|png)$/i, '.webp');
  return (
    <picture className="contents">
      {webp !== src && <source srcSet={webp} type="image/webp" />}
      <img
        src={src}
        alt={alt}
        className={className}
        loading={loading}
        decoding="async"
        fetchPriority={fetchPriority}
        sizes={sizes}
        style={style}
      />
    </picture>
  );
}
