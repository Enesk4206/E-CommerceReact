import express from "express";
import { getAllFeaturedProducts, getAllProducts , createProduct } from "../controllers/product.controller.js";
import { protectRoute,adminRoute } from "../middleware/auth.middleware.js";

const router = express();

router.get("/",protectRoute,adminRoute,getAllProducts)
router.get("/featured" , getAllFeaturedProducts)
router.post("/",protectRoute , adminRoute, createProduct)

export default router;