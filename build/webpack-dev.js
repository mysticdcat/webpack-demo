const path = require('path')
const cwd = process.cwd();
const resolve = (dir) => {
    return path.join(cwd, dir);
};
module.exports = {
    mode: "development",
    entry: "./src/main.js",
    output: {
        path: resolve('./dist'),
        filename: 'bundle.js',
        publicPath: "dist/"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.(png|jpe?g|svg|gif)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 100 * 1024
                    }
                }
            },
            {
                test:/\.js$/,
                use:{
                    loader:"babel-loader",
                    options:{
                        presets:['@babel/preset-env']
                    }
                }
            }
        ]
    },
    plugins: [
    ]
}