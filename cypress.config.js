const { defineConfig } = require("cypress");
const { downloadFile } = require('cypress-downloadfile/lib/addPlugin')
// const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');

module.exports = defineConfig({
  reporter: '../node_modules/cypress-mochawesome-reporter',      
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    watchForFileChanges: false,  
    video: true,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      on('task', { downloadFile })
      // on('before:run', async (details) => {
      //   console.log('override before:run');
      //   await beforeRunHook(details);
      // });

      // on('after:run', async () => {
      //   console.log('override after:run');
      //   await afterRunHook();
      // });
    }
  },
});
