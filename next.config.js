const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    sassOptions: {
        includePaths: [path.join(__dirname, "src"), path.join(__dirname, "src/styles")],
    },
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        return config;
    },
};

module.exports = nextConfig;
