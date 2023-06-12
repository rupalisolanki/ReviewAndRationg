const express = require("express");

// const company = require("../models/review_schema");
const review_schema = require("../models/review_schema");
// const { error } = require("@hapi/joi/lib/base");

//create api
const create = async (req, res) => {
  const reviewData = new review_schema(req.body);
  console.log(reviewData);
  try {
    const review = await reviewData.save();
    res.status(201).json({
      status: true,
      message: "create sucessfully",
      data: review,
    });
  } catch (error) {
    res.status(500).json({
      status: true,
      error: error.message,
    });
  }
};

//read review

const viewReview = async (req, res) => {
  //console.log(reviewData);
  try {
    const review = await review_schema.find();
    res.status(200).json({
      status: true,
      message: "view sucessfully",
      data: review,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      error: error.message,
    });
  }
};

//delete api
const removeReview = async(req,res)=>{
 
  try{
    const review = await review_schema.findByIdAndDelete(req.params.id);
    if(removeReview){

      res.status(200).json({
        status : true,
        message : 'delete sucessfully',
        data:review,
      

      });
  }else{
    res.status(404).json({
      status:false,
      message:"review not find"
    })
  }
}
  catch(error){
    res.status(500).json({
      status: false,
      error:error.message,
    });
  }
}
//update api
const updateReview = async (req,res)=>{
  try{
    const review = await review_schema.findByIdAndUpdate(req.params.id);
    if(updateReview){
      res.status(201).json({
        status: true,
        message :"update sucessfully",
        data:review,
      });

    } else{
      res.status(401).json({
        status: false,
        message :"update is not found",
      })
    }
  }
  catch(error){
    res.status(500).json({
      status : false,
      error:error.message,

    });
  }

}
module.exports= {
  create,
  viewReview,
  removeReview,
  updateReview,
};
