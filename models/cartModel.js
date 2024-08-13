const mongoose=require("mongoose");
const CartSchema=new mongoose.Schema({
    User_id:String,
    products:[{
        product_id:String,
        quantity:Number
    }],
})

const Cart=new mongoose.model("cart",CartSchema);
module.exports=Cart;