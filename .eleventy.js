module.exports = eleventy => {
  eleventy.setBrowserSyncConfig(require('./bs-config.js'));

  eleventy.addCollection('posts', collection => {
    return collection.getFilteredByGlob('./src/_posts/*.md').reverse();
  });

  eleventy.addFilter('prettify', require('./lib/filters/prettify.js'));

  eleventy.addPassthroughCopy('./src/favicon.ico');
  eleventy.addPassthroughCopy('./src/jgarber.png');
  eleventy.addPassthroughCopy('./src/robots.txt');

  eleventy.addWatchTarget('./src/assets/stylesheets');

  return {
    dir: {
      input: './src',
      layouts: '_layouts',
      output: './public'
    }
  };
};
