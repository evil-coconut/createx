const path = require('path');
const PugPlugin = require('pug-plugin');
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

const PATHS = {
  src: path.join(__dirname, './src'),
  dist: path.join(__dirname, './dist'),
};

module.exports = {
  entry: {
    index: './src/pug/index.pug',
    homepage: './src/pug/pages/homepage/homepage.pug'
  },
  output: {
    path: PATHS.dist,
    assetModuleFilename: pathData => {
      const filepath = path.dirname(pathData.filename).split('/').slice(1).join('/');
      return `${filepath}/[name][ext]`;
    },
    publicPath: './',
    clean: true,
  },
  plugins: [
    new PugPlugin({
      pretty: true, 
      js: {
        filename: 'js/[name].[contenthash:8].js',
      },
      css: {
        filename: 'css/[name].[contenthash:8].css',
      }
    })
  ],
  module: {
    rules: [
      {
        test: /.pug$/,
        loader: PugPlugin.loader,
      },
      {
        test: /\.(css|sass|scss)$/,
        use: [
          {loader: 'css-loader'},
          {loader: 'sass-loader'},
          {loader: 'sass-resources-loader',
            options: {
              resources: `${PATHS.src}/sass/_var.scss`,
            },
          },
        ],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        type: 'asset/resource',
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        type: 'asset',
      },
    ],
  },
  optimization: {
    minimizer: [
      "...",
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            plugins: [
              ["gifsicle", { interlaced: true }],
              ["jpegtran", { progressive: true }],
              ["optipng", { optimizationLevel: 5 }],
              [
                "svgo",
                {
                  plugins: [
                    {
                      name: "preset-default",
                      params: {
                        overrides: {
                          removeViewBox: false,
                          addAttributesToSVGElement: {
                            params: {
                              attributes: [
                                { xmlns: "http://www.w3.org/2000/svg" },
                              ],
                            },
                          },
                        },
                      },
                    },
                  ],
                },
              ],
            ],
          },
        },
      }),
    ],
  },
};