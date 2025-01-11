import eleventyPluginLiquid from "@jgarber/eleventy-plugin-liquid";
import eleventyPluginMarkdown from "@jgarber/eleventy-plugin-markdown";
import eleventyPluginPostcss from "@jgarber/eleventy-plugin-postcss";
import eleventyPluginRoutes from "@jgarber/eleventy-plugin-routes";

import manifest from "./src/manifest.webmanifest.json" with { type: "json" };

export default async function(eleventyConfig) {
  // Collections
  eleventyConfig.addCollection("post", (collection) => {
    return collection.getFilteredByGlob("./src/_posts/**/*.md");
  });

  // Global Data
  eleventyConfig.addGlobalData("app", manifest);

  // Passthrough File Copy
  eleventyConfig
    .addPassthroughCopy("./src/_headers")
    .addPassthroughCopy("./src/*.{ico,png,txt}")
    .addPassthroughCopy({
      "./src/manifest.webmanifest.json": "manifest.webmanifest",
    });

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
  eleventyConfig.addPlugin(eleventyPluginRoutes);
}

export const config = {
  dir: {
    input: "./src",
  },
};
