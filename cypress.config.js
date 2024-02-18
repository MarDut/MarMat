const { defineConfig } = require("cypress");
const Mochawesome = require("mochawesome");

module.exports = defineConfig({

  reporter: "mochawesome",
  reporterOptions:{
    reportDir: "cypress/results",
    overwrite: false,
    html: false
  },
  
  e2e: {
    video: false,
    viewportHeight: 1080,
    viewportWidth: 1920,
    supportFile: false,
    testIsolation: true,
    baseUrl: 'https://matemare.cfolks.pl',
    experimentalRunAllSpecs: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here

    },
  },
});
