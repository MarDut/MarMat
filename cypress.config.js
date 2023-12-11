const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    video: false,
    viewportHeight: 1080,
    viewportWidth: 1920,
    supportFile: false,
    testIsolation: true,
    baseUrl: 'https://matemare.cfolks.pl',
    setupNodeEvents(on, config) {
      // implement node event listeners here

    },
  },
});
