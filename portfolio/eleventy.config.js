export default function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("portfolio/css/");
    eleventyConfig.addPassthroughCopy("portfolio/js/");
    eleventyConfig.addPassthroughCopy("portfolio/assets/")
  };