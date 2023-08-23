module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    test: {
      plugins: ['react-native-config-node/transform'],
    },
  },
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.android.js',
          '.android.tsx',
          '.ios.js',
          '.ios.tsx',
        ],
        root: ['./src/'],
        alias: {
          '@assets': './src/infrastructure/assets',
          '@components': './src/infrastructure/components',
          '@configs': './src/infrastructure/configs',
          '@routes': './src/infrastructure/routes',
          '@store': './src/infrastructure/store',
          '@utils': './src/infrastructure/utils',
          '@module/notifications': './src/presentation/notifications',
          '@module/reports': './src/presentation/reports',
          '@module/security': './src/presentation/security',
          '@module/transactions': './src/presentation/transactions',
          '@application': './src/application',
          '@domain': './src/domain',
          '@infrastructure': './src/infrastructure',
          '@presentation': './src/presentation',
        },
      },
    ],
  ],
};
