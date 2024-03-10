const mongoose = require("mongoose") ;

const appointmentSchema = new mongoose.Schema({

   centerId : {
    type:String,
    required : true ,
   },

   centerName:{
    type:String,
    required:true,
   },

   centerAddress:{
    type:String,
    required:true,
   },

   date:{
      type:Date,
      required:true,
   },

   user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true,
   },

   waste:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"Waste",
   },

   ticket:{
      type:String,
      required:true,
   }

},{timestamps:true}) ;

module.exports = mongoose.model("Appointment",appointmentSchema);

