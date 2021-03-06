// Set up MySQL connection
var mysql = require("mysql");
var connection;
// Define ports

if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{
connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "burgers_db"
});
};

connection.connect();
// Export connection for our ORM to use.
module.exports = connection;