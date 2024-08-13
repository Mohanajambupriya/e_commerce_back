const cartController=require('../controllers/cartController')
const express=require('express')
const router=express.Router();
const auth = require('../middlewere/auth');

router.post('/' , auth , cartController.createCart)
router.get('/' , auth , cartController.getCart)
router.delete('/:product_id',auth, cartController.deleteCart);
module.exports=router