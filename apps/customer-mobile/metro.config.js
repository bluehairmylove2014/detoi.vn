const { withNxMetro } = require('@nx/expo');
const { getDefaultConfig } = require('@expo/metro-config');
const { mergeConfig } = require('metro-config');
const exclusionList = require('metro-config/src/defaults/exclusionList');

const path = require('path');

// Find the project and workspace directories
const projectRoot = __dirname;
// This can be replaced with `find-yarn-workspace-root`
const libsRoot = path.resolve(projectRoot, '../../libs/**');
const nodeModulesRoot = path.resolve(projectRoot, '../../node_modules/**');
const defaultConfig = getDefaultConfig(__dirname);
const { assetExts, sourceExts } = defaultConfig.resolver;

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const customConfig = {
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },
  resolver: {
    assetExts: assetExts.filter((ext) => ext !== 'svg'),
    sourceExts: [...sourceExts, 'svg'],
    blockList: exclusionList([/^(?!.*node_modules).*\/dist\/.*/]),
    unstable_conditionNames: ['browser', 'require', 'react-native'],
    alias: {
      'react-hook-form': './node_modules/react-hook-form',
      // Thay 'path/to/react-hook-form' bằng đường dẫn thực tế đến thư mục hoặc tệp của 'react-hook-form'
    },
    // unstable_enableSymlinks: true,
    // unstable_enablePackageExports: true,
  },
};

module.exports = withNxMetro(mergeConfig(defaultConfig, customConfig), {
  // Change this to true to see debugging info.
  // Useful if you have issues resolving modules
  debug: false,
  // all the file extensions used for imports other than 'ts', 'tsx', 'js', 'jsx', 'json'
  extensions: [],
  // Specify folders to watch, in addition to Nx defaults (workspace libraries and node_modules)
  watchFolders: [libsRoot, nodeModulesRoot],
});
