const {ContactusMailTemplate} = require('../MailTemplates/ContactUs');
const {sendEmail} = require("../utils/mailSender");

exports.sendContactMail = async(req,res) => {
    try {

        const {name,email,phone,message}  = req.body ;

        const mailHTML = ContactusMailTemplate({name,email,phone,message});

        sendEmail("vijayrathore2003@gmail.com",email,"ContactUs",mailHTML);

        return res.status(200).json({
            success:true,
            message:"Mail Sent Successfully",
        })
        
    } catch (error) {
        return res.status(500).json(
            {
                success:false,
                message:"Something went wrong.",
                error:error.message ,
            }
        )
    }
}

