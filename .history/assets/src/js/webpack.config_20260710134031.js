module.exports = {
    entry: './assets/src/js',
    output: {
    // Defines the absolute path to your custom directory (e.g., 'build' instead of 'dist')
    path: path.resolve(__dirname, './assets/dist'), 
    filename: 'bundle.js',
  },
}