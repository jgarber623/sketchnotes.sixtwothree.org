import cssnano from "cssnano";
import postcssAssets from "postcss-assets";
import postcssEasyImport from "postcss-easy-import";
import postcssNesting from "postcss-nesting";

export default {
  plugins: [
    postcssEasyImport,
    postcssNesting,
    postcssAssets({ basePath: "./src/assets" }),
    cssnano,
  ],
};
