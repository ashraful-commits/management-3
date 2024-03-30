/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "**",
      },
      {
        protocol: "http",
        hostname: "res.cloudinary.com",
        pathname: "**",
      },
    ],
  },

  reactStrictMode: true,
  experimental: {
    // appDir: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {},
  transpilePackages: [
    "@react-email/components",
    "@react-email/render",
    "@react-email/html",
  ],
}

export default nextConfig
