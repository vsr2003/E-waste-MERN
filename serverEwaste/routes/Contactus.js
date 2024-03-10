const express  = require('express');
const router = express.Router() ;



const {sendContactMail} = require('../controllers/ContactUs');


router.post('/sendContactMail',sendContactMail);





module.exports = router ;