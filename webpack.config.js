/* eslint-disable no-useless-escape */
/* eslint-disable no-undef */
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const DotenvWebpack = require('dotenv-webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const Dotenv = require('dotenv');
const packageJson = require("./package.json");

module.exports = (env, argv) => {

  const MODE = argv.mode;
  const ENV = argv.env;
  // const DOT_ENV_PATH = `.env`;
  // const { parsed: DOTENV } = Dotenv.config({ path: DOT_ENV_PATH });

  const CSS_TO_JS = true;
  const VERSION = packageJson.version;
  const ASSETS_VERSION = `v${VERSION.split(".").slice(0, 1).join(".")}`;
  const CSS_VERSION = `v${VERSION.split(".").slice(0, 2).join(".")}`;

  const innerTags = { headTags: [], bodyTags: [] };

  let config = {
    mode: MODE,
    entry: {
      app: `./src/index.js`,
    },
    devtool: MODE === 'development' ? 'eval' : 'source-map',
    output: {
      filename: MODE === 'development' ? `bandle-[name].js` : `bandle-[name].${VERSION}.js`,
      path: path.resolve(__dirname, `./dist`),
      publicPath: '/'
    },
    target: MODE === 'development' ? "web" : "browserslist",
    devServer: {
      contentBase: path.resolve(__dirname, `./dist`),
      port: parseInt(ENV.port),
      watchContentBase: true,
      historyApiFallback: true,
      hot: true,
      allowedHosts: [],
    },
    plugins: [
      // new DotenvWebpack({
      //   path: DOT_ENV_PATH,
      //   defaults: true
      // }),
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: MODE === 'development' ? `bandle-[name].css` : `bandle-[name].${CSS_VERSION}.css`
      }),
      new HtmlWebpackPlugin({
        // title: DOTENV.TITLE,
        template: "./public/index.ejs",
        filename: "./index.html",
        favicon: `./public/favicon/favicon.ico`,
        headTags: innerTags.headTags.filter(a => !!a).join("\n"),
        bodyTags: innerTags.bodyTags.filter(a => !!a).join("\n"),
      }),
      new CopyWebpackPlugin({
        patterns: [
          { from: `./public/_copy`, to: "./" },
          { from: `./public/favicon`, to: "favicon" }
        ],
      })
    ],
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: { loader: 'babel-loader' }
        },
        {
          test: /\.ejs$/,
          use: {
            loader: 'ejs-loader',
            options: {
              esModule: false
            }
          }
        },
        {
          test: /\.(png|jpg|jpeg)$/,
          include: /\/public\/assets\/imgs\//,
          use: {
            loader: 'file-loader',
            options: {
              esModule: false,
              outputPath: 'assets/images',
              name: `[name].${ASSETS_VERSION}.[ext]`
            }
          }
        },
        {
          test: /\.(svg)$/,
          include: /\/public\/assets\/icons\//,
          use: ['@svgr/webpack'],
        },
        {
          test: /\.(woff|woff2|ttf|eot)$/,
          // include: /\/public\/assets\/(fivestarbot|reviewhustlers)\/fonts\//,
          use: {
            loader: 'file-loader',
            options: {
              outputPath: 'assets/fonts',
              name: '[name].[ext]',
              esModule: false
            }
          }
        },
        {
          // For pure CSS (without CSS modules)
          test: /\.css$/,
          use: [
            CSS_TO_JS ? { loader: "style-loader" } : MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
            }
          ]
        },
        {
          // For pure CSS (without CSS modules)
          test: /\.pure\.(sc|sa|c)ss$/,
          use: [
            CSS_TO_JS ? { loader: "style-loader" } : MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                importLoaders: 2,
              }
            },
            {
              loader: "postcss-loader",
            },
            {
              loader: "sass-loader"
            }
          ]
        },
        {
          test: /\.module\.(sc|sa|c)ss$/,
          use: [
            CSS_TO_JS ? { loader: "style-loader" } : MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                importLoaders: 2,
                modules: {
                  localIdentName: '[local]_[hash:base64:5]'
                },
              }
            },
            {
              loader: "postcss-loader",
            },
            {
              loader: "sass-loader"
            }
          ]
        }
      ]
    },
    optimization: {
      minimize: true,
      minimizer: [
        `...`,
        new CssMinimizerPlugin(),
      ],
    }
  };
  return config;
};
