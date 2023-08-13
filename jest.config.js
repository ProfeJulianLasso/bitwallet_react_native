module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['./jest.setup.js'],
  rootDir: '.',
  roots: ['<rootDir>/src/', '<rootDir>/__tests__'],
  moduleNameMapper: {
    '@asset': '<rootDir>/src/infrastructure/assets/',
    '^@assets(|/.*)$': '<rootDir>/src/infrastructure/assets/$1',
    '@components': '<rootDir>/src/infrastructure/components/',
    '@configs': '<rootDir>/src/infrastructure/configs/',
    '@routes': '<rootDir>/src/infrastructure/routes/',
    '@store': '<rootDir>/src/infrastructure/store/',
    '@utils': '<rootDir>/src/infrastructure/utils/',
    '@module/notifications':
      '<rootDir>/src/infrastructure/modules/notifications/',
    '@module/reports': '<rootDir>/src/infrastructure/modules/reports/',
    '@module/security': '<rootDir>/src/infrastructure/modules/security/',
    '@module/transactions':
      '<rootDir>/src/infrastructure/modules/transactions/',
    '@application': '<rootDir>/src/application/',
    '@domain': '<rootDir>/src/domain/',
    '@infrastructure': '<rootDir>/src/infrastructure/',
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
    '(.*).style.(ts|tsx)',
  ],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native-community|@react-navigation)',
  ],
};
