module.exports = function (context, options) {
  return {
    name: 'custom-docusaurus-plugin',
    configureWebpack(config) {
      return {
        node: {
          Buffer: false
        }
      };
    },
  };
};