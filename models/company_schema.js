const mongoose = require("mongoose");



const companySchema = new mongoose.Schema(
    {
        companyname:{
            type:String,
            require:true
        },
      
        location:{
            type:String,
            require:true
        },
        city:{
            type:String,
            require:true
        },
        founded:
        {
            type:String,
            require:true
        },
        
        
        isActive:
        {
            type:Boolean,
            require:true,
            default:true
        },
        user_id:{
          type:mongoose.Schema.ObjectId,
          ref:'users'
        },
        company_logo:{
            type:String,
        }


    });

    companySchema.set('timestamps',true)
    module.exports=mongoose.module("company",companySchema);



























