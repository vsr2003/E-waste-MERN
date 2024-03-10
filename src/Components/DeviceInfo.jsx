import '../Styles/DeviceInfo.css';
import { useEffect, useRef } from 'react';
import {motion} from 'framer-motion';

function DeviceInfo({ data }) {

  const detailViewRef = useRef(null);


  useEffect(()=>{

    


  },[]);

  console.log("got this device Details : ",data);

  const { name, category, modelNumber, preciousMetals,greenPoints } = data;

  return (
    <motion.div
      initial={{x:50}}
      whileInView={{x:0}}
      transition={{duration:1, delay:.2, type:"spring",}}

     className="overflow-x-auto w-[40%] border border-black  flex flex-col items-center ">

      <p className=' w-full text-center text-[5vh] py-1 bg-green-900 text-white font-semibold '> Waste Details </p>

      <table ref={detailViewRef} className=" w-full bg-white  ">

        <tbody className=' w-full  '>

          <tr className=" font-montserrat text-xl  overflow-hidden  ">
            <td className="px-4 py-2 font-semibold text-gray-800">Name:</td>
            <td className="px-4 py-2">{name}</td>
          </tr>

          <tr className=" font-montserrat text-xl overflow-hidden  ">
            <td className="px-4 py-2 font-semibold text-gray-800">Category:</td>
            <td className="px-4 py-2">{category}</td>
          </tr>

          <tr className=" font-montserrat text-xl overflow-hidden  ">
            <td className="px-4 py-2 font-semibold text-gray-800">Model Number:</td>
            <td className="px-4 py-2">{modelNumber}</td>
          </tr>

          <tr className=" font-montserrat text-xl overflow-hidden  ">
            <td className="px-4 py-2 font-semibold text-gray-800">Green Points:</td>
            <td className="px-4 py-2">{greenPoints}</td>
          </tr>

        </tbody>

      </table>

      <p className=' w-full text-center text-[5vh] py-1 bg-green-900 text-white font-semibold '> Precious Metals </p>
      
      <table className=' w-[80%] bg-white '>

        <tbody className=' w-full '>

          <tr className=' font-montserrat text-lg text-center font-semibold border-b border-gray-200 '>
              <td>Name</td>
              <td>Weight</td>
          </tr>

          {
            preciousMetals.map((metal)=>(
                <tr className=' font-montserrat text-lg text-center ' >
                  <td> {metal.name} </td>
                  <td> {metal.weight} </td>
                </tr>
            ))
          }

        </tbody>

      </table>

    </motion.div>
  );
}

export default DeviceInfo;
