module.exports = (options, webpack) => {
  const config = {...options};
  delete config.module.rules[0].use[0].options.transpileOnly;
  return config;
}
