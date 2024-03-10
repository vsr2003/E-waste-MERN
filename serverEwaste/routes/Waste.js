const express  = require('express');
const router = express.Router() ;

const {getEwastesCategory,getSelectedCategoryWasteInfo,getDeviceDetails,getDeviceDetailsById} = require('../controllers/Wastes');
const { addUserToReq } = require('../middlewares/auth');


router.get('/getEwastesCategory',getEwastesCategory);
router.post('/getSelectedCategoryWasteInfo',getSelectedCategoryWasteInfo);
router.post('/getDeviceDetails',getDeviceDetails);
router.post('/getDeviceDetailsById',getDeviceDetailsById);


module.exports = router ;