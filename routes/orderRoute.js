const express=require('express');
const Order=require("../controllers/orderController")
const router=express.Router();
const auth=require("../middlewere/auth");

router.post("/",auth,Order.createorder);
router.get("/",auth,Order.getOrder)
module.exports=router