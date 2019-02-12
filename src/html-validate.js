const htmlValidator = require('html-validator');
const fs = require('fs');
const colors = require('colors');

function Validate(filePaths, validator) {
  filePaths.forEach((path) => {
    fs.readFile(path, 'utf8', (err, html) => {
      if (err) {
        throw err;
      }

      const options = {
        data: html,
        format: 'text',
        validator: validator || 'http://html5.validator.nu'
      };

      htmlValidator(options)
        .then((data) => {
          if (!data.includes('Error')) return;
          console.error(colors.red(`\n${data} \nFile: ${path}`)); //eslint-disable-line
        })
        .catch((error) => {
          console.error(colors.red(error)); //eslint-disable-line
        });
    });
  });
}

module.exports = Validate;
