// 引入一个包  拼接路径
const path = require('path');
// 引入html插件
const HTMLWebpackPlugin = require('html-webpack-plugin');
// 引入clean插件  将编译后的文件先清空  再进行编译  避免有之前的文件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// webpack中的配置信息
module.exports = {
    // 入口文件
    entry: './src/index.ts',
    // 出口文件
    output: {
        // 指定打包文件的目录
        path: path.resolve(__dirname, 'dis'),
        // 打包后文件的名字
        filename: 'bundle.js'
    },

    mode: 'development',
    // 在打包ts的时候，需要将ts编译成js，再进行打包 
    // 指定webpack打包使用的模块
    module: {
        // 指定加载的规则
        rules: [
            {
                // 指定规则生效的文件
                // 用ts-loader来处理以ts结尾的文件
                test: /\.ts$/,
                use: [
                    // 配置babel  复杂的loader需要{}
                    {
                        // loader的使用是有顺序的，从上到下的使用
                        loader: 'babel-loader',
                        // 设置babel
                        options:{
                            // 设置预定义的环境
                            presets:[
                                [
                                    // 指定环境的插件
                                    "@babel/preset-env",
                                    // 配置信息
                                    {
                                        // 运行的浏览器
                                        targets:{
                                            "chrome":"88",
                                            "ie":"11"
                                        },
                                        // 指定corejs的版本
                                        "corejs":"3",
                                        // 使用corejs的方式   usage按需加载
                                        "useBuiltIns":"usage",
                                                                  
                                    }
                                ]
                            ]
                        }
                    },
                    'ts-loader'
                ],
                // 要排除的文件
                exclude: /node-modules/
            }
        ],
    },

    // 配置plugin插件
    plugins: [
        new CleanWebpackPlugin(),
        // 自动生成html文件  以及资源
        new HTMLWebpackPlugin({
            // title:'title'
            // 网页模板  根据模板来生成html文件
            template: './src/index.html'
        }),

    ],

    // 用来设置引用模块
    // 以ts js结尾的都作为模块来使用
    resolve: {
        // webpack支持ts文件
        extensions: ['.ts', '...']
    }







}