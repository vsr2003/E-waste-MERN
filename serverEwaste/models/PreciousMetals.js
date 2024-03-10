const mongoose = require("mongoose") ;

const preciousMetalsSchema = new mongoose.Schema({

   name:{type:String, required:true, trim:true,},
   weight:{type:Number, required:true,}

},{timestamps:true}) ;


module.exports = mongoose.model("PreciousMetal",preciousMetalsSchema);
