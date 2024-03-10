import { motion } from 'framer-motion';



import EwasteImg from '../assets/waste-concept-design_24908-11951.jpg';





function WhatIsEwaste() {

    const WhatisEwastePara = [
        " E-waste encompasses a broad range of electronic devices, including computers, smartphones, televisions, printers, and household appliances, that are no longer in use or have reached the end of their lifecycle.",
        "Proper e-waste management involves recycling and refurbishing electronics whenever possible. Recycling facilities extract valuable materials, while refurbishment allows for extending the lifespan of devices through repair and resale.",
        " Educating consumers about the proper disposal of electronic devices is crucial. Encouraging practices like donating working electronics, participating in e-waste recycling programs, and choosing products with longer lifespans can help mitigate the e-waste problem.",
    ]

  return (
    <div className=" w-full min-h-screen flex flex-col md:flex-row  p-5 " data-scroll data-scroll-speed="2">

        <div className=' w-full md:w-[50%] h-full flex flex-col justify-center  '>

            <motion.img
                initial={{x:-200, opacity:0, }}
                whileInView={{x:0, opacity:1}}
                transition={{delay:.5, duration:3 , x:{type:"spring"}, opacity:4, ease:"easeIn" }}
             src={EwasteImg} alt="" />

        </div>

        <div className=' w-full  md:w-[60%] flex flex-col gap-2 lg:gap-5 h-full p-5 '>

            <motion.h1 
                initial={{y:50, opacity:0, }}
                whileInView={{y:0, opacity:1}}
                transition={{delay:.5, x:{type:"spring"}, opacity:4 }}
                className=' text-3xl font-semibold lg:font-normal border lg:text-[12vh] font-montserrat '> What is E-waste ? </motion.h1>

            {
                WhatisEwastePara.map((para,i)=>(
                    <motion.p
                        initial={{x:50, opacity:0, }}
                        whileInView={{x:0, opacity:1}}
                        transition={{delay:.1, duration:.5, opacity:1, ease:"easeIn" } }
                     key={i} className=' my-3 text-sm lg:text-sm leading-none font-montserrat '> {para} </motion.p>
                ))
            }


        </div>

    </div>
  )
}

export default WhatIsEwaste