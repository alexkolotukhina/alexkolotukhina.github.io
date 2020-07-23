const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env = { mode: "development" }) => {
  const isProduction = env.mode === "production";
  return {
    mode: env.mode,
    entry: {
      app: "./src/index.js",
    },
    output: {
      filename: "[name].js",
      path: path.resolve(__dirname, "./dist"),
      publicPath: "/dist",
    },
    module: {
      rules: [
        { test: /\.js$/, exclude: /node_modules/, use: ["babel-loader"] },
        {
          test: /\.scss$/,
          use: [
            "style-loader",
            MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: { sourceMap: true },
            },
            {
              loader: "postcss-loader",
              options: {
                sourceMap: true,
                config: { path: "src/components/postcss.config.js" },
              },
            },
            {
              loader: "sass-loader",
              options: { sourceMap: true },
            },
          ],
        },
        {
          test: /\.css$/,
          use: [
            "style-loader",
            MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: { sourceMap: true },
            },
            {
              loader: "postcss-loader",
              options: {
                sourceMap: true,
                config: { path: "src/components/postcss.config.js" },
              },
            },
          ],
        },
      ],
    },
    devServer: {
      overlay: true,
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "[name].css",
      }),
    ],
  };
};
