const express = require("express");
const router=express.Router();

// controller

const{getProductById,createProduct,getProduct, photo,deleteProduct,updateProduct,getAllProducts,getAllUniqueCategories}=require("../controllers/product")
const{isSignedIn,isAuthenticated,isAdmin}=require("../controllers/auth")
const{getUserById}=require("../controllers/user")

//params
router.param("userId",getUserById);
router.param("productId",getProductById);

//all of actual routes
router.post("/product/create/:userId",isSignedIn,isAuthenticated,isAdmin,createProduct);

router.get("/product/:productId",getProduct);
router.get("/product/photo/:productId",photo);

// delete route
router.delete("/product/:productId/:userId",isSignedIn,isAuthenticated,isAdmin,deleteProduct);

//update route
router.put("/product/:productId/:userId",isSignedIn,isAuthenticated,isAdmin,updateProduct);

//listing route
router.get("/product",getAllProducts);

router.get("/products/categories",getAllUniqueCategories)

module.exports=router;