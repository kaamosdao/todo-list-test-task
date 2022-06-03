const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
// const CopyPlugin = require('copy-webpack-plugin');

const mode = process.env.NODE_ENV || 'development';

module.exports = {
  mode,
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  entry: './src/index.tsx',
  output: {
    path: path.join(__dirname, 'dist', 'public'),
    clean: true,
  },
  devServer: {
    port: 4242,
  },
  devtool: mode === 'development' ? 'cheap-module-source-map' : 'source-map',
  plugins: [
    new webpack.ProvidePlugin({
      React: 'react',
    }),
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
    new MiniCssExtractPlugin(),
    // new CopyPlugin({
    //   patterns: [
    //     {
    //       from: path.resolve(__dirname, 'src/assets/img'),
    //       to: path.resolve(__dirname, 'dist/public/assets/img'),
    //     },
    //   ],
    //   options: {
    //     concurrency: 100,
    //   },
    // }),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript',
            ],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        type: 'asset',
      },
    ],
  },
  optimization: {
    minimizer: [
      '...',
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            plugins: [
              [
                'svgo',
                {
                  plugins: [
                    {
                      name: 'preset-default',
                      params: {
                        overrides: {
                          convertShapeToPath: {
                            convertArcs: true,
                          },
                          convertPathData: false,
                        },
                      },
                    },
                    {
                      name: 'removeViewBox',
                      active: false,
                    },
                    {
                      name: 'addAttributesToSVGElement',
                      params: {
                        attributes: [{ xmlns: 'http://www.w3.org/2000/svg' }],
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
