const mongoose = require("mongoose") ;

const wasteSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true,
    },

    category:{
        type:String,
        required:true,
    },

    preciousMetals:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"PreciousMetal",
        }
    ],

    modelNumber:{
        type:String,
        required:true,
    },
    
    greenPoints:{
        type:Number,
        required:true,
        default:0,
    }
    
}) ;

module.exports = mongoose.model("Waste",wasteSchema);


