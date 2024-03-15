const express  = require('express');
const router = express.Router() ;

const {addUserToReq,isAdmin} = require('../middlewares/auth') ;

const {addEwasteDetails,addCategory,bulkEwasteAdd} = require('../controllers/User');


router.post('/add_ewaste',addEwasteDetails);
router.post('/addCategory',addCategory);
router.post('/bulkEwasteAdd',bulkEwasteAdd);




module.exports = router ;