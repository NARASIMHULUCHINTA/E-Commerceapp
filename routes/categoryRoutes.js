import express from "express";
import { isAdmin, requireSignIn } from './../middleware/authMiddleware.js';
import { categoryControlller, createCategoryController, singleCategoryController, updateCategoryController } from "../controller/CategoryController.js";
import { deleteCategoryController } from "../controller/CategoryController.js";

const router = express.Router();

//routes
//create Category
router.post('/create-category', requireSignIn, isAdmin, createCategoryController);

//update Category
router.put('/update-category/:id', requireSignIn, isAdmin, updateCategoryController);

//getAll Category
router.get("/get-category", categoryControlller);

//single Category
router.get('/single-category/:slug', singleCategoryController);

//delete category
router.delete("/delete-category/:id", requireSignIn, isAdmin, deleteCategoryController);


export default router;