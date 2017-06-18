const rewireAliases = require('./rewireAliases');
const rewireCssModules = require('./rewireCssModules');

module.exports = function override(config, env) {
  // do stuff with the webpack config...
  config = rewireAliases(config, env);
  config = rewireCssModules(config, env);

  return config;
}
