const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { default: mongoose } = require('mongoose');

require('dotenv').config();


exports.loginHandler = async(req,res) => {

    try {

        const {email,password} = req.body ;

        const user = await User.findOne({ email });

        console.log(user);

        // checking if user exits or not
        if(!user)
        {
            return res.status(500).json({
                success:false,
                message:"User not exits",
            })
        }

        console.log("check 1")

        const isPasswordMatched = await bcrypt.compare(password,user.password);

        // checking password is correct or not
        if(!isPasswordMatched)
        {
            return res.status(500).json({
                success:false,
                message:"Password not matched",
            })
        }


        console.log("check 2")
        // if all success then , return response

        // const payload = { id: user._id, role:user.role  };
        // console.log("Setting this in payload",payload);

        const token = jwt.sign({ id: user._id, role:user.role  }, process.env.JWT_SECRET_KEY);

        console.log("this is token :",token);
        
        console.log("check 3")

        const expiryDate = new Date(Date.now() + 24 * 60 * 60 * 1000);
        
        res.cookie('token', token, { httpOnly: true});

        return res.status(200).json({
            success:true,
            message:"User Logged in Successfully",
            user:user,
            token:token,
        });

    } catch (error) {
        return res.status(402).json({
            success:false,
            message:"Some error in loginHandler",
        })
    }
}

exports.signupHandler = async(req,res) => {
    try {

        const {email,password,Name,role} = req.body ;
        
        
        // some validations
        if(!email || !password || !Name)
        {
            return res.status(500).json({
                success:false,
                message:"Please fill all details correctly",
            })
        }


        // checking if user already exits or not
        const user = await User.findOne({email}) ;
        if(user)
        {
            return res.status(500).json({
                success:false,
                message:"User already registered",
            })
        }

        
        // encrypting user password ;
        const hashedPassword = await bcrypt.hash(password,10);

        
        const updatedRole = (role==="Admin" ? "Admin" : "Normal") ;
        
        const savedUser = await User.create({
            email,
            password:hashedPassword,
            role:updatedRole,
            Name:Name
        });


        return res.status(200).json({
            success:true,
            message:"User SignUp Successfull",
            user:savedUser,
        })

    } catch (error) {
        return res.status(403).json({
                success:false,
                message:"Some error in signupHandler",
                error : error.message,
        })
    }
}


exports.verifyToken = async(req,res) => {
    try {

        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];

        // If no token is found
        if (!token) {
            return res.status(500).json({ message: 'Token not found in verifyToken' });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        
        const userId = new mongoose.Types.ObjectId(decoded.id);

        const user = await User.findById(userId) ;

        if(!user)
        {
            return res.status(500).json({
                success:false,
                message:"User not found with this token",
            })
        }
          
        return res.status(200).json({
            success:true,
            message:"Token Verified",
            user:user
        })
        
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Some error in verifyToken handler",
            error:error.message
    })
    }
}





