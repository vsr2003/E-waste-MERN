const express  = require('express');
const router = express.Router() ;

const {loginHandler,signupHandler,verifyToken} = require('../controllers/auth');



router.post('/signup',signupHandler);
router.post('/login',loginHandler);
router.post('/verifyToken',verifyToken);
// router.post('/auth/getUser',addUserToReq,getUser)


module.exports = router ;