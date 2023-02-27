const withPWA = require("next-pwa");

module.exports = withPWA({
  webpack: (config) => {
    config.module.rules.push({
      test: /\.mp3$/,
      use: {
        loader: "url-loader",
      },
    });
    return config;
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
    env: {
      SERVICE_ID: "service_752pi9o",
      TEMPLATE_ID: "template_rt80c4h",
      USER_ID:"-I6TQziM-1vz_41vq",
    },

  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development",
  },
});
