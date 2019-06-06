/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const path = require('path');

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
  resolver: {
    sourceExts: ['js', 'ts', 'tsx'],
  },
  // projectRoot: path.resolve(__dirname + '/src'),
  // watchFolders: [
  //   path.resolve(__dirname, "src"),
  //   path.resolve(__dirname, "src/components")
  // ]
};
