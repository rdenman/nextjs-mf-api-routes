import NextFederationPlugin from "@module-federation/nextjs-mf";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  webpack(config) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "nextjs-mf-api-routes",
        filename: "static/chunks/remoteEntry.js",
      })
    );

    return config;
  },
};

export default nextConfig;
