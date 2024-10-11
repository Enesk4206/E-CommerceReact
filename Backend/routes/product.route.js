import express from "express";
import { getAllFeaturedProducts, getAllProducts , createProduct, deleteProduct,getRecommendedProducts, getProductsCategory,toggleFeaturedProduct} from "../controllers/product.controller.js";
import { protectRoute,adminRoute } from "../middleware/auth.middleware.js";

const router = express();

router.get("/",protectRoute,adminRoute,getAllProducts)
router.get("/featured" , getAllFeaturedProducts)
router.get("/category/:category",getProductsCategory)
router.get("/recommendations" , getRecommendedProducts)
router.patch("/:id",protectRoute, adminRoute,toggleFeaturedProduct)
router.post("/",protectRoute , adminRoute, createProduct)
router.delete("/:id",protectRoute , adminRoute, deleteProduct)

export default router;
