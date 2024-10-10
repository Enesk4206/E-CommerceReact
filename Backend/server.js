import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.route.js"
import productRoutes from "./routes/product.route.js"
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



app.listen(port ,()=>{
    console.log("Server is running on http://localhost:"+port)
    connectDB();
})