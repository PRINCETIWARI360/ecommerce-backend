const db = require("../config/db");
const placeOrder = (req,res)=>{
const {cart} = req.body;
cart.forEach((item)=>{
const sql =
"INSERT INTO orders (product_name,price,quantity) VALUES (?,?,?)";

db.query(sql,[item.name,item.price,item.quantity]);
});
res.send("Order Placed Successfully");
};
module.exports = {placeOrder};