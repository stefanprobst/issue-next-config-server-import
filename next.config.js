import createMDX from "@next/mdx";
import { config as mdxConfig } from "./config/mdx.config.js";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["mdx", "tsx"],
};

const withMDX = createMDX({
  options: {
    rehypePlugins: mdxConfig.rehypePlugins,
  },
});

export default withMDX(nextConfig);
