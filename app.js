//const mongoose=require("mongoose");
require('dotenv').config()
const mongoose = require('mongoose');
const express=require("express");
const app=express();
const bodyParser=require("body-parser");
const cookieParser=require("cookie-parser");
const cors=require("cors");

// my routes
const authRoutes=require("./routes/auth")
const userRoutes=require("./routes/user")
const categoryRoutes=require("./routes/category")
const productRoutes=require("./routes/product")
const orderRoutes=require("./routes/order")


// DB COnnection
mongoose.connect(process.env.DATABASES,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(()=>{
    console.log("DB CONnected")
});

// middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());
app.use(cors());

// Routes

app.use("/api",authRoutes);
app.use("/api",userRoutes);
app.use("/api",categoryRoutes);
app.use("/api",productRoutes);
app.use("/api",orderRoutes);





//port
const port= process.env.PORT || 8000;
//starting a server
app.listen(port,()=>{

    console.log(`app is running at ${port}`);
});
