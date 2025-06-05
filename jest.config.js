module.exports = {
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  moduleNameMapper: {
    // This mocks all CSS and CSS modules to just an empty object
    "\\.(css|less|sass|scss)$": "<rootDir>/styleMock.js",
  },
  moduleFileExtensions: ["js", "jsx", "json", "node"],
  testEnvironment: "jsdom",
};
