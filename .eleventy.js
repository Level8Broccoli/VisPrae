module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("*.css");
    eleventyConfig.addPassthroughCopy("*.svg");
    return {};
}
