/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
    ],

    dangerouslyAllowSVG: true,
  },

  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;
