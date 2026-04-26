import type { NextConfig } from "next";

// GitHub Pages deployment lives at https://sagbrain.github.io/artistmerge/
// When building inside GitHub Actions, prepend the repo path; locally we keep paths at root.
const isGhActions = process.env.GITHUB_ACTIONS === "true";
const repoBase = "/artistmerge";

const basePath = isGhActions ? repoBase : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
