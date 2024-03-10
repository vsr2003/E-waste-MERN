import {useState,useEffect, useContext} from 'react'
import { AppContext } from '../Context/AppContext';
import AppointmentCardUser from '../Components/AppointmentCardUser';

function MyAppointmentPage() {

  const {user} = useContext(AppContext);

  
  const [appointmentData,setAppointmentData] = useState(null);

  useEffect(()=>{
    sendAppointmentDetailsRequest(user._id);
  },[]);

  const sendAppointmentDetailsRequest = async(userId) => 
  {
        const response = await fetch("http://localhost:4000/appointment/getAppointmentDetails",{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', 
        },
        body:  JSON.stringify({userId:userId}),
        });

        if(!response.ok){
            console.log("not ok in sendAppointmentDetailsRequest");
            setAppointmentData(null);
        }
        else{
          
          const data = await response.json() ; 
          setAppointmentData(data.appointmentDetails);
        }
  }


  return (

    <div className=" relative h-full w-full flex flex-col gap-5 justify-center items-center ">

    {
      appointmentData ?

        appointmentData.map((obj)=>(
          <AppointmentCardUser data={obj} />
        ))
        
        :

        <p className=" text-red-700 font-montserrat font-semibold ">No Appointment Data Found</p>
    }
         
    </div>

  )
}

export default MyAppointmentPage