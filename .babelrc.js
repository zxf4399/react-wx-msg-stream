const isDev = process.env.NODE_ENV === "development";

module.exports = function (api) {
  api.cache.using(() => isDev);

  return {
    presets: [
      [
        "@babel/preset-env",
        {
          targets: {
            node: "current",
          },
        },
      ],
      [
        "@babel/preset-react",
        {
          runtime: "automatic",
        },
      ],
      "@babel/preset-typescript",
    ],
    plugins: [isDev && "react-refresh/babel"].filter(Boolean),
  };
};
