const db = require("../config/db");
const saveContact = (req,res)=>{
const {name,email,message} = req.body;
const sql =
"INSERT INTO contacts (name,email,message) VALUES (?,?,?)";
db.query(sql,[name,email,message],(err,result)=>{
if(err){
return res.send(err);
}
res.send("Message Sent Successfully");
});
};
module.exports = {saveContact};