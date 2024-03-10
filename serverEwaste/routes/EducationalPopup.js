const express  = require('express');
const router = express.Router() ;

const {addEducationalPopup,getAllEducationalPopupDetails} = require('../controllers/EducationalPopup');


router.post("/addEducationalPopup",addEducationalPopup);
router.get("/getAllEducationalPopupDetails",getAllEducationalPopupDetails);


module.exports = router ;