const path = require('path');
const APP_PATH = path.resolve(__dirname, '../src');
const DIST_PATH = path.resolve(__dirname, '../dist');
module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: 'js/[name].[chunkhash].js',
        path: DIST_PATH
    },
    module: {
        rules: [
            {
                test: /\.js?$/,    //对于js使用babel编译成es5
                use: "babel-loader",
                include: APP_PATH
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader',],
            },
            {
                test: /\.less$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    {
                        loader: "postcss-loader",//自动加前缀
                        options: {
                            plugins: [
                                require('autoprefixer')({
                                    overrideBrowserslist: ['last 10 version']
                                })
                            ]
                        }
                    },
                    { loader: "less-loader" }
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                  loader: 'url-loader',
                  options: {
                    publicPath: '/',
                    name: "images/[name].[ext]",
                    limit: 1000  
                  }
                }]
              },
              {
                test: /\.(woff|svg|eot|woff2|tff)$/,
                use: 'url-loader',
                exclude: /node_modules/
              }
     
        ]
    }
};