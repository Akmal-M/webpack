const path = require('path')

module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js') //bundle or wheat ever I want
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].js" //it allows to change entry name whtever I want
    }
}