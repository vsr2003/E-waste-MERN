const mongoose = require("mongoose") ;

const LikeSchema = new mongoose.Schema({

   likes : {
    type:Number ,
    default:0
   }

}) ;

module.exports = mongoose.model("Like",LikeSchema);
