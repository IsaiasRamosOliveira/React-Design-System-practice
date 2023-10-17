/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  images: {
    sassOptions: {
      includePaths: [path.join(__dirname, "styles")],
    },
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.google.com",
        port: "",
        pathname: "/*",
      },
    ],
  },
};

module.exports = nextConfig;
