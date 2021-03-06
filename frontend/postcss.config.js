module.exports = () => {
  const config = {
    plugins: {
      'postcss-import': {},
      'postcss-mixins': {},
      tailwindcss: require.resolve('@ebury/chameleon-components/tailwind.config.js'),
      'postcss-nested': {},
      'postcss-preset-env': {},
    },
  };

  return config;
};
