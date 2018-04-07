module.exports = {
  extends: 'airbnb',
  env: {
    jest: true
  },

  rules: {
    // ignore line break style check
    'linebreak-style': 0,

    // allow .js files to contain JSX syntax
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
  },
};
