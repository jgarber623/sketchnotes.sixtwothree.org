import fs from "node:fs/promises";

import liquidPlugin from "@jgarber/eleventy-plugin-liquid";
import markdownPlugin from "@jgarber/eleventy-plugin-markdown";
import postcssPlugin from "@jgarber/eleventy-plugin-postcss";

export default async function(eleventyConfig) {
  // Collections
  eleventyConfig.addCollection("post", (collection) => {
    return collection.getFilteredByGlob("./src/_posts/**/*.md");
  });

  // Global Data
  eleventyConfig.addGlobalData("app", JSON.parse(await fs.readFile("./src/manifest.webmanifest.json")));

  // Passthrough File Copy
  eleventyConfig
    .addPassthroughCopy("./src/_headers")
    .addPassthroughCopy("./src/*.{ico,png,txt}")
    .addPassthroughCopy({
      "./src/manifest.webmanifest.json": "manifest.webmanifest",
    });

  // Plugins
  eleventyConfig.addPlugin(liquidPlugin, {
    globals: {
      dates: {
        display: "%B %e<sup>%q</sup>, %Y",
      },
    },
  });

  eleventyConfig.addPlugin(markdownPlugin);
  eleventyConfig.addPlugin(postcssPlugin);

  return {
    dir: {
      input: "./src",
    },
  };
}
