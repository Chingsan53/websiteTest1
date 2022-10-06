module.exports = function(eleventyConfig) {
    return {
        dir: {
            input: "_data",
            output: "docs",
        },
        templateFormats : ["njk", "md", "html"]
    };
}
