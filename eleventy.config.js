module.exports = function(eleventyConfig) {
  eleventyConfig.setLibrary('md', require('./lib/libraries/markdown.js'));

  eleventyConfig.addPlugin(require('./lib/plugins/postcss.js'));

  eleventyConfig.addPassthroughCopy('./src/*.{ico,png,txt}');

  return {
    dir: {
      input: './src',
      layouts: '_layouts',
      output: './public'
    }
  };
};
