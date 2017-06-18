const path = require('path');

function rewireAliases(config, env) {
  config.resolve.modules = [
    path.resolve(__dirname, '../src'),
    'node_modules'
  ];

  return config;
}

module.exports = rewireAliases;
