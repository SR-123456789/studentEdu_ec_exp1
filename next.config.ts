import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */ images: {
    domains: ["shop.r10s.jp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "thumbnail.image.rakuten.co.jp",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
