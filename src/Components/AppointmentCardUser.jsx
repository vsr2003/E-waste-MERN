import {motion} from 'framer-motion'
import { useContext, useState } from 'react';
import { AppContext } from '../Context/AppContext';
import AppointmentForm from './Appointment';
import AppointmentTableUser from './AppointmentTableUser';

function AppointmentCardUser({data}) {

    const {setDeviceDetails,setCenterDetails} = useContext(AppContext) ;
    const [showAppointmentInfo, setShowAppointmentInfo] = useState(false);
    
    const [timeDetails,setTimeDetails] = useState(null);

    let wasteInfo = null ;

    console.log("this is data => ",data);

    const viewMoreHandler = ()=> {

        setTimeDetails({bookDate: data.createdAt , appointmentDate:data.date});

        setDevice() ;
        setCenter() ;
        
    }

    const setDevice = async() => {

        const response = await fetch("http://localhost:4000/waste/getDeviceDetailsById",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 
            },
            body:  JSON.stringify({wasteId:data.waste}),
        });

        if(!response.ok){
            console.log("not ok in setDevice frontend");
        }
        else{
            const data = await response.json();
            console.log("setting this device in appointmentcard",data.waste);
            wasteInfo = data.waste ;
            setDeviceDetails(data.waste);
            setShowAppointmentInfo(true);
        }
    }

    const setCenter = () => {
        const center = {
            name: data.centerName,
            address:data.centerAddress,
            id:data.centerId,
        }
        setCenterDetails(center);
    }

    

  return (
    <motion.div
        initial={{x:50}}
        whileInView={{x:0}}
        transition={{delay:.2, duration:1, type:"spring"}}

        className=" w-[80%] bg-white group transition-all shadow-md hover:shadow-xl flex flex-col  border-2 rounded-2xl p-5 ">

        <table className=" w-full  ">

            <tr className="">
                <td className="text-sm font-semibold p-1 ">Center Id :</td>
                <td className="text-sm " >{data.centerId}</td>
            </tr>

            <tr>
                <td className="text-sm font-semibold p-1 ">Center Name :</td>
                <td className="text-sm " >{data.centerName}</td>
            </tr>

            <tr>
                <td className="text-sm font-semibold p-1 ">Center Address :</td>
                <td className="text-sm w-[80%] ">{data.centerAddress}</td>
            </tr>

        </table>

        {/* <button
         onClick={viewMoreHandler}
         className=" py-1 mt-2 group-hover:block hidden transition-all rounded-xl hover:bg-blue-600 text-white w-[100px] bg-blue-500 "> View More </button> */}

        {
            // showAppointmentInfo && <div className='w-full h-full absolute top-0 left-0 '> <AppointmentTableUser timeDetails={timeDetails} wasteInfo={wasteInfo}  /> </div>
        }
        
    </motion.div>
  )
}

export default AppointmentCardUser