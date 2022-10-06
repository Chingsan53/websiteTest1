module.exports = function(eleventyConfig) {
    return {
        dir: {
            input: "_data",
            output: "main",
        },
        templateFormats : ["njk", "md", "html"]
    };
}
