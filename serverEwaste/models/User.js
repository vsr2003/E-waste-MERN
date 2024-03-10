const mongoose = require("mongoose") ;

const Schema = mongoose.Schema;

const UserSchema = new Schema({

    Name:{
        type:String,
        trim:true,
    },

    email : { 
        type:String,
        required:true,
        unique:true,
    },

    password : {
        type:String,
        required:true,
    },

    
    greenPoints : {
        type : Number,
        default : 0,
    },

    role : {
        type : String,
        required:true,
        enum : ["Admin","Normal"],
    },

    wastes : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Waste",
        }
    ],

    appointments : [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Appointment"
        }
    ]

}) ;

module.exports = mongoose.model("User",UserSchema);
