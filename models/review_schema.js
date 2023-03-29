const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        subject:{
            type:String,
            require:true
        },
      
        review:{
            type:String,
            require:true
        },
        ratting:{
            type:String,
            require:true
        },
        isActive:
        {
            type:Boolean,
            require:true,
            default:true
        },
        company_id:
        {
            type:mongoose.Schema.type.objectId,
            ref:'company'
        }
    }
);
reviewSchema.set('timestamps',true)
module.exports = mongoose.model('review',reciewSchema)