const db = require("../config/db");
const getProducts = (req,res)=>{
const sql = "SELECT * FROM products";
db.query(sql,(err,result)=>{
if(err){
return res.send(err);
}
res.json(result);
});
};
module.exports = {getProducts};