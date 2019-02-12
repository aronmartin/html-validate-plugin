<div align="center">
  <a href="https://github.com/webpack/webpack">
    <img width="200" height="200"
      src="https://webpack.js.org/assets/icon-square-big.svg">
  </a>
  <h1>Html validate plugin</h1>
  <p>Validates the html files based on the Nu validator https://github.com/zrrrzzt/html-validator</p>
</div>

<h2 align="center">Install</h2>

```bash
npm i html-validate-plugin --save-dev
```

<h2 align="center">Usage</h2>

**webpack.config.js**
```js
const HtmlValidatePlugin = require('html-validate-plugin')

const config = {
  plugins: [
    new HtmlValidatePlugin('src/**/*', 'https://validator.w3.org/nu/')
  ]
}
```
