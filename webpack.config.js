const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin


module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js') //bundle or what ever u want
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name][contenthash].js", //it allows to change entry name whtever u want & will create it automatically
        clean: true,
        assetModuleFilename: "[name][ext]"
    },
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
            port: 3000,
            open: true,
            hot: true,
            compress: true,
            historyApiFallback: true,

    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],

            },
            {
                test: /\.js$/,
                exclude: /node_nodules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env'],
                    }
                }
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource"
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Webpack App",
            filename: "index.html",
            template: "src/template.html" //it takes tmplt.html & creates indx.html by this
        }),
       // new BundleAnalyzerPlugin(), //project map
    ]
}