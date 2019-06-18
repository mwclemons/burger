var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "snizz11bre",
  database: "burgers_db"
});



// var connection = mysql.createConnection({
//   host: "u0zbt18wwjva9e0v.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
//   user: "fsqcmf435ga1u4z6",
//   password: "vfxfwvwdn13zlne7",
//   database: "r6wwld1m4y6jx070"
// });


connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
