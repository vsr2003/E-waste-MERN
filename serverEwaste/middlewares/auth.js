const User = require('../models/User');
const jwt = require('jsonwebtoken');
const mongoose = require("mongoose");

exports.addUserToReq = async(req,res,next) => {
    try {

        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];

        // If no token is found
        if (!token) {
            return res.status(500).json({ message: 'Token not found in addUserToReq' });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        
        const userId = new mongoose.Types.ObjectId(decoded.id);

        const user = await User.findById(userId) ;

        if(!user)
        {
            return res.status(500).json({
                success:false,
                message:"User not found with this token in addUserToReq",
            })
        }
        
        req.user = user ;
    
        next();
        
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Some error in addUserToReq",
            error:error.message
    })
    }
}

exports.isAdmin = async(req,res,next) => {

    try {

        const user = req.user ;

        if(!user) {
            return res.status(500).json({
                success:false,
                message:"User not logged in.",
            })
        }

        if(user.role !== "Admin")
        {
            return res.status(500).json({
                success:false,
                message:"You are not allowed to visit this route.",
            })
        }

        return next() ;
        
    } catch (error) {
        res.status(500).json({
            message:"Some error in middleware addUserToReq",
        })
    }

}