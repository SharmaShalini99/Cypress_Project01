const { defineConfig } = require("cypress");

module.exports = defineConfig({
  //reporter: 'cypress-mochawesome-reporter', // for html report
  env: {
    //console.log("i am in config file 3")        
    db: {
      //console.log("i am in config file 2")
      host:"localhost",
      user:"root",
      password:"root",
      port:"3306",
      database:"magicfinservdb",        
  }
},
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);// for html      
      return require('./cypress/plugins/index.js')(on, config)
  }
}
});





