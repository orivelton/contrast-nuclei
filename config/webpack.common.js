const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
      main: './src/index.js'
    },
    output: {
        filename: 'js/[name].bundle.js',
        path: path.resolve(__dirname, '../build')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'img/[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
      new HtmlWebpackPlugin({ template: './src/index.html' })
    ]
};
