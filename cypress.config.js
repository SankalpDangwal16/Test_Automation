const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      // Add Mochawesome reporter plugin
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },

    // Options for the Mochawesome reporter
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: true,
      json: true,
      embeddedScreenshots: true,
      inlineAssets: true, // Embed screenshots in the HTML report
    },

    // Enable screenshot on test failure
    screenshotOnRunFailure: true,
    screenshotsFolder: 'cypress/screenshots',
  },
});
