module.exports = {
  plugins: [
    require('postcss-easy-import'),
    require('postcss-nesting'),
    require('postcss-assets')({
      basePath: './src/assets'
    }),
    require('cssnano')
  ]
};
