const webpack = require("webpack");

module.exports = {
  webpack: {
    configure: {
      module: {
        rules: [
          {
            type: "javascript/auto",
            test: /\.mjs$/,
            include: /node_modules/,
          },
        ],
      },
    },
    plugins: {
      add: [
        new webpack.ProvidePlugin({
          process: "process/browser",
        }),
      ],
    },
  },
};
