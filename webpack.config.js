const path = require('path');
const fs = require('fs');

// Uncomment to separate js bundle in individual files.
// function generateEntries(entryPointsDir = '') {
// 	const entries = {};
// 	const files = fs.readdirSync(entryPointsDir);

// 	files.forEach(file => {
// 		if (
// 			file.endsWith('.ts') ||
// 			file.endsWith('.js') ||
// 			file.endsWith('.tsx') ||
// 			file.endsWith('.jsx')
// 		) {
// 			const entryName = path.basename(file, path.extname(file));
// 			entries[entryName] = path.resolve(__dirname, entryPointsDir, file);
// 		}
// 	});

// 	return entries;
// }

/** @type {import('webpack').Configuration} */
const config = {
	entry: './src/app.ts',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'app.js',
		clean: true,
	},
	// Uncomment to separate js bundle in individual files.
	// entry: generateEntries('./src/app/'),
	// output: {
	// 	path: path.resolve(__dirname, 'build'),
	// 	filename: '[name].js',
	// 	clean: true,
	// },
	devtool: process.env.NODE_ENV === 'production' ? false : 'inline-source-map',
	mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: 'ts-loader',
			},
			{
				test: /\.(js|jsx)$/,
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
		],
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx'],
	},
};

module.exports = config;
