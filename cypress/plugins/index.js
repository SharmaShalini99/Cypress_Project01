const mysql = require("mysql");
function queryTestDb(query, config) {
  // creates a new mysql connection using credentials from cypress.json env's
  console.log("i am here before connection")
  const connection = mysql.createConnection(config.env.db);
  //console.log("i am here after req")
  // start connection to db
  connection.connect();
  console.log("i am here after req")
  // exec query + disconnect to db as a Promise
  return new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
      if (error) reject(error);
      else {
        connection.end();
        // console.log(results)
        return resolve(results);
      }
    });
  });
}

module.exports = (on, config) => {
  // Usage: cy.task('queryDb', query)
  on("task", {
    queryDb: query => {
      return queryTestDb(query, config);
    }
  });
};