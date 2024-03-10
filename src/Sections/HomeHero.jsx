import HeroImg from '../assets/19198013.jpg'
import loopImg from '../assets/loopArrow.png';

import MobileImg from '../assets/mobile.png';
import CameraImg from '../assets/camera.png';
import LaptopImg from '../assets/laptop.png';
import MappinImg from '../assets/mapPin.png';

import {motion} from 'framer-motion';

function HomeHero() {


  const threeDeviceInfo = [
    {
      description:"Metals like lead, cadmium, mercury, arsenic pose environmental hazards, health risks through production, disposal, and potential contact.",
      img:MobileImg,
    },
    {
      description:"Cameras in mobile phones facilitate privacy breaches, surveillance, unauthorized image sharing, and potential misuse for stalking or invasion of privacy.",
      img:CameraImg,
    },
    {
      description:"Laptops pose risks of overheating, eye strain, posture problems, data breaches, cybersecurity threats, and potential addiction to screen time.",
      img:LaptopImg,
    }
  ]



  return (

    <div className=" w-full h-[110vh] flex flex-col lg:flex-row sm:gap-5 lg:gap-0  lg:items-center lg:justify-between p-5 bg-green-800 " data-scroll data-scroll-speed="5"  >
        
        <div className=' h-full lg:h-auto mt-10 relative flex flex-col gap-3 p-5  '>

          <h1 className=' text-5xl lg:text-6xl font-montserrat tracking-widest font-bold text-white '> E-Waste </h1>
          <h1 className=' text-5xl lg:text-6xl font-montserrat tracking-wide font-bold text-white ' > Facility </h1>
          <h1 className=' text-5xl lg:text-6xl font-montserrat tracking-wide font-bold text-white '> Locator </h1>


          {/* for animation images */}
          <motion.img src={MappinImg}
            initial={{y:-90}}
            whileInView={{y:0}}
            transition={{duration:2, delay:1}}
          className=' absolute hidden lg:block right-[-20%] top-[-30%] ' width={30} height={30} alt="" />
          <motion.img src={MappinImg}
            initial={{x:-80}}
            whileInView={{x:0}}
            transition={{duration:2, delay:1}}
           className=' absolute hidden lg:block bottom-[-30%] left-[10%] ' width={30} height={30} alt="" />
          <motion.img src={MappinImg}
            initial={{y:-80}}
            whileInView={{y:0}}
            transition={{duration:2, delay:1}}
           className=' absolute hidden lg:block top-[-20%] left-[10%] ' width={30} height={30} alt="" />

        </div>

        <div className='  w-full h-full lg:w-[40%] flex items-center justify-center lg:justify-end '>

          <div className=' w-[95%] lg:w-[90%]  h-[20vh] flex flex-col justify-center gap-2 lg:gap-10 items-center   '>


            {
              threeDeviceInfo.map((obj,i)=>(

                  <div className=' w-full flex items-center  '>

                      <motion.p 
                        initial={{x:-70, opacity:0, }}
                        whileInView={{x:0, opacity:1}}
                        transition={{delay:.1, duration:.5, opacity:1, ease:"easeIn" } }
                        key={i} className=' text-xs text-white font-montserrat '> {obj.description} </motion.p>

                      <motion.img
                        initial={{y:-40, opacity:0, }}
                        whileHover={{scale:1.2}}
                        whileInView={{y:0, opacity:1}}
                        // transition={{delay:.5, duration:.5, x:{type:"spring"}, opacity:1, ease:"easeIn" }}
                        animate={{ y: 0, rotate: 360 }} // Animate to y: 0 (original position) and rotate 360 degrees
                        transition={{
                          duration: 1, // Duration of animation
                          repeat: 0, // Repeat infinitely
                          ease: "linear" // Linear easing for constant speed
                        }}
                        
                        className=' w-[50px] h-[50px] lg:h-[70px] lg:w-[70px] '
                        key={i} src={obj.img} width={70} height={70} alt="" />

                  </div>

              ))
            }
            

          </div>


        </div>

    </div>

  )
}

export default HomeHero