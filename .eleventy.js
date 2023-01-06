module.exports = eleventyConfig => {
  eleventyConfig.setLibrary('md', require('./lib/libraries/markdown.js'));

  eleventyConfig.addPlugin(require('./lib/plugins/postcss.js'));

  eleventyConfig
    .addPassthroughCopy('./src/favicon.ico')
    .addPassthroughCopy('./src/jgarber.png')
    .addPassthroughCopy('./src/robots.txt');

  return {
    dir: {
      input: './src',
      layouts: '_layouts',
      output: './public'
    }
  };
};
