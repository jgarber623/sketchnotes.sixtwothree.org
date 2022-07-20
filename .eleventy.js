module.exports = eleventyConfig => {
  eleventyConfig.addCollection('posts', collection => {
    return collection.getFilteredByGlob('./src/_posts/*.md').reverse();
  });

  eleventyConfig.addExtension('css', require('./lib/extensions/css.js'));

  eleventyConfig.addPassthroughCopy('./src/favicon.ico');
  eleventyConfig.addPassthroughCopy('./src/jgarber.png');
  eleventyConfig.addPassthroughCopy('./src/robots.txt');

  return {
    dir: {
      input: './src',
      layouts: '_layouts',
      output: './public'
    },

    templateFormats: ['css', 'liquid', 'md']
  };
};
