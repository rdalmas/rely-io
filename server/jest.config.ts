/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    clearMocks: true,
    coverageProvider: 'v8',
    moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],
    roots: ['<rootDir>/src'],
    testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
    transform:  {
      '^.+\\.(t|j)sx?$': 'ts-jest',
    },
    testEnvironment: 'node',
    testTimeout: 10000
  };
  