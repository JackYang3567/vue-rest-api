module.exports = {
    outputDir: process.env.outputDir,
    assetsDir: 'static',
    
    configureWebpack: {
        output: {
          libraryExport: 'default'
        }
     },
    devServer: {
        host: '0.0.0.0',
        hot: true,
        disableHostCheck: true,
    },
    
}