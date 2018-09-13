module.exports = {
    entry: './src/app.js',
    module: {
        rules: [
            {
                test: /\.(css)$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(sass)$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
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