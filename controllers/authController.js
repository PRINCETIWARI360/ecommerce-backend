const db = require("../config/db");

const signup = (req, res) => {
  const {name, email, password} = req.body;
  const sql = "INSERT INTO users (name,email,password) VALUES (?,?,?)";
  db.query(sql, [name, email, password], (err, result) => {

    if (err) {
      return res.send(err);
    }
    res.send("User Registered Successfully");
  });

};


const login = (req, res) => {
  const {email, password } = req.body;
  const sql = "SELECT * FROM users WHERE email=? AND password=?";
  db.query(sql, [email, password], (err, result) => {
    if (err) {
      return res.send(err);
    }
    if (result.length > 0) {
      res.send("Login Successful");
    } else {
      res.send("Invalid Email or Password");
    }
  });
};

module.exports = {signup,login};
