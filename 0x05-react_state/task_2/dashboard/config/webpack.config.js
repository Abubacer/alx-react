const path = require('path');

module.exports = {
	mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve('./dist')
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                use: [
					'file-loader',
					{
						loader: 'image-webpack-loader',
						options: {
							bypassOnDebug: true,
							disable: true
						},
					},
				],
            },
            {
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},        
        ],
    },
	resolve: {
		extensions: ['*', '.js', '.jsx'],
	},
	devServer: {
		hot: true,
		static: path.resolve('./dist'),
		compress: true,
		port: 8564,
	},
};
