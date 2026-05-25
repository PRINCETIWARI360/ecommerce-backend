// const mysql = require("mysql2");

// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "6203811578Pt",
//   database: "ecommerce"
// });

// db.connect((err) => {
//   if (err) {
//     console.log("Database connection failed:", err);
//   } else {
//     console.log("Database Connected Successfully");
//   }
// });

// module.exports = db;

require("dotenv").config();

const mysql = require("mysql2");

const db = mysql.createConnection({
  host: process.env.MYSQLHOST,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE,
  port: process.env.MYSQLPORT,
});

db.connect((err) => {
  if (err) {
    console.log("Database Connection Failed", err);
  } else {
    console.log("MySQL Connected");
  }
});

module.exports = db;