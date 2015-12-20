var path = require('path');
module.exports = {
	entry: "./src/js/app.jsx",
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: "/assets/",
		filename: "bundle.js"
	},
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
	module: {
		loaders: [
			{ test: /\.html$/, loader: "ngtemplate?relativeTo=" + __dirname + "/!html" },
			{ test: /\.css$/, loader: "style-loader!css-loader" },        
			{
				test: /\.less$/,
				loader: "style!css!less"
	        },
            {
                test: /\.jsx?$/,
                loader: 'jsx-loader?insertPragma=React.DOM&harmony',
                //include: "./src/js/app.jsx"
            }
		]
	},
	devServer: {
        port: 8088
    }
};
