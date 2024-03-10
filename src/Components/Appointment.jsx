import { useContext, useState,useEffect } from 'react';
import { AppContext } from '../Context/AppContext';
import {toast} from "react-toastify";
import { useNavigate } from 'react-router-dom';


const AppointmentForm = () => {

    const navigator = useNavigate();
    const {centerDetails,deviceDetails,user,setDeviceDetails} = useContext(AppContext);
    console.log(user);

    const [formData, setFormData] = useState({
        userId: user._id,
        wasteId: deviceDetails._id,
        centerName: centerDetails.name,
        centerAddress: centerDetails.address,
        centerId: centerDetails.id,
        date: '',
        time: '',
    });
  
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
        ...prevState,
        [name]: value
        }));
    };

    const sendAppointmentRequest = async(appointmentData) => {
        const response = await fetch("http://localhost:4000/appointment/addAppointment",{

            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 
            },
            body:  JSON.stringify(appointmentData),

        });

        if(!response.ok){
            console.log("not ok in sendAppointmentRequest");
        }
        else{
            const data = await response.json();
            if(data.success)
            {

                console.log(data);
                toast.success("Appointment Booked",{position:"top-center"});
                navigator("/");
            }
            else{
                toast.error("Booking Failed",{position:"top-center"});
                console.log("appointment Failed");
            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

        sendAppointmentRequest(formData);

    };

   
    useEffect(()=>{

        return ()=>{
            setDeviceDetails(null);
        }
    },[]);

  return (
    
        <div className=' w-full flex flex-col gap-5 items-center ' >

            <p className=' py-1 bg-white w-[50%] text-center font-semibold '>APPOINTMENT INFORMATION</p>
            
            <table className="w-[50%] border">
                <caption className="text-center bg-gray-200 py-1 font-bold">User Details</caption>
                <tbody>
                <tr>
                    <td className="border px-4 py-2">Your Name:</td>
                    <td className="border px-4 py-2"> {user.Name} </td> 
                </tr>
                <tr>
                    <td className="border px-4 py-2">Your Email:</td>
                    <td className="border px-4 py-2"> {user.email} </td>
                </tr>
                </tbody>
            </table>

            <table className="w-[50%] border">

                <caption className="text-center bg-gray-200 py-1 font-bold">E-waste Details</caption>

                <tbody>

                    <tr>
                        <td className="border px-4 py-2">Name:</td>
                        <td className="border px-4 py-2">{deviceDetails.name}</td>
                    </tr>

                    <tr>
                        <td className="border px-4 py-2">Category:</td>
                        <td className="border px-4 py-2">{deviceDetails.category}</td>
                    </tr>

                    <tr>
                        <td className="border px-4 py-2">Green Points:</td>
                        <td className="border px-4 py-2"> {deviceDetails.greenPoints} </td>
                    </tr>

                    <label className=" font-semibold px-4 py-2">Precious Metals:</label>
                    
                    <tr>
                        <td className="border px-4 py-2" colSpan="4">
                                <table className="w-full border">
                                    <thead>
                                    <tr>
                                        <th className="border px-4 py-2 text-xs">Name</th>
                                        <th className="border px-4 py-2 text-xs">Weight</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {deviceDetails.preciousMetals.map((metal, index) => (
                                        <tr key={index}>
                                        <td className="border px-4 py-2">{metal.name}</td>
                                        <td className="border px-4 py-2">{metal.weight} gm</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                        </td>
                    </tr>

                </tbody>
            </table>

            <table className="w-[50%] border">
                <caption className="text-center bg-gray-200 py-1 font-bold">Center Details</caption>
                <tbody>
                <tr>
                    <td className="border px-4 py-2">Center Name:</td>
                    <td className="border px-4 py-2">{centerDetails.name}</td>
                </tr>
                <tr>
                    <td className="border px-4 py-2">Center Id:</td>
                    <td className="border px-4 py-2">{centerDetails.id}</td>
                </tr>
                <tr>
                    <td className="border px-4 py-2">Center Address:</td>
                    <td className="border px-4 py-2">{centerDetails.address}</td>
                </tr>
                </tbody>
            </table>

            <form onSubmit={handleSubmit} className="w-[50%] flex flex-col gap-5 items-center ">

                <div className=' w-full flex gap-10 '>

                    <div className=' w-[50%] '>
                        <label htmlFor="date" className="block">Date:</label>
                        <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full bg-gray-100 rounded px-3 py-2"
                        />
                    </div>

                    <div className=' w-[50%] ' >
                        <label htmlFor="time" className="block">Time:</label>
                        <input
                        type="time"
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full bg-gray-100 rounded px-3 py-2"
                        />
                    </div>

                </div>

            </form>

            <button 
                onClick={handleSubmit}
                className="bg-blue-500 w-[150px] hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Book Appointment</button>

        </div>
    
  );
};

export default AppointmentForm;
