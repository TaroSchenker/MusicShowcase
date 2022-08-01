const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');




const config = {
    mode: 'none',
    plugins: [
        new HtmlWebPackPlugin({
            template: path.join(__dirname, "../public/index.html")
        })
    ],
    module: {
        rules: [
            // specific instructions for each helper
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }, 
            // transpile JavaScript files
            {
              test: /\.css$/,
              use: ['style-loader', 'css-loader'],
            }, // transpile css files
            {
              test: /\.(png|svg|jpg|gif|pdf)$/,
              use: ['file-loader'],
            }, // transpile image files
          ],
    }
}


module.exports = config
