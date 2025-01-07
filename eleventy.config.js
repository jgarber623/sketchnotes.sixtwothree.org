import { readFileSync } from "node:fs";

import eleventyPluginLiquid from "@jgarber/eleventy-plugin-liquid";
import eleventyPluginMarkdown from "@jgarber/eleventy-plugin-markdown";
import eleventyPluginPostcss from "@jgarber/eleventy-plugin-postcss";

export default async function(eleventyConfig) {
  // Collections
  eleventyConfig.addCollection("post", (collection) => {
    return collection.getFilteredByGlob("./src/_posts/**/*.md");
  });

  // Global Data
  eleventyConfig.addGlobalData("app", JSON.parse(readFileSync("./src/manifest.webmanifest")));

  // Passthrough File Copy
  eleventyConfig
    .addPassthroughCopy("./src/_headers")
    .addPassthroughCopy("./src/*.{ico,png,txt,webmanifest}");

  // Plugins
  eleventyConfig.addPlugin(eleventyPluginLiquid, {
    globals: {
      dates: {
        display: "%B %e<sup>%q</sup>, %Y",
      },
    },
  });

  eleventyConfig.addPlugin(eleventyPluginMarkdown);
  eleventyConfig.addPlugin(eleventyPluginPostcss);
}

export const config = {
  dir: {
    input: "./src",
  },
};
