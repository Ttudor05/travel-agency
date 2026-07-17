// FIX 1: Import the path module so path.resolve works
const path = require('path'); 
const postcssPlugins =[
  require('postcss-import'),
  require('postcss-simple-vars'),
  require('postcss-nested'),
  require('autoprefixer')
  
];
module.exports = {
  // FIX 2: Explicitly point to your main JavaScript file
  entry: './assets/src/js/App.js', 
  
  output: {
    // FIX 3: Removed './' from inside path.resolve (it is unnecessary when using __dirname)
    path: path.resolve(__dirname, 'assets/dist'), 
    filename: 'travel.js',
  },
  devServer: {
    static: {
      directory: path.join(__dirname)
    } ,
    hot: true,
    port:3000,
    allowedHosts: [
      'travel-agency.local', // Explicitly allow your custom domain
      '.locl'              // Optional: Allows any domain ending in .locl
    ],    
    liveReload: false    
  },
  mode: 'development',
  module: {

    rules: [
      {
        test: /\.scss$/i,use: ["style-loader", { loader: "css-loader", options: { url: false } }, { loader: "postcss-loader", options: { postcssOptions: { plugins: postcssPlugins } } }, {loader: "sass-loader"}]
      }
    ]
  }
};
