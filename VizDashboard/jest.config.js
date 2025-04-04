// filepath: c:\Users\Welcome\Downloads\hive-main\hive-main\VizDashboard\jest.config.js
module.exports = {
  testEnvironment: 'jsdom', // Use jsdom for React tests
  testMatch: ['**/__tests__/**/*.test.js', '**/?(*.)+(spec|test).js'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest', // Use Babel for transforming JavaScript/JSX
  },
  transformIgnorePatterns: [
    '/node_modules/(?!(axios)/)', // Allow Jest to transform ES modules like axios
  ],
};