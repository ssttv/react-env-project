const path = require("path");
const App = require(./App);

module.exports = {
  context: __dirname,
  entry: "./src/scrpt/ClientApp.jsx",
  devtool: "cheap-eval-source-stash-map",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".js", ".jsx", ".json" ]
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  module:{
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader"
      }
    ]
  }
};
