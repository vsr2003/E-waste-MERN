import { useContext, useEffect, useState } from 'react';
import {NavLink, useLocation} from 'react-router-dom'
import { AppContext } from '../Context/AppContext';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import LogoImg from '../assets/logo.png';

function Navbar() {

    const {isLoggedIn,navItems,user} = useContext(AppContext);
    const [navFor, setNavFor] = useState("Normal");

    const navigator = useNavigate();

    const location = useLocation() ;

    useEffect(()=>{

        const role = user?.role ;
        role === "Admin" && setNavFor("Admin");

    },[user]);
    
    
  return (

    <div className=" fixed z-[1000] bg-[#166534] shadow-2xl  w-full h-[12vh] px-5  flex justify-between ">
        
        {/* left logo */}
        <div className=" w-[10%] h-full hover:cursor-pointer  " onClick={()=>{navigator("/")}}>
                <img src={LogoImg} alt="" className={` h-full w-full object-contain ${navFor==="Admin" && "hidden"} `}  />
        </div>


        {/* right */}
        <div className=" h-full flex gap-[5vw] items-center ">

            {/* nav items */}
            <div className={` h-full flex items-center gap-5  ${navFor==="Admin" && "hidden"} `} >
                {
                    !location.pathname.includes("/adminHome") && navItems.map((obj,i)=>(
                        <NavLink key={i} className=" hover:bg-green-500 text-white p-1 rounded-2xl hover:cursor-pointer "
                            to={obj.link}
                        > {obj.title} </NavLink>
                    ))
                }
            </div>



            {/* login button */}
            {
                 
                <div>
                    {
                        isLoggedIn ? 

                        <button className={` lg:w-[100px] h-[35px] text-white bg-blue-500 hover:bg-blue-600 rounded-sm ${navFor==="Admin" && "hidden"} `}
                            onClick={()=>{navigator("/dashboard")}}
                        > Dashboard </button>

                        :

                        <button className=" lg:w-[100px] h-[35px] text-white bg-blue-500 hover:bg-blue-600 rounded-sm"
                            onClick={()=>{navigator("/login")}} 
                        > Login </button>
                    }
                </div>
            }

        </div>

    </div>

  )
}

export default Navbar