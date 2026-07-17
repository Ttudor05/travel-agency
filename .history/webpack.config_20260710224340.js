// FIX 1: Import the path module so path.resolve works
const path = require('path'); 
const postcssPlugins =[
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
  mode: 'development',
  watch: true,
  module: {

    rules: [
      {
        test: /\.css$/i,use: ["style-loader", { loader: "css-loader", options: { url: false } }, { loader: "postcss-loader", options: { postcssOptions: { plugins: postcssPlugins } } }]
      }
    ]
  }
};
