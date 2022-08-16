const { defineConfig } = require("cypress");
module.exports = defineConfig({
  reporter: 'mochawesome'
})
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

