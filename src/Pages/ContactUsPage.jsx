import ContactUsForm from "../Components/ContactUsForm"
import contactImg from '../assets/Schedule-pickup.png';

import {useEffect, useRef} from 'react';

import {motion} from 'framer-motion'
import LocomotiveScroll from 'locomotive-scroll';


function ContactUsPage() {


  const containerRef = useRef(null);

  useEffect(()=>{

  
    const container = containerRef.current ;
  //   new LocomotiveScroll({
  //     el: container,
  //     smooth: true,
  //     lerp: .06,
  //     multiplier: .5
  //  });

  },[]);


  return (
    <div className=" mt-[12vh] h-auto w-full bg-white flex flex-col lg:flex-row p-5 gap-1 " ref={containerRef}>


        <div className=" w-full flex justify-center items-center lg:w-[45%]  " >

            <motion.img
              initial={{x:-50}}
              whileInView={{x:0}}
              transition={{duration:1, delay:.2, type:"spring"}}
              data-scroll data-scroll-speed="10"

              src={contactImg} alt="contactus"
                className=" h-[400px] w-[450px] object-cover rounded-2xl "
            />

        </div>

        <div className=" w-full lg:w-[55%] py-5 ">
            <ContactUsForm />
        </div>

        
    </div>
  )
}

export default ContactUsPage