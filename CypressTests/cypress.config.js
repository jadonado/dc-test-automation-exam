const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 20000,
  pageLoadTimeout: 60000,
  viewportWidth: 1920,
  viewportHeight: 1300,
  numTestsKeptInMemory: 0,
  experimentalMemoryManagement: true,
  chromeWebSecurity: false,
  video: false,
  failOnStatusCode: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://datacom.com/nz/en/contact-us'
  },
});
