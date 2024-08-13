const productController=require('../controllers/productController')
const express=require('express')
const router=express.Router();
const auth = require('../middlewere/auth')


router.get('/',auth ,productController.getProducts)
router.post('/',auth ,productController.createProducts)
router.delete('/',auth ,productController.deleteProducts)

module.exports=router