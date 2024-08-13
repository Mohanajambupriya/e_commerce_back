const express=require('express');
const Order=require("../controllers/orderController")
const router=express.Router();
const auth=require("../middlewere/auth");

router.post("/",auth,Order.createorder);
module.exports=router