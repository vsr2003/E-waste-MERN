const mongoose = require("mongoose") ;

const educationalPopupSchema = new mongoose.Schema({

   description:{
    type:String,
   },

   title:{
    type:String,
    required:true,
   },


}) ;

module.exports = mongoose.model("EducationalPopup",educationalPopupSchema);
