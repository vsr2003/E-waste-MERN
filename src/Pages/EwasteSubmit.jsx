import { useContext, useEffect, useRef, useState } from "react";
import DeviceInfo from "../Components/DeviceInfo";
import '../Styles/EwasteSubmit.css';
import UserSearchEwasteSearch from "../Components/UserSearchEwasteSearch";
import { AppContext } from "../Context/AppContext";
import MapComponent from "../Components/Map";
import EwasteCenterDetails from "../Components/EwasteCenterDetails";
import NotGotProductForm from "../Components/NotGotProductForm";
import { BsArrowReturnRight } from "react-icons/bs";
import SchedulePickupImg from '../assets/Schedule-pickup.png'
import _3rImg from '../assets/3r.png';


import {motion} from 'framer-motion';
import LocomotiveScroll from 'locomotive-scroll';

function EwasteSubmit() {

    const {isDeviceInfoAvailable,deviceDetails,recycleImg,setIsDeviceInfoAvailable,whyGiveEwasteToUsPoints,scrollToSection} = useContext(AppContext);
    
    
    const containerRef = useRef(null);
    

    useEffect(()=>{

        // const container = containerRef.current ;
        // new LocomotiveScroll({
        // el: container,
        // smooth: 5,
        // lerp: .06,
        // multiplier: .5
        // });
        scrollToSection("searchForm");
        

        return ()=>{
            setIsDeviceInfoAvailable(false);
        }
    },[]);
      


  return (

    <div className=" relative min-h-fit mt-[12vh] w-full  bg-white " ref={containerRef}  >
    
        {/* top section with search form */}
        <div className=" relative w-full mt-[10vh] min-h-[100vh] bg-white flex flex-col md:flex-row items-center justify-center gap-[10vw] " data-scroll data-scroll-speed="1" id="searchForm" >

            <div className=" w-[280px] md:w-[380px] " >
                <motion.img
                    initial={{x:-50}}
                    whileInView={{x:0}}
                    transition={{duration:1, delay:.2, type:"spring",}}
                    data-scroll data-scroll-speed="5"
                src={SchedulePickupImg} alt="" />
            </div>

            <motion.div
                initial={{x:50}}
                whileInView={{x:0}}
                transition={{duration:1, delay:.2, type:"spring",}}
            >
                <UserSearchEwasteSearch />
                <p className=" text-white ">Not found Device?  <a href="#notFound" className=" underline hover:text-black ">Click Here</a> </p>
            </motion.div>

        </div>



        {/* why give e-waste to us */}
        <div className=" min-h-fit lg:h-[100vh] bg-white w-full p-5  flex flex-col md:flex-row justify-between items-center object-cover  " id="deviceDetails" >


            <motion.img
                initial={{x:50}}
                whileInView={{x:0}}
                transition={{duration:1, delay:.2, type:"spring",}}
                data-scroll data-scroll-speed={2}

                src={recycleImg} alt="recycleImg" className=" object-cover h-full w-[500px] "/>

            {
                    isDeviceInfoAvailable ? 

                    <DeviceInfo data={deviceDetails} />
                    :
                    // yaha par para aaega
                    <motion.div
                    initial={{x:-50}}
                    whileInView={{x:0}}
                    transition={{duration:1, delay:.2, type:"spring",}}

                     className=" w-full md:w-[50%] flex flex-col gap-5 ">
                        <h1 className=" font-semibold text-4xl ">Why Give E-waste to us ?</h1>
                        <div className=" flex flex-col gap-2 ">
                            {
                                whyGiveEwasteToUsPoints.map((point,i) => (
                                    <p key={i} className=" hover:border-b border-gray-400 select-none "> {point} </p>
                                ))
                            }
                        </div>
                    </motion.div>
            }


        </div>


        {/* map and center details */}
        <div className=" min-h-fit w-full flex flex-col items-center md:flex-row  gap-5 p-5 md:bg-svg1 filter  ">
            <MapComponent />
            <EwasteCenterDetails />
        </div>


        {/* not found product section */}
        <div className=" min-h-[100vh] w-full flex flex-col md:flex-row justify-center items-center " id="notFound">

            {/* left {heading} */}
            <div className=" h-full w-full md:w-[50%] p-2 flex flex-col md:justify-center items-center ">
                <h1 className=" text-xl md:text-[3rem] font-semibold ">Not Found Your Device?</h1>
                <h3>Fill out this form </h3>
                <BsArrowReturnRight size={40} />
            </div>

            <div className=" w-full md:w-[45%] h-fit  md:h-[80vh] px-[5vw] ">
                <NotGotProductForm />
            </div>
            

        </div>


        {/* for animations */}
        {/* <img src={_3rImg}  className=" w-[95px] h-[95px] absolute top-10 left-10 " /> */}

    </div>
  );
}

export default EwasteSubmit;