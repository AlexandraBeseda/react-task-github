module.exports = {
  verbose: true,
  moduleDirectories: ['node_modules', 'src'],
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json', 'node'],
  roots: ['src'],
  testEnvironment: 'jest-environment-jsdom',
  transformIgnorePatterns: ['/node_modules/(?!(react-syntax-highlighter)/)'],
  moduleNameMapper: { '\\.css$': 'identity-obj-proxy' },
  transform: { '^.+\\.(ts|tsx)$': 'ts-jest' },
  setupFilesAfterEnv: ['<rootDir>/src/setuptests.ts']
};
