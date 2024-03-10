import { useContext } from "react";
import { PiMapPinFill } from "react-icons/pi";
import { AppContext } from "../Context/AppContext";
import { useNavigate } from "react-router-dom";

import {motion} from 'framer-motion';

function EwasteCenterLabel({data}) {

    console.log(data);
    const{setCenterDetails, deviceDetails } = useContext(AppContext);

    const navigator = useNavigate();

    const bookAppointmentHandler = (center) => {
      setCenterDetails(center);
      navigator("/appointmentPage");
    }


  return (

    <motion.div
      initial={{x:100}}
      whileInView={{x:0}}
      transition={{duration:1, delay:.1, ease:"easeIn", type:"spring"}}
      data-scroll data-scroll-speed="5"
      className=" bg-white rounded-2xl m-2 flex flex-col shadow-md border hover:bg-green-100 select-none justify-start gap-3 p-2 ">

      <div className=" w-full flex justify-start ">

          {/* icon */}
          <PiMapPinFill size={25} className="text-red-500" />

          {/* name */}
          <div className=" w-[80%] ">
              <p className=' text-sm mb-1 '> {data.name} </p>
              <p className=" text-[10px] text-gray-500 leading-none "> {data.address} </p>
          </div>

      </div>

      <button 
        className= {`py-1 bg-blue-500 hover:bg-blue-600 w-[150px] rounded-lg text-white ml-1 text-xs ${deviceDetails ? "hover:cursor-pointer" : "cursor-not-allowed"}`} 
        onClick={()=>{bookAppointmentHandler(data)}} 
        disabled={ deviceDetails ? false : true }
        > Book Appointment </button>

      {
        !deviceDetails && <p className=" text-red-600 text-xs ">Select device to unlock Appointment button </p> 
      }

    </motion.div>
  )
}

export default EwasteCenterLabel