# ESLint.Config.SlimmingWorld

SlimmingWorld Global Javascript linting rules; extending Airbnb, React and A11y rules. Please use this config rather than ESLint.Plugin.SlimmingWorld, this config includes a whole host of sane linting rules, while the plugin simple adds a few specific rules for our component.

---
## Installation

```
yarn add yarn add https://bitbucket.org/milesbram/slimmingworld.platform.eslintconfig#develop
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
  "extends": "slimmingworld",
  "plugins": [
    "import",
    "react",
    "slimmingworld"
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

```
 // webpack.config.resolve.js 
 // TODO: This file refs Front end, make reusable

 const path = require('path');

module.exports = (buildOption_) => {
  // this fix is needed because eslint resolver plugin won't pass the buildOption_ argument
  const buildOption = (typeof buildOption_ === 'function') ? buildOption_ : () => false;
  return {
    resolve : {
      extensions : ['.js', '.json'],
      modules : [
        path.join(__dirname, '../../../'),
        "node_modules"
      ],
      alias: Object.assign(
        {
          lodash: 'lodash-es',
          'lodash.isequal': 'lodash-es/isEqual',
        },
        buildOption('patch-recompose') ? {
          'recompose$': 'common/src/client/util/react-render-perf/recomposePatched'
        } : {}
      )
    },
    resolveLoader: {
      alias: {
        'pattern-lib-component-loader': path.resolve(__dirname, '../../pattern-lib-component-loader')
      }
    }
  };
};
```
This webpack config can be passed in a build options config