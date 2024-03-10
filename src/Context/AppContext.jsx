import { createContext, useState } from "react";
import recycleImg from '../assets/Lovepik_com-450070390-vector illustration of recycling waste.png';

import vijayImg from '../assets/vijayImg.jpg';
import sahilImg from '../assets/SahilImg.jpg';
import raviImg from '../assets/RaviImg.jpg';


export const AppContext = createContext(null);

export const AppContextProvider = (props) => {

    
    const[isLoggedIn,setIsLoggedIn] = useState(false);
    const[user,setUser] = useState(null);


    const[centerDetails,setCenterDetails] = useState(null);

    
    const[isDeviceInfoAvailable,setIsDeviceInfoAvailable] = useState(false);
    const[deviceDetails,setDeviceDetails] = useState(null);
    const [ewasteCenters, setEwasteCenters] = useState([]);

    const whyGiveEwasteToUsPoints = [
        "You will get Green Points according to your E-waste.",
        "We will take care of your E-waste Disposal.",
        "We are certified by the Government of India.",
        "You can get a chance to win Exciting Rewards by Government."
    ]

    const getUser = async(token) => {

        const response = await fetch("http://localhost:4000/ewaste/auth/getUser",{

        method: 'POST',
        headers: {
            'Content-Type': 'application/json', 
        },
        body:  JSON.stringify({token:token}),

        });

        console.log(response);

        if(!response.ok){
            console.log("not ok in getUser");
        }
        else{

            const data = await response.json();
            if(data.success)
            {

                setIsLoggedIn(true);

                const role = data.user.role ;

                if(role === "Admin") {
                    navigator("/adminHome");
                }
                else{
                    navigator("/");
                }

            }
            
        }
    }

    const navItems = [ 

        {
            title:"Home",
            link:"/"
        },

        {
            title:"Submit",
            link:"/submit"
        },

        {
            title:"About",
            link:"/about"
        },

        {
            title:"Contact Us",
            link:"/contactus"
        },


    ];

    const redirectBasedOnRole = (user) => {
        const role = user.role ;
        if(role === "Admin")
        {
            navigator("/adminHome");
        }
        else{
            navigator("/");
        }
    }

    const teamMembers = [
        {
          name: 'Vijay Singh Rathore',
          role: 'Backend Developer',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          photoUrl: vijayImg
        },
        {
            name: 'Varsha Malviya',
            role: 'Frontend Devloper',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            photoUrl: 'https://www.livemint.com/lm-img/img/2024/02/24/600x338/25_1708792710152_1708792716936.jpg', 
          },
          {
            name: 'Ravi Kumar Kachhi',
            role: 'Backend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            photoUrl: raviImg,
          },
          {
            name: 'Sahil Ghonge',
            role: 'Frontend Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            photoUrl: sahilImg, 
          },
    ];

    const facility =[
        {
          heading:'Cutting-Edge Technology',
          description:'Equipped with cutting-edge technology, our facility is designed to handle a wide range of electronic waste, ensuring efficient processing and maximum resource recovery. We employ advanced methods to minimize environmental impact while extracting valuable materials from discarded electronics.',
        },
        {
          heading:'Certified Processes',
          description:'We adhere to industry-leading standards and certifications to guarantee the responsible handling of e-waste. Our team of experts follows stringent guidelines to ensure the safe dismantling, recycling, and disposal of electronic devices, preventing hazardous materials from entering landfills.',
        },
        {
          heading:'Environmental Stewardship',
          description:'Our commitment to environmental stewardship extends beyond compliance. We continually invest in research and development to explore innovative solutions for reducing the environmental footprint of e-waste. By choosing us, you contribute to a cleaner, greener planet.',
        },
        {
          heading:'Community Engagement',
          description:'We actively engage with local communities to raise awareness about the importance of e-waste recycling. Through educational initiatives and outreach programs, we empower individuals and businesses to make informed decisions about the responsible disposal of their electronic devices.',
        },
        {
          heading:'Data Security',
          description:'Your privacy and data security are our top priorities. We employ stringent data destruction methods to safeguard sensitive information stored on electronic devices. You can trust us to handle your e-waste with the utmost care and security.',
        },
        {
          heading:'Partner with Us for a Sustainable Future',
          description:'Join us in the journey towards a sustainable future by choosing [Your Company Name] as your trusted e-waste recycling partner. Together, lets make a positive impact on the environment and build a greener, cleaner world for generations to come.',
        },
    ];

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    
    

    const data = {
       
        isLoggedIn,
        setIsLoggedIn,
        navItems,
        isDeviceInfoAvailable,
        setIsDeviceInfoAvailable,
        deviceDetails,
        setDeviceDetails,
        ewasteCenters,
        setEwasteCenters,
        recycleImg,
        getUser,
        user,
        setUser,
        redirectBasedOnRole,
        centerDetails,
        setCenterDetails,
        whyGiveEwasteToUsPoints,
        teamMembers,
        facility,
        scrollToSection,
    }


    return  <AppContext.Provider value={data}>
                {props.children} 
            </AppContext.Provider>
}