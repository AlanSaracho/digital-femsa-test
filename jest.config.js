module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testRegex: '(/src/.*(\\.|/)(test|spec))\\.(ts|tsx|js)$',
  preset: 'react-native',
  coverageReporters: ['text'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFilesAfterEnv: ['<rootDir>testsconfig.js'],
  testPathIgnorePatterns: ['/node_modules/', '/e2e'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|expo-linear-gradient|@react-native|@react-native-async-storage|@react-navigation|@storybook|@react-native-community|expo-localization|@unimodules|react-native-redash|react-native-reanimated)',
  ],
};
