var mysql = require("mysql");

//create jaws connection
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "burgers_db"
  });
};


//2)connect
connection.connect(function(err) {
  if(err)throw err;
  console.log("connected as id: " + connection.threadId);
});

module.exports = connection;
