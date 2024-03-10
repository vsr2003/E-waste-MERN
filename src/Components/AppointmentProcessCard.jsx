import { useRef, useState } from "react"
import {toast} from 'react-toastify'

function AppointmentProcessCard({appointment}) {

    const [edit,setEdit] = useState(false) ;
    const successRef = useRef(null);

    const [greenPoints,setGreenPoints] = useState(appointment.waste.greenPoints);

    console.log("this is app details we aare getting => ",appointment);

    function handleSubmit () {
        console.log(greenPoints);
        sendProcessRequest(greenPoints);
    }


    const sendProcessRequest = async(greenPoints) => {

        console.log("dt -> ", typeof appointment.waste.greenPoints)
        const response = await fetch("http://localhost:4000/appointment/processAppointment",{
    
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 
            },
            body:  JSON.stringify({greenPoints:greenPoints,userId:appointment.user._id, appointmentId:appointment._id}),
    
        });
    
        if(!response.ok){
            console.log("not ok in sendProcessRequest");
            toast.error("Process Failed");
        }
        else{
            const data = await response.json();
            console.log("Got this data in sendProcessRequest:",data);
            
            const successWord = successRef.current ;
            successWord.style.display = "block" ;
            toast.success("Processed");
        }
    
      }

  return (


    <div className=" w-[80%] shadow-lg  ">

        <table className=" w-full  ">

            <tr className="">
                <td className="text-sm font-semibold p-1 ">Center Id :</td>
                <td className="text-sm " >{appointment.centerId}</td>
            </tr>

            <tr>
                <td className="text-sm font-semibold p-1 ">Center Name :</td>
                <td className="text-sm " >{appointment.centerName}</td>
            </tr>

            <tr>
                <td className="text-sm font-semibold p-1 ">Center Address :</td>
                <td className="text-sm w-[80%] ">{appointment.centerAddress}</td>
            </tr>

            <tr>
                <td className="text-sm font-semibold p-1 ">Waste :</td>
                <td className="text-sm w-[80%] ">{appointment.waste.name}</td>
            </tr>

            <tr>
                <td className="text-sm font-semibold p-1 ">Model Number :</td>
                <td className="text-sm w-[80%] ">{appointment.waste.modelNumber}</td>
            </tr>

            <tr>
                <td className="text-sm font-semibold p-1">Precious Metals</td>
            </tr>
            {
                appointment.waste.preciousMetals.map((metal)=>(
                    <tr>
                        <td className="text-sm font-semibold p-1 ">{metal.name}</td>
                        <td className="text-sm w-[80%] ">{metal.weight}</td>
                    </tr>
                ))
            }

            <tr>
                <td>Green Points</td>

                {
                    edit ? <td> <input type="number" name="greenPoints" value={greenPoints} onChange={(e) => setGreenPoints(e.target.value)} /> </td>
                    : 
                    <td>{appointment.waste.greenPoints}</td>
                }
                
            </tr>

            <tr>
                <td> <button className=" bg-green-500 rounded-xl p-2 " onClick={()=>{setEdit(true)}} >Edit GP</button> </td>
                <td> <button className=" bg-blue-700 rounded-xl text-white p-2 " onClick={handleSubmit}  >  Mark This Done  </button> </td>
                <td> <span ref={successRef} className=" text-green-600 font-bold hidden "> SUCCESS </span> </td>
            </tr>

        </table>
        
    </div>
  )
}

export default AppointmentProcessCard