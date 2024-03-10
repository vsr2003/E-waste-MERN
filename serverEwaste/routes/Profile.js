const express  = require('express');
const router = express.Router() ;

const {getProfileDetails} = require('../controllers/Profile');
const { addUserToReq } = require('../middlewares/auth');

router.get('/getProfileDetails',addUserToReq,getProfileDetails);

module.exports = router ;