module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['./jest.setup.js'],
  setupFiles: ['./node_modules/react-native-gesture-handler/jestSetup.js'],
  rootDir: '.',
  roots: ['<rootDir>/src/', '<rootDir>/__tests__'],
  moduleNameMapper: {
    '^@assets(|/.*)$': '<rootDir>/src/infrastructure/assets/$1',
    '@components': '<rootDir>/src/infrastructure/components/index',
    '@configs': '<rootDir>/src/infrastructure/configs/index',
    '@routes': '<rootDir>/src/infrastructure/routes/index',
    '@store': '<rootDir>/src/infrastructure/store/index',
    '@utils': '<rootDir>/src/infrastructure/utils/index',
    '@module/notifications':
      '<rootDir>/src/infrastructure/modules/notifications/index',
    '@module/reports': '<rootDir>/src/infrastructure/modules/reports/index',
    '@module/security': '<rootDir>/src/infrastructure/modules/security/index',
    '@module/transactions':
      '<rootDir>/src/infrastructure/modules/transactions/index',
    '@application': '<rootDir>/src/application/index',
    '@domain': '<rootDir>/src/domain/index',
    '@infrastructure': '<rootDir>/src/infrastructure/index',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverageFrom: ['**/*.(t|j)s', '**/*.(t|j)sx'],
  coverageDirectory: './coverage',
  testEnvironment: 'node',
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/__tests__/',
    '/__mocks__/',
    'index.ts',
    '(.*).type.(ts|tsx)',
  ],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native|@react-native-community|@react-navigation)',
  ],
};
