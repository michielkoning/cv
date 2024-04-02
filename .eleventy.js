module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/style.css");

  eleventyConfig.addFilter("date", (dateObj) => {
    return new Intl.DateTimeFormat("nl-NL").format(dateObj);
  });

  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
