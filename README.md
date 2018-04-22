# ESLint.Config

Javascript linting rules; extending Airbnb, React, Prettier and A11y rules. This config includes a whole host of sane linting rules, while the plugin simple adds a few specific rules for our component.

---
## Installation

```
yarn add https://github.com/Mr-Chilly/eslint-config.git
```

##
```
// .eslintrc
module.exports = require('eslint-config/eslint.config.js');
```
```
// prettier.config.js
module.exports = require('eslint-config/prettier.config.js');
```

Thse configs should sit in the root of your application. Parser & Plugin settings are not availble in sharable ESLint configs, so will need to be included in your application config. The Prettier config is not essential, but useful if you'd like to run prettier on other files, or via a different plugin (on commit for example)

That's literally it! Happy linting...

---

### Extra settings

In Global, ESLint is able to verify our import via webpack.config.resolve.js. If your project is using webpack you can specifiy:
```
// .eslintrc
"settings": {
    "import/resolver": {
      "webpack": {
        "config": "./pat/to/webpack.config.resolve.js"
      }
    }
  },
```
