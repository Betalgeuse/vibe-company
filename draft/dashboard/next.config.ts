import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  // Turbopack root를 현재 dashboard 디렉토리로 설정
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
