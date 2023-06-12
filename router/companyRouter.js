const companyRouter = require("express").Router();
const upload = require("../middleware/imageStorage");
const company = require("../controllers/companyController");
const {IsUser,IsAdmin} = require('../middleware/authorization');
const { checkUserAuth } = require("../middleware/auth_midddleware");


companyRouter.get('/Search/:city',company.companySearch);
companyRouter.get('Review/:id',company.companyReviewcomment);
companyRouter.get("company/:id/review",company.companyReviewcomment);
companyRouter.get("/companylist",IsUser, checkUserAuth,company.companyList);
companyRouter.post("/createcompany",upload.single("company_logo"),company.createCompany);

module.exports = companyRouter;
