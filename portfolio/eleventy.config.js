export default function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("style.css");
    eleventyConfig.addPassthroughCopy("app.js");
    eleventyConfig.addPassthroughCopy("portfolio/noun-graph-network-6418833.svg")
  };