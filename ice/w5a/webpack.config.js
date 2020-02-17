const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
    }),
    ],
<<<<<<< HEAD
module: {
    rules: [
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader']
        }
    ]
}
=======
    module: {
        rules: [
           {
             test: /\.css$/i,
             use: ['style-loader', 'css-loader']
           }
        ]
    }    
>>>>>>> b09e84dd73f19a1601e6a93cb4e7bf1317d827be
};

