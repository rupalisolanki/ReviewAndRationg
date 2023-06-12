const express = require("express")
const review = require('../controllers/reviewController')

const router = express.Router();

router.post("/addreview",review.addreview)

module.exports = router;
