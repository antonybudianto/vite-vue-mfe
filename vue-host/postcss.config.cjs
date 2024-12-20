module.exports = {
  plugins: {
    "@mekari/pixel3-postcss": {
      include: ["./src/**/*.{js,ts,vue}"],
      replaceConfig: ["include"]
    }
  }
};
