import express from "express";
import {
    registerController,
    loginController,
    testController,
    forgotPasswordController,
    updateProfileController,
    getOrderController,
    getAllOrderController,
    orderStatusController
} from '../controller/authController.js';
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";


//router object
const router = express.Router()

//routing
//REGISTER || METHOD POST
router.post('/register', registerController)

//login || POST
router.post('/login', loginController)

//Forgot Password
router.post('/forgot-password', forgotPasswordController)
//test route
router.get('/test', requireSignIn, isAdmin, testController);

//protected  User route auth
router.get('/user-auth', requireSignIn, (req, res) => {
    res.status(200).send({ ok: true });
});

//protected  Admin route auth
router.get('/admin-auth', requireSignIn, isAdmin, (req, res) => {
    res.status(200).send({ ok: true });
});

//update profile
router.put('/profile', requireSignIn, updateProfileController);

//orders
router.get('/orders', requireSignIn, getOrderController);

//orders
router.get('/all-orders', requireSignIn, isAdmin, getAllOrderController);


//order status update
router.put("/order-status/:orderId", requireSignIn, orderStatusController)
export default router;
