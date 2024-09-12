const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
    // Increased page load timeout to 2 minutes (120000 milliseconds)
    pageLoadTimeout: 120000,  // You can adjust this if needed
    specPattern: 'cypress/e2e/**/*.cy.js',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: true,
      json: true,
      embeddedScreenshots: true,
      inlineAssets: true,
    },
    screenshotOnRunFailure: true,
    screenshotsFolder: 'cypress/screenshots',
  },
});
