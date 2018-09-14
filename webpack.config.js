const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'main.css'
        })
    ],
    entry: ['./src/app.js'],
    module: {
        rules: [
            {
                test: /\.(css)$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(sass)$/,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.(png|otf)$/,
                use: ['url-loader']
            },
            {
                test: /\.(html)$/,
                use: ['html-loader']
            }
        ]
    }
}
