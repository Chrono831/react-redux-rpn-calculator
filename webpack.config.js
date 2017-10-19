const BABEL_OPTIONS = {
    presets: [
        'react',
        [
            'env', {
                browsers: "last 2 versions",
                modules: false,
                useBuiltins: true,
                debug: true,
            }
        ],
    ],
    plugins : ["transform-object-rest-spread"],
};

module.exports = {
    entry: ['./src/index.js'],
    output: {
        path: __dirname,
        filename: './dist/bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: BABEL_OPTIONS,
                },
            },
        ],
    },
}
