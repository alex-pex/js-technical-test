/**
 * Waiting for https://github.com/facebookincubator/create-react-app/pull/2285
 */

function rewireCssModules(config, env) {
  // edit css loader
  const cssLoader = config.module.rules.find(function (rule) {
    return ('' + rule.test) === /\.css$/.toString();
  });
  cssLoader.exclude = /\.module\.css$/;

  // find postcss options
  const postCSSLoader = (cssLoader.use || cssLoader.loader).find(function (loader) {
    return (loader.options && loader.options.ident) === 'postcss';
  });

  // create css-module loader
  const cssModuleLoader = {
    test: /\.module\.css$/,
    use: [
      require.resolve('style-loader'),
      {
        loader: require.resolve('css-loader'),
        options: {
          importLoaders: 1,
          modules: true,
          localIdentName: '[name]__[local]___[hash:base64:5]',
        },
      },
      {
        loader: require.resolve('postcss-loader'),
        options: postCSSLoader.options,
      }
    ]
  };

  // update webpack config
  config.module.rules.push(cssModuleLoader);

  return config;
}

module.exports = rewireCssModules;
