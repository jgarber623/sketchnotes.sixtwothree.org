module.exports = function(eleventyConfig) {
  // Global Data
  eleventyConfig.addGlobalData('app', require('./src/manifest.webmanifest.json'));

  // Passthrough File Copy
  eleventyConfig
    .addPassthroughCopy('./src/_headers')
    .addPassthroughCopy('./src/*.{ico,png,txt}')
    .addPassthroughCopy({
      './src/manifest.webmanifest.json': 'manifest.webmanifest'
    });

  // Libraries
  eleventyConfig.setLibrary('md', require('./lib/libraries/markdown.js'));

  // Plugins
  eleventyConfig.addPlugin(require('@jgarber/eleventy-plugin-postcss'));

  return {
    dir: {
      input: './src'
    }
  };
};
