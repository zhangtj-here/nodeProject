const mysql = require("mysql");

function createConnection() {
  let connection = mysql.createConnection({
    host: "127.0.0.1",
    port: "3306",
    user: "root",
    password: "qq987654321.com",
    database: "school"
  });
  return connection;
}


module.exports.createConnection = createConnection;


