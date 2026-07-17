// FIX 1: Import the path module so path.resolve works
const path = require('path'); 

module.exports = {
  // FIX 2: Explicitly point to your main JavaScript file
  entry: './assets/src/js/App.js', 
  
  output: {
    // FIX 3: Removed './' from inside path.resolve (it is unnecessary when using __dirname)
    path: path.resolve(__dirname, 'assets/dist'), 
    filename: 'travel.js',
  },
  mode: 'development',
  watch: true
};
