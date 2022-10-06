module.exports = function(eleventyConfig) {
    return {
        dir: {
            input: "main",
            output: "main",
        },
        templateFormats : ["njk", "md", "html"]
    };
}
