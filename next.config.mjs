/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true }, // required for static export; we ship pre-optimized assets
  trailingSlash: true,           // stable URLs for a static host
};
export default nextConfig;
