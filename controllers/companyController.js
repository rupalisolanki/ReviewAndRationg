const companySchema = require("../models/company_schema");
//company create api

const createCompany = async (req, res) => {
  const companyData = new companySchema(req.body);
  console.log(companyData);
  try {
    const isCompanyExists = await companySchema.findOne({
      companyname: req.body.companyname,
    });
    if (isCompanyExists) {
      res.status(409).json({
        status: false,
        console: "company already exists",
      });
    } else {
      companyData.company_logo = `uploads/${req.file.filename}`;
      await companyData.save();
      res.status(201).json({
        status: true,
        message: "comapny Created",
        data: companyData,
      });
    }
  } catch (err) {
    res.status(500).json({
      status: false,
      error: err.message,
    });
  }
};
//companylist api 
const companyList = async (req , res) => {
  try {
    const companyList = await companySchema.find(); 
    if (companyList != null) {
      res.status(200).json({
        status: true,
        message: "sucessfully listed",
        company: companyList,
      });
    } else {
      res.status(409).json({
        status: false,
        message: "company is not found",
      });
    }
  } catch (err) {
    res.status(500).json({
      status: false,
      error: err.message,
    });
  }
};
// serach company api 
const companySearch = async (req, res)=>{
  try {
    const {city} = req.params;
    console.log(city);
    const companySearch = await companySchema.find({city:city});
    if(companySearch != null){
      res.status(200).json({
        status: true,
        message:`total ${companySearch.length} find compnay sucessfully`,
        company:companySearch,
       
      });
    }else {
      res.status(409).json({
        status: false,
        message:"city is not found",
      });
    }

  } catch (err) {
    res.status(500).json({
      status: false,
      error:err.message,
    });
  }

};
//companydetails api

const companyReviewcomment = async (req,res) =>{
  let id =req.params.id;
  try{
  const companyDetails = await company.findById(id).lean();
  const comment = await ReviewAndRating.find({company_id:`${id}`})
  .populate({
      path:"user_id",
      select:"name profilPic",
  }).populate({
      path:"company_id",
      select:"_id",
  });
  const commentAndCompanyName = {
      companyDetails : companyDetails,
      comments:comment,
  };
  return res.status(200).json({
      companyDetails:commentAndCompanyName,
      status: true,
      message:"sucessfully",
  
  })


  }catch(error){
      res.status(500).json({
          status:false,
          error:err.message,
      });
  }

};


module.exports = {
  companyList,
  createCompany,
  companySearch,
companyReviewcomment,
};
