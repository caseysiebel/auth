const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
    entry: path.join(__dirname, '/client/src/app.js'),
    output: {
        path: path.join(__dirname, '/client/dist/js'),
        filename: 'app.js',
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                include: path.join(__dirname, '/client/src'),
                loader: 'babel-loader',
                options: {
                    presets: ["react", "es2015", 'stage-0']
                }
            }
        ]
    },
    /*
	plugins: [
		//new webpack.optimize.UglifyJsPlugin(),
		new ExtractTextPlugin('style.css')
	],
    */
	devServer: {
		historyApiFallback: true
	},
    watch: true
};
