module.exports = {
    transform: {
      "^.+\\.jsx?$": "babel-jest",
       '^.+\\.vue$': '@vue/vue3-jest',
    },
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
    },
    testEnvironment: "jsdom",
    testEnvironmentOptions: {
        customExportConditions: ["node", "node-addons"],
    },
  };