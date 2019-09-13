module.exports = {
    rootDir: "../",
    moduleFileExtensions: [ 'json', 'ts', 'tsx', 'js', 'jsx'],
    setupFiles: ["<rootDir>/test/jest.setup.js"],
    moduleNameMapper: {
      '^src(.*)$': "<rootDir>/src$1",
      "^test(.*)$": "<rootDir>/test$1"
    },
    preset: 'ts-jest',
    testEnvironment: "node",
    testRegex: ".spec.(tsx?|ts?)$",
    testPathIgnorePatterns: ['../node_modules/'],
  };