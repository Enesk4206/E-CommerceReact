import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.route.js"
import productRoutes from "./routes/product.route.js"
import cartRoutes from "./routes/cart.route.js"
import couponRoutes from "./routes/coupon.route.js"
import paymentRoutes from "./routes/payment.route.js"
import analyticsRoutes from ""

import { connectDB } from "./lib/db.js";

{/*dotenv read .env extension codes procces.env */}
dotenv.config();

const app = express();
const port = process.env.PORT || 5000

{/* allows you to parse the body of the request  */}
app.use(express.json());
app.use(cookieParser());


{/* http://localhost/api/auth/CURRENTROUTERADDRESS */}
app.use("/api/auth",authRoutes)  
app.use("/api/products",productRoutes)
app.use("/api/cart",cartRoutes)
app.use("/api/coupons",couponRoutes)
app.use("/api/payments",paymentRoutes)
app.use("/api/analytics",analyticsRoutes)



app.listen(port ,()=>{
    console.log("Server is running on http://localhost:"+port)
    connectDB();
})