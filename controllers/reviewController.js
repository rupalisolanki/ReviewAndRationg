const reviewSchema = require('../models/review_schema');
const addreview = async (req, res) => {
    const reviewData = new reviewSchema(req.body);
    reviewData.sava();
    try {
        if(review!= null)
        {
           await reviewData.save();
           res.status(201).json({
            status: true,
            message: "review add sucessfully",

        });
    }
}catch(err){
    res.status(500).json({
        status: false,
        error: err.message,
      });

};
}

module.exports={
    addreview,
}
