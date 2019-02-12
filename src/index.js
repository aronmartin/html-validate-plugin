const validateHtml = require('./html-validate');
const glob = require('glob');

class HtmlValidatePlugin {
  constructor(options) {
    this.options = options;
  }
  apply(compiler) {
    compiler.hooks.done.tap('HtmlValidatePlugin', () => {
      // options is optional
      glob(`${this.options.from}.html`, {}, (error, filePaths) => {
        if (error) return;
        validateHtml(filePaths, this.options.validator);
      });
    });
  }
}

module.exports = HtmlValidatePlugin;
