const Like = require('../models/Like');

exports.addLike = async(req,res) => {
    try {

        const updatedLikes = await Like.findOneAndUpdate(
            {}, // Empty filter to update all documents
            { $inc: { likes: 1 } }, // Increment the likes attribute by 1
            { new: true } // Return the modified document rather than the original
        )

        return res.status(200).json({
            success:true,
            updatedLikes:updatedLikes,
        });
        
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Something went wrong in addLike backend",
            error:error.message,
        })
    }
}

exports.addDislike = async(req,res) => {
    try {

        const updatedLikes = await Like.findOneAndUpdate(
            {}, // Empty filter to update all documents
            { $inc : { likes: -1 } }, // Increment the likes attribute by -1
            { new: true } // Return the modified document rather than the original
        )

        return res.status(200).json({
            success:true,
            updatedLikes:updatedLikes,
        });
        
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Something went wrong in addDislike backend",
            error:error.message,
        })
    }
}

exports.getLikeCount = async(req,res) => {
    try {

        const like = await Like.findOne();

        if(!like)
        {
            return res.status(500).json({
                success:false,
                message:"Something went wrong in getLikeCount backend"
            })
        }

        const likeCount = like.likes ;

        return res.status(200).json({
            success:true,
            likeCount:likeCount,
        })
        
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Something went wrong in getLikeCount backend",
            error:error.message,
        })
    }
}