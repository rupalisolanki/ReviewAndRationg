const express = require("express");
const companyRouter = require("../router/companyRouter");
const userRouter = require("../router/userRouters");
const reviewRouter = require("../router/reviewRouter");
const crudRouter = require("../router/crudRouter");

const router = express.Router();

router.use("/user", userRouter);
router.use("/company", companyRouter);
router.use("/review",reviewRouter);
router.use("/crud",crudRouter);

module.exports = router;
