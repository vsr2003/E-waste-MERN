const express = require("express");
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');

const DataBaseConnect = require("./config/databaseConnect");

require('dotenv').config();

const admin = require("./routes/Admin");
const auth = require("./routes/auth");
const waste = require("./routes/Waste");
const category = require("./routes/Category");
const appointmentRoutes = require("./routes/Appointment.Routes");
const educationalPopup = require("./routes/EducationalPopup");
const profile = require("./routes/Profile");
const like = require("./routes/Like");
const contactUs = require("./routes/Contactus");


// db connnection 
DataBaseConnect();

// middlewares
app.use(express.json()) ;
app.use(cors());
app.use(cookieParser());


// routes
app.use("/auth",auth) ;
app.use("/admin",admin);
app.use("/waste",waste);
app.use("/category",category)
app.use("/appointment",appointmentRoutes);
app.use("/educationalPopup",educationalPopup);
app.use("/profile",profile);
app.use("/like",like);
app.use("/contact",contactUs);


const PORT = process.env.PORT  ;
app.listen(PORT ,()=>{
    console.log("app listening to port 4000") ;
})

