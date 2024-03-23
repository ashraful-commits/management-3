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
    ],
  },

  reactStrictMode: true,
  experimental: {
    // appDir: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    // serverComponentsExternalPackages: [
    //   "@react-email/components",
    //   "@react-email/render",
    //   "@react-email/html",
    // ],
  },
  transpilePackages: [
    "@react-email/components",
    "@react-email/render",
    "@react-email/html",
  ],
}

export default nextConfig
