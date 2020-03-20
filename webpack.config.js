const path = require('path');

module.exports = {
    entry: {
        sample: './webpack_with_ts_loader/sample.ts',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './webpack_with_ts_loader/dist_es2020')
        // path: path.resolve(__dirname, './webpack_with_ts_loader/dist_esnext')
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
                use: ['babel-loader', 'ts-loader']
            }
        ]
    }
}
