import { Link, useNavigate } from "react-router-dom";
import EwasteCenterDetailCard from "../Components/EwasteCenterDetailCard";
import MapComponent from "../Components/Map"
import { BsArrowRight } from "react-icons/bs";
import {motion} from 'framer-motion';


function TakeMeToSubmit() {
   
    const navigator = useNavigate() ;
    

  return (
    <div className=" mt-[20vh] w-full min-h-screen p-5 flex flex-col md:flex-row bg-[#ffd96670] " id="mapHome">

        <MapComponent />
       

        <div className=" w-full md:w-[50%] h-full p-5 flex flex-col items-center gap-10 ">

            {/* heading */}
            <div className="">
                <motion.h1
                    initial={{x:-100}}
                    whileInView={{x:0}}
                    transition={{delay:.1, duration:1}}
                className=" text-xl font-semibold md:font-normal md:text-[10vh] leading-none font-montserrat text-black text-center "> Want to SUBMIT Your <span className="text-green-900 font-semibold">E-waste</span> ? </motion.h1>
            </div>

            {/* button */}
            <motion.div
                initial={{y:100}}
                whileInView={{y:0}}
                transition={{delay:.1, duration:1 }}
            >
                <button 
                  className={` bg-blue-500 hover:bg-blue-700 text-white font-semibold py-1 px-4 rounded flex items-center gap-1 `}
                  onClick={()=>{navigator("/submit")}}
                >
                    SUBMIT <BsArrowRight className="inline-block"/>
                </button>
            </motion.div>

            <EwasteCenterDetailCard />

        </div>
        
    </div>
  )
}

export default TakeMeToSubmit