
exports.getProfileDetails = async(req,res) => {
    try {

        if(! (req.user))
        {
            return res.status(500).json({
                success:false,
                message:"User not logged in getProfileDetails backend"
            })
        }
        
        const {email,Name,greenPoints,role} = req.user ;

        const ProfileDetails = {
            email:email,
            Name:Name,
            greenPoints:greenPoints,
            role:role,
        }

        return res.status(200).json({
            success:true,
            ProfileDetails:ProfileDetails,
            message:"Profile Details Found"
        })

    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Something went wrong in getProfileDetails backend",
            error:error.message ,
        })
    }
}