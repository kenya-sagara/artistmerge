import type { NextConfig } from "next";

// Production deploys at custom domain https://artistmerge.jp/ (root path).
// No basePath needed for custom domain. Local dev also runs at root.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
