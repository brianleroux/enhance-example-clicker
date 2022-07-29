let plugin = require('@enhance/eleventy-plugin')

module.exports = function (eleventyConfig) {
  let extension = 'html'
  eleventyConfig.addTemplateFormats(extension)
  eleventyConfig.addExtension(extension, plugin)
}
