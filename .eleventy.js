module.exports = eleventyConfig => {
  eleventyConfig.setBrowserSyncConfig(require('@jgarber/browsersync-config/eleventy'));

  eleventyConfig.addCollection('posts', collection => {
    return collection.getFilteredByGlob('./src/_posts/*.md').reverse();
  });

  eleventyConfig.addFilter('prettify', require('./lib/filters/prettify.js'));

  eleventyConfig.addPassthroughCopy('./src/favicon.ico');
  eleventyConfig.addPassthroughCopy('./src/jgarber.png');
  eleventyConfig.addPassthroughCopy('./src/robots.txt');

  eleventyConfig.addWatchTarget('./src/assets/stylesheets');

  return {
    dir: {
      input: './src',
      layouts: '_layouts',
      output: './public'
    }
  };
};
