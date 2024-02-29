module.exports = {
  roots: ["<rootDir>/src"],
  transform: {
    ".+\\.ts$": "ts-jest",
  },
  testEnvironment: "node",
  collectCoverageFrom: ["<rootDir>/src/**/*.{ts,tsx}"],
  coverageDirectory: "coverage",
};
