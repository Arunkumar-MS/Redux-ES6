var path = require("path");
var ROOT_PATH = path.resolve(__dirname);
module.exports = {
    entry: {
        app: [
            './components/index.js'
        ]
    },
    watch: true,
    output: {
        path: ROOT_PATH,
        filename: 'bundle.js',
        publicPath: '/assets/'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react']
            }
        }, {
            test: /\.json$/,
            loader: 'json-loader'
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            loaders: ["react-hot", "babel-loader"],
        }],
    },
    node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
}
