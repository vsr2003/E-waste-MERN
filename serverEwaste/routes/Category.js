const express  = require('express');
const router = express.Router() ;

const {getAllCategories} = require('../controllers/Category');


router.get("/getAllCategories",getAllCategories);


module.exports = router ;