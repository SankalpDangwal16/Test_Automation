<<<<<<< HEAD
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
    
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
=======
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
>>>>>>> 395332f (Updated Cypress config for report generation and other changes)
  },
});
