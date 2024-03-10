import { useEffect, useState } from 'react';
import circleLogo from '../assets/circleLogo.png';
import { IoCloseOutline } from "react-icons/io5";
import {motion} from 'framer-motion';

function Popup() {

    const[showPopup, setShowPopup] = useState(false);

    const[popupData, setPopupData] = useState();

    const[index,setIndex] = useState(0);
    const[dataToShow,setDataToShow] = useState({title: "About E-waste sample",description:" sample Learn about e-waste's environmental impact! E-waste, discarded electronics, contains hazardous materials harmful to health and ecosystems. Recycling reduces pollution and conserves resources. Dispose responsibly to safeguard our planet. Educate yourself to make informed choices for a sustainable future."});

    useEffect(()=>{
        setTimeout(()=>{setShowPopup(true)},3000);
        getAllEducationalPopupDetails();
    },[]) ;

    const getAllEducationalPopupDetails = async() => {

        const response = await fetch("http://localhost:4000/educationalPopup/getAllEducationalPopupDetails");
    
        if(!response.ok){
            console.log("not ok in getAllEducationalPopupDetails");
        }
        else{
            const data = await response.json();
            if(data.success)
            {
                console.log(data.data);
                setPopupData(data.data);
            }
        }
    
    }

    setInterval(changeContent, 15000);

    
    function changeContent()
    {
        if(popupData)
        {
            console.log(popupData[index],index);
            setDataToShow(popupData[index]);
            setIndex(prevIndex => (prevIndex + 1) % popupData.length)
        }
    }

    

  return (
    <div>

        {
            showPopup &&
            <motion.div
                initial={{x:50,opacity:0}}
                whileInView={{x:0,opacity:1}}
                transition={{duration:1, delay:.1, type:"spring"}}
             className=" fixed bg-white shadow-2xl w-[30vw] h-[30vh] rounded-lg bottom-[5vh] right-[5vw] border border-black ">

                <div className=' w-full flex justify-end '> <button className='' onClick={()=> setShowPopup(!showPopup) } > <IoCloseOutline /> </button> </div>

                <div>
                    <h1 className=' font-semibold ml-2 '> {dataToShow.title} </h1>
                    <motion.p
                        initial={{x:50,opacity:0}}
                        whileInView={{x:0,opacity:1}}
                        transition={{duration:1, delay:.1, type:"spring"}}
                     className=' text-xs p-2 font-montserrat leading-none '> {dataToShow.description} </motion.p>
                </div>
                
            </motion.div>
        }

        <motion.img src={circleLogo}
              animate={{ scale:1.1, rotate:360 }}
              transition={{ ease: "linear", duration: 5, repeat: Infinity }}
         alt="" className=" fixed w-[75px] h-[75px] hover:cursor-pointer hover:scale-105 transition-all bottom-[2vh] right-[2vw] rounded-full object-cover "
         onClick={()=> setShowPopup(!showPopup) }
         />
    </div>
    
  )
}

export default Popup