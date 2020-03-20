const path = require('path');

// "@babel/typescript" を使う版
module.exports = {
    entry: {
        sample: './webpack_with_ts_loader/sample.ts',
    },
    output: {
        filename: '[name].js',
        path:path.resolve(__dirname, './webpack_with_ts_loader/dist_typescript')
    },
    resolve:{        
        extensions: ['.ts','.tsx','.js','.json'],
        modules: ['node_modules'],
    },
    module:{
        rules:[
            {
                test: /\.ts$/,
                exclude: '/node_modules/',
                use: ['babel-loader']
            }
        ]
    }
}
