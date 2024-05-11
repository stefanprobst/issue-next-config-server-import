import createMDX from "@next/mdx";

if (typeof document !== "undefined") {
  throw new Error("Reading next.config.js on the client.");
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["mdx", "tsx"],
};

const withMDX = createMDX({
  options: {},
});

export default withMDX(nextConfig);
