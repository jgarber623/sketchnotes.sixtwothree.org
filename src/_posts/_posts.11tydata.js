export default {
  layout: "layouts/post.liquid",
  permalink: "{{ tags[1] | slugify }}/{{ page.fileSlug }}.html",
  tags: ["post"],
};
