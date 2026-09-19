import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: deploy được lên host tĩnh miễn phí (Cloudflare Pages, GitHub Pages, ...)
  output: "export",
  // next/image mặc định cần server để tối ưu ảnh — không có khi export tĩnh
  images: { unoptimized: true },
};

export default nextConfig;
