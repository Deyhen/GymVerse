const path = require('path');
const { override, addWebpackAlias } = require('customize-cra');

module.exports = override(
  addWebpackAlias({
    ['@app/shared']: path.resolve(__dirname, 'src/shared'),
    ['@app/modules']: path.resolve(__dirname, 'src/modules'),
  })
);
