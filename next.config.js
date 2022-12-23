const { withSentryConfig } = require("@sentry/nextjs");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
        port: "",
        // pathname: "/account123/**",
      },
    ],
  },
  sentry: {
    hideSourceMaps: true,
  },
};

const sentryWebpackPluginOptions = {
  silent: true,
};

module.exports = withSentryConfig(nextConfig, sentryWebpackPluginOptions);
