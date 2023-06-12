const express =require("express");
const router = express.Router();
const reviewCrud = require("../controllers/reviewCrud");



router.post('/create',reviewCrud.create);
router.get('/view',reviewCrud.viewReview);
router.delete('/delete/:id',reviewCrud.removeReview);
router.patch('/update/:id',reviewCrud.updateReview);


module.exports = router;