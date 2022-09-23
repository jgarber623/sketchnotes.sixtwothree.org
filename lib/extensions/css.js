const path = require('node:path');
const postcss = require('postcss');

const postcssPlugins = [
  require('postcss-easy-import'),
  require('postcss-nesting'),
  require('postcss-assets'),
  require('cssnano')({
    preset: 'default'
  })
];

module.exports = {
  outputFileExtension: 'css',

  compile: (inputContent, inputPath) => {
    if (path.parse(inputPath).name.startsWith('_')) {
      return;
    }

    return async () => {
      return await postcss(postcssPlugins).process(inputContent, { from: inputPath }).then(result => result.css);
    };
  }
};