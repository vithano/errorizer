/* eslint-disable */
const { join } = require("path");
const withImages = require("next-images");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // migrated from next-transpile-modules
  // https://github.com/martpie/next-transpile-modules/releases/tag/the-end
  transpilePackages: ["@fullpower-stack/ui"],

  // https://nextjs.org/docs/advanced-features/output-file-tracing#caveats
  // https://github.com/vercel/turbo/blob/main/examples/with-docker/apps/web/next.config.js
};

const standaloneConfig = process.env.STANDALONE_BUILD
  ? {
      output: "standalone",
      experimental: {
        // this includes files from the monorepo base two directories up
        outputFileTracingRoot: join(__dirname, "../../"),
      },
    }
  : {};

module.exports = { ...nextConfig, ...standaloneConfig, ...withImages() };
