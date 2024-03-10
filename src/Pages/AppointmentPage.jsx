import { useContext, useEffect } from "react"
import AppointmentForm from "../Components/Appointment"
import { AppContext } from "../Context/AppContext"


function AppointmentPage() {

    const {setDeviceDetails} = useContext(AppContext);

    useEffect(()=>{

        return ()=>{
            setDeviceDetails(null);
        }
    },[]);


  return (
    <div className=" w-full mt-[12vh]  ">

        <AppointmentForm />
        
    </div>
  )
}

export default AppointmentPage