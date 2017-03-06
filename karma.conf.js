
var path = require('path');

module.exports = function(config) {  
  config.set({
    basePath: '',
    frameworks: ['mocha','chai'],
    files: [
      './test/**/*.js'
    ],
    //karam预处理器，Karma中的预处理器允许您在文件提供给浏览器之前对文件进行一些操作
    preprocessors: {
      'src/**/*.{jsx,js}': ['webpack', 'sourcemap'],
      'test/**/*.test.js': ['webpack', 'sourcemap']
    },
    // webpack file
    webpack: { 
      devtool: 'inline-source-map', //just do inline source maps instead of the default
      resolve: {
        root: [
            path.resolve('./src'),
            path.resolve('./node_modules')
        ],
        extensions: ['', '.js', '.jsx','.css','.scss'],
        modulesDirectories: [
          "",
          "src",
          "node_modules"
        ]
      },
      module: {
        loaders: [
          {
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: path.resolve(__dirname, 'node_modules'),
            query: {
              presets: ["es2015", "stage-2", "react"]
            }
          },
          {
            test: /\.json$/,
            loader: 'json',
          },
          /**
           * @TODO
           * @description 加入了style。file等loader主要是为了css、img
           * 如果你的jsx或者js内没有引入sass，以下加载器可以不选用
           */
          {
              test: /\.css$/,
              loader: "style-loader!css-loader"
          }, 
          {
              test: /\.scss$/,
              loader: "style-loader!css-loader!sass-loader"
          },
          {
              test: /\.(png|jpg|gif|svg|woff2?|eot|ttf)(\?.*)?$/,
              loader: 'url?limit=8192'
          }
        ]
      },
      externals: {
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
      }
    },
    webpackServer: {
      noInfo: true 
    },
    plugins: [
      'karma-webpack',
      'karma-mocha',
      'karma-chai',
      'karma-sourcemap-loader',
      'karma-chrome-launcher',
      'karma-coverage',
      'karma-mocha-reporter',//测试样式
      // 'karma-sinon',//监视、辅助测试工具
      // 'karma-sinon-chai'
    ],
    reporters: ['mocha','coverage'],
    coverageReporter: {
      /**
       *@description 覆盖报告插件的配置coverage,可以在目录内查看覆盖说明
       *@url https://www.npmjs.com/package/karma-coverage
       */
      dir: 'coverage/',//目录
      reporters: [
       // reporters not supporting the `file` property 
        { type: 'html', subdir: 'report-html' }
      ]
    },
    port: 9876,//默认端口号
    logLevel: config.LOG_INFO,
    browsers: ['Chrome'],//浏览器设置，还可以为PhantomJS
    singleRun: false,
    autoWatch: true //是否监听
  })

};
