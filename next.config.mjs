/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      // TODO: Replace with the production CDN hostname when image hosting is configured.
      { protocol: 'https', hostname: 'cdn.example.com' },
    ],
  },
}

export default nextConfig
