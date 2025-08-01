// jest.config.mjs
export default {
  transform: {
    "^.+\\.js$": "babel-jest"
  },
 testEnvironment: "jest-environment-jsdom",
 setupFilesAfterEnv: ["<rootDir>/jest.setup.js"]
};
