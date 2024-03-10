const express  = require('express');
const router = express.Router() ;


const {addAppointment,getAppointmentDetails,getAppointmentDetailsByTicketOrEmail,processAppointment} = require('../controllers/Appointment.Controller');


router.post("/addAppointment",addAppointment);
router.post("/getAppointmentDetails",getAppointmentDetails);
router.post("/getAppointmentDetailsByTicketOrEmail",getAppointmentDetailsByTicketOrEmail);
router.post("/processAppointment",processAppointment);


module.exports = router ;