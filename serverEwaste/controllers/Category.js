const Category = require("../models/Category");


exports.getAllCategories = async (req,res) => {
    try {

        const allCategories = await Category.find({}) ;

        return res.status(200).json({
            success:true,
            message:"All Category Details are here :",
            allCategories:allCategories,
        })
        
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Something went wrong in getAllCategories handler"
        })
    }
}
