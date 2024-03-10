const express  = require('express');
const router = express.Router() ;

const {addLike,addDislike,getLikeCount} = require('../controllers/Like');

router.post('/addLike',addLike);
router.post('/addDislike',addDislike);
router.get('/getLikeCount',getLikeCount);


module.exports = router ;