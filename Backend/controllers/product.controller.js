import { redis } from "../lib/redis.js";
import Product from "../model/product.model.js"


export const getAllProducts = async (req, res )=>{
    try {
        const products = await Product.find({}); //find all products
        res.json({products});

    } catch (error) {
        console.log("Error in getAllProdcts controller" , error.message);
        res.status(500).json({message: "Server error" , error : error.message})
    }
}


export const getAllFeaturedProducts = async(req , res)=>{
    try {
        let featuredProducts = await redis.get("featured_products");
        if(featuredProducts){
            return res.json(JSON.parse(featuredProducts))
        }

        //if not in redis, fetch from mongodb
        // lean() use low memory and dont get unuseful datas
        featuredProducts = await Product.find({isFeatured:true}).lean(); 

        if(!featuredProducts){
            return res.status(401).json({message: "No featured products found"});
        }

        //store in  redis for future quick access

        await redis.set("featured_products",JSON.stringify(featuredProducts))

        res.json(featuredProducts)

    } catch (error) {
        console.log("Error in getFeaturedProducts controller" , error.message);
        res.status(500).json({message: "Server error" , error : error.message})
    }
}

export const createProduct = async(req , res) =>{
    
}