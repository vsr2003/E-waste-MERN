
import { useEffect, useRef } from 'react';
import MapComponent from '../Components/Map';
import HomeHero from '../Sections/HomeHero';
import TakeMeToSubmit from '../Sections/TakeMeToSubmit';
import WhatIsEwaste from '../Sections/WhatIsEwaste';
import DustbinImg from '../assets/home-Bio-Medical-Waste-Dustbin.png'
import Blob from '../assets/blob.svg';
import Footer from '../Components/Footer'
import { motion } from 'framer-motion';

import LocomotiveScroll from 'locomotive-scroll';





function Home() {

  const containerRef = useRef(null);

  useEffect(()=>{

  
    const container = containerRef.current ;
  //   new LocomotiveScroll({
  //     el: container,
  //     smooth: 5,
  //     lerp: .06,
  //     multiplier: .5
  //  });

  },[]);


  return (
    <div className=" relative w-full h-fit  " ref={containerRef} data-scroll-section >
        

      {/* hero section */}
      <HomeHero />

      {/* section 2 {what is e-waste} */}
      <WhatIsEwaste />

      {/* take me to submit page */}
      <TakeMeToSubmit />

      {/* dustbin */}
      <motion.img
        initial={{y:50,opacity:0}}
        whileInView={{y:0,x:-150,opacity:1}}
        transition={{delay:1, duration:.5, x:{type:"spring"}, opacity:1 }}

       src={DustbinImg} alt="" 
        className=' absolute hidden sm:block h-[200px] w-[200px] lg:h-[250px] lg:w-[250px] z-[10] right-[0%] top-[5%] lg:top-[10%] lg:left-[50%] lg:translate-x-[-50%] '
      />

      {/* blob */}
      <motion.img
        initial={{x:-50,opacity:0}}
        whileInView={{x:-210,opacity:1}}
        transition={{delay:.5, duration:2 , x:{type:"spring"}, opacity:1 }}
        src={Blob} alt="" height={450} width={450}
        className='absolute hidden  lg:block  top-[5%] right-[0%] lg:top-[10%] lg:left-[45%] translate-x-[-50%] ' />

      
    </div>
  )
}

export default Home