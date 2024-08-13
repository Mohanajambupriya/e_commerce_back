const express=require('express');
const app=express();
const mongoose=require('mongoose');
const productsRoutes= require('./routes/productRoute');
const usersRoutes= require('./routes/userRoute');
const cartRoutes= require('./routes/cartRoute');
const orderRoutes=require('./routes/orderRoute');
const cors = require('cors');

mongoose.connect('mongodb+srv://mohanapriyaj2022ece:Mohanapriya@cluster0.10aqqxp.mongodb.net/').then(()=>{
    console.log("connected to database");
});



// Enable CORS for all routes
app.use(cors());
app.use(express.json())
app.use('/products',productsRoutes)
app.use('/users',usersRoutes)
app.use('/carts',cartRoutes)
app.use('/orders',orderRoutes)

app.listen(3000,()=>{
    console.log("server is running on the port 3000")
})