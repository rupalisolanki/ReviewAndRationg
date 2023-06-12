const userSchema = require("../models/user_schema");

const checkExistUser = async (req ,res) =>{
    const {email} = rea.body;
    const isUserExists = await userSchema.findOne({email:email});
    if(isUserExists){
        return res.status(400).json({
            status: "failed",
            message:"user with this email already exist ",
        });
    }else {
        next();
    }
}
module.exports = {
    checkExistUser
}
