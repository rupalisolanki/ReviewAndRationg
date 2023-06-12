const user = require('../models/user_schema')
exports.IsUser = async (req,res,next) =>{
    if(req.body.role === "user"){
        console.log('if excuted')
        next();
    }else{
return res.status(401).send("unathorized");
    }
}

exports.IsAdmin = async (req,res,next) =>{
    if(req.user.role === "admin"){
        next()
    }
    return res.status(401).send("unathorized");
}
