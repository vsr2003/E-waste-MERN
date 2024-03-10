import { useContext,useEffect,useRef } from 'react';
import { AppContext } from '../Context/AppContext';

import MemberCard from '../Components/MemberCard';
import FacilityCard from '../Components/FacilityCard';


import groupImage from '../assets/groupImage.jpg';
import EwasteImg2 from '../assets/e_waste_img2.jpg';

import Footer from '../Components/Footer';

import {motion} from 'framer-motion';

import LocomotiveScroll from 'locomotive-scroll';


const About = () => {

  const containerRef = useRef(null);

  useEffect(()=>{

  
    const container = containerRef.current ;
    // new LocomotiveScroll({
    //   el: container,
    //   smooth: 5,
    //   lerp: .06,
    //   multiplier: .5
    // });

  },[]);

  const {teamMembers,facility} = useContext(AppContext);

  const AboutUsInfo = [
    "Electronic waste (e-waste) is a growing concern in our rapidly advancing technological age. It encompasses discarded electronic devices such as smartphones, laptops, tablets, and obsolete household appliances. As our dependency on electronic gadgets increases, so does the volume of e-waste generated globally. Improper disposal of e-waste poses significant environmental and health risks, as electronic devices often contain hazardous materials.",
    "At EcoGeek, we recognize the importance of responsibly managing e-waste. Through our dedicated facility, we ensure the proper recycling and disposal of electronic devices, minimizing the environmental impact and contributing to a sustainable and circular economy. By choosing us, you play a crucial role in reducing the environmental footprint of e-waste and promoting a cleaner, healthier planet for future generations. Let's work together to make a positive impact on the world we live in."
  ]

  return (
    <div className=" mt-[12vh] min-h-[100vh] container mx-auto " ref={containerRef}  data-scroll-section >

        <div className="h-[70%] w-full  md:flex  p-4 mb-6">

            <motion.img
              initial={{x:-50}}
              whileInView={{x:0}}
              transition={{duration:1, delay:.1, ease:"easeIn"}}
              data-scroll data-scroll-speed={5}
             src={EwasteImg2} alt={"E-Waste Image"} className="w-full h-auto  md:w-[50%] md:h-[40%] object-cover mb-4 m-2" />

            <div className=' flex flex-col gap-5 '>
              {
                AboutUsInfo.map((para)=>(
                  <motion.p
                  initial={{x:50}}
                  whileInView={{x:0}}
                  transition={{duration:1, delay:.1, ease:"easeIn"}}

                   className=' w-full h-auto md:h-auto font-montserrat text-black font-semibold '> {para} </motion.p>
                ))
              }
            </div>

        </div>

        <div className='md:h-[560px]  h-[340px] w-[100%] flex justify-center items-center m-7'>

          <div className='h-full w-[80%] rounded-3xl drop-shadow-2xl shadow-black '>
              <img className=' h-full w-full rounded-3xl md:w-full  shadow-2xl '  src={groupImage} alt="" srcset="" />
          </div>
          
        </div>

        <div className='md:flex m-7 w-full h-auto p-5 ml-2'>

            <p className='md:w-[20%]  md:h-auto w-full m-2  italic text-gray-600'>
            This website tells you the location of the nearest e-waste collection and recycling facility. Offers educational pop-ups on the harmful components of your e-waste and their effects on the environment and human health if not disposed correctly. There could be an option to input the model of your old device and earn credit points relative to the amount of precious metals recovered from the device if disposed correctly.
            </p>

            <div className='border-2 w-[98%] h-[300px] md:w-[70%] md:h-[370px]'></div>
        </div>

        <motion.h1 
          initial={{x:-50}}
          whileInView={{x:0}}
          transition={{duration:1, delay:.1, ease:"easeIn", type:"spring" }}
        className=" text-xl md:text-4xl font-bold mb-8 text-center w-full">Meet Developers Of E-Waste Facility Locator Website</motion.h1>
      
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {teamMembers.map((member, index) => (
            <MemberCard key={index} {...member} />
          ))}

        </div>
      
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-4 w-full text-center">About Our E-Waste Facility</h2>
              <p className=' text-center font-sans w-full'>At <span className='text-green-800 font-bold'>"EcoGeek"</span>, we take pride in our state-of-the-art e-waste facility dedicated to sustainable and responsible electronic waste management. Our commitment to environmental conservation and ethical disposal practices sets us apart as a reliable partner in e-waste recycling.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 m-6 ">
                {facility.map((facility, index) => (
                <FacilityCard key={index} {...facility} />
                ))}
              </div>

            <h3 className='text-xl font-serif text-red-600 w-full mt-5 text-center' >For inquiries or to learn more about our e-waste facility, please contact us at <span className="text-blue-900 font-bold">EcoGeek@gmail.com.</span></h3>

        </div>

      
    </div>
    
  );
};

export default About;
