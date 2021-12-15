module.exports = {
  verbose: true,
  moduleDirectories: ['node_modules', 'src'],
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json', 'node'],
  roots: ['src'],
  testEnvironment: 'jest-environment-jsdom', // Use browser-like testing environment
  // testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
  transformIgnorePatterns: ['/node_modules/(?!(react-syntax-highlighter)/)'],

  // ignore .css files
  moduleNameMapper: { '\\.css$': 'identity-obj-proxy' },
  // That one tells Jest to use ts-jest when dealing with TypeScript files
  transform: { '^.+\\.(ts|tsx)$': 'ts-jest' },
  setupFilesAfterEnv: ['<rootDir>/src/setuptests.ts']
};
