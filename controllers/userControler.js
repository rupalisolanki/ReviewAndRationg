const userSchema = require('../models/user_schema')
const bcrypt = require("bcrypt");
const userSignUp = async (req,res)=>
{   
    console.log(res,body)
    const {email,password}=req.body;
    try{
        const isUserExists = await userSchema.findone({email:email});
        if(isUserExists){
            return res.status(409).json
            ({
                status:false,
                error:"email already exists"
            });
        }
        const Salt = await bcrypt.gemSalt(10);
        userData.password=await bcrypt.hash(password,salt)
        await userData.save();
        return res.status(201).json({
            success:true,
            message:"registraion successfully",
        });
      

    }
    catch(err){
        res.status(500).json({
            status:false,
            error:err.message,
        })
    }


}

module.exports={userSignUp}