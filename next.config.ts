import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // 👈 enables static export (replaces `next export`)
  images: {
    unoptimized: true, // required for GitHub Pages, since no Node image optimizer runs there
  },
  basePath: "/alephtavfusions", // 👈 your repository name (must match exactly)
  assetPrefix: "/alephtavfusions/",
  trailingSlash: true, // ensures correct relative path resolution for static assets
};

export default nextConfig;
