import { useContext } from "react";
import { AppContext } from "../Context/AppContext";


function AppointmentTableUser({timeDetails,wasteInfo}) {

    const {deviceDetails,centerDetails,user} = useContext(AppContext);

    console.log("in AppointmentTableUser");
    console.log("device => ",wasteInfo);
    console.log("center => ",centerDetails);
    console.log("time => ",timeDetails);

  return (
    <div className=" z-[99] bg-blue-300 text-white w-full flex flex-col " >

        <p className=' py-1 bg-white w-[50%] text-center font-semibold '>APPOINTMENT INFORMATION</p>
            
            <table className="w-[50%] border">
                <caption className="text-center bg-gray-200 py-1 font-bold">User Details</caption>
                <tbody>
                <tr>
                    <td className="border px-4 py-2">Your Name:</td>
                    <td className="border px-4 py-2"> {user.name} </td> 
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
                                        <th className="border px-4 py-2">Name</th>
                                        <th className="border px-4 py-2">Weight</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {deviceDetails.preciousMetals.map((metal, index) => (
                                        <tr key={index}>
                                        <td className="border px-4 py-2">{metal.name}</td>
                                        <td className="border px-4 py-2">{metal.weight}</td>
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


    </div>
  )

}

export default AppointmentTableUser