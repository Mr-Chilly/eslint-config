module.exports = {
  extends: [
    './jsx-a11y',
    'eslint-config-airbnb-base',
    'eslint-config-airbnb-base/rules/strict',
  ].map(require.resolve),
  rules: {
    'react/jsx-filename-extension': 0,
    'react/no-unused-prop-types': ['error', {
      skipShapeProps: true,
    }],
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/react-in-jsx-scope': 2,
    'linebreak-style': 0,
    'react/prop-types': 2,
    'react/forbid-prop-types': 0,
    'no-use-before-define': 0,
    'no-empty-pattern': 0,
    'no-unused-expressions': ['error', {
      allowShortCircuit: true,
      allowTernary: true,
    }],
    'class-methods-use-this': ['error', {
      exceptMethods: [
        'getChildContext',
        'componentDidMount',
        'componentWillMount',
        'componentWillUnmount',
        'componentWillReceiveProps',
        'shouldComponentUpdate',
        'componentWillUpdate',
        'componentDidUpdate',
        'render',
      ],
    }],
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: ['**/test/**/*.js'],
    }],
    'no-plusplus': ['error', {
      allowForLoopAfterthoughts: true,
    }],
    'slimmingworld/textComponentEnum': 2,
  },
};
