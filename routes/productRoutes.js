import express from "express";
import { createProductController, getProductController, productPhotoController, deleteProductController, updateProductController, productFiltersController, productCountController, productListController, searchProductController, relatedProductController, productCategoryController, braintreeTokenController, braintreePaymentController } from "../controller/productController.js";
import { isAdmin, requireSignIn } from './../middleware/authMiddleware.js';
import ExpressFormidable from "express-formidable";
import { getSingleProductController } from './../controller/productController.js';



const router = express.Router()

//routes
router.post('/create-product', requireSignIn, isAdmin, ExpressFormidable(), createProductController);

//routes
router.put('/update-product/:pid', requireSignIn, isAdmin, ExpressFormidable(), updateProductController);


//get all products
router.get("/get-product", getProductController);

//get Single Product
router.get("/get-product/:slug", getSingleProductController);

//getbphoto
router.get("/product-photo/:pid", productPhotoController);

//delete product
router.delete("/delete-product/:pid", deleteProductController);


//filter product
router.post('/product-filters', productFiltersController)


//product count
router.get('/product-count', productCountController)

//product per page
router.get('/product-list/:page', productListController)

//search product
router.get('/search/:keyword', searchProductController);

//similar product
router.get('/related-product/:pid/:cid', relatedProductController)

//category wise product
router.get('/product-category/:slug', productCategoryController)

//payment routes
//token
router.get('/braintree/token', braintreeTokenController)

//payments
router.post('/braintree/payment', requireSignIn, braintreePaymentController)

export default router;