import User from "../model/user.model.js"

export const signup = async (req, res)=>{
    const {name, email, password} = req.body;
    
   try {
        {/*if someone create a account and email exists */}
        const userExists = await User.findOne({email})
        if(userExists){
            return res.status(400).json({message:"User already exists"});
        }
        
        {/*create user account */}
        const user = await User.create({name, email, password});

        res.status(201).json({user, message:"user created successfully"});
    
     
   } catch (error) {
        res.status(500).json({message:error.message})
   }
}

export const login = async (req,res)=>{
    res.send("login router calles")
}

export const logout = async (req ,res)=>{
    res.send("logout router called")
}