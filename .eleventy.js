module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("*.css");
    eleventyConfig.addPassthroughCopy("*.svg");
    eleventyConfig.addPassthroughCopy("*.jpg");
    return {};
}
