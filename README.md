# ESLint.Config

Javascript linting rules; extending Airbnb, React and A11y rules. This config includes a whole host of sane linting rules, while the plugin simple adds a few specific rules for our component.

---
## Installation

```
yarn add yarn add https://github.com/Mr-Chilly/eslint-config.git
```

Package requires these dependancies, which should be installed automatically:
```
eslint 
babel-eslint
eslint-plugin-import
eslint-plugin-jsx-a11y
eslint-plugin-react
``` 

---

## .eslintrc
```
{
  "parser": "babel-eslint",
  "extends": "eslint-config",
  "plugins": [
    "import",
    "react"
  ],
  "env": {
    "browser": true,
    "node": true
  }
}
```
This config should sit in the root of your application. Parser & Plugin settings are not availble in sharable ESLint configs, so will need to be included in your application config.

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
