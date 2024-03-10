import { useState } from "react"
import AppointmentProcessCard from "../Components/AppointmentProcessCard";

function AdminProcessAppointmentPage() {


    const [formData,setFormData] = useState({
        ticket:'',
        email:'',
    });
    const [appointDetails,setAppointDetails] = useState(null);

    function handleChange(e)
    {
        const {name,value} = e.target;

        setFormData({
            ...formData,
            [name] : value
        });
    }

    function handleSubmit()
    {
        console.log(formData);
        getAppointmentDetails(formData);
        
    }

    async function getAppointmentDetails(formData)
    {
        const response = await fetch("http://localhost:4000/appointment/getAppointmentDetailsByTicketOrEmail",{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', 
        },
        body:  JSON.stringify(formData),
        });

        if(!response.ok){
            console.log("not ok in getAppointmentDetails AdminProcessAppointmentPage");
        }
        else{
            const data = await response.json();
            console.log(data.appointments);
            // console.log(data.appointDetails);
            setAppointDetails(data.appointments);
        }
    }


  return (
    <div className=" mt-[12vh] w-full flex flex-col gap-10 h-screen items-center ">
      

      <div className=" w-[80%]  mt-[10vh] flex justify-between ">

        <input type="text"
            name="ticket"
            value={formData.ticket}
            placeholder="Enter Ticket No."
            onChange={(e)=>{handleChange(e)}}
            className=" w-[200px] shadow-md border border-gray-300 " 
        />

        <input type="email"
            name="email"
            value={formData.email}
            placeholder="Enter Email"
            onChange={(e)=>{handleChange(e)}}
            className=" w-[200px] shadow-md border border-gray-300 " 
        />

        <button
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Search
        </button>

      </div>


      <div className=" w-full flex flex-col items-center gap-[5vh] ">
        {
            appointDetails ? 

            appointDetails.map((appointment) => (
                <AppointmentProcessCard appointment={appointment}  />
            ))

            :

            <p className=" text-red-600 ">Please fill the fields</p>
        }
        
      </div>
      
      
    </div>
  )
}

export default AdminProcessAppointmentPage