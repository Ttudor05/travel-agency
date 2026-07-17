const path = require('path');

const postcssPlugins = [
  require('postcss-import'),
  require('postcss-mixins'),
  require('postcss-simple-vars'),
  require('postcss-nested'),
  require('autoprefixer')
];

module.exports = {
  entry: './assets/src/js/App.js',

  output: {
    path: path.resolve(__dirname, 'assets/dist'),
    filename: 'travel.js',
    publicPath: '/assets/dist/'
  },

  devServer: {
    watchFiles: ["**/*.html"],
    static: {
      directory: path.resolve(__dirname),
      watch: false
    },
    hot: true,
    port: 3000,
    allowedHosts: [
      'travel-agency.local',
      '.local'
    ],
    
  },

  mode: 'development',

  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: postcssPlugins
              }
            }
          },
          'sass-loader'
        ]
      }
    ]
  }
};