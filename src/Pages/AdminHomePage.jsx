import { useContext } from "react";
import { BrowserRouter, Link, Outlet, Route, Routes,NavLink, useNavigate } from "react-router-dom"
import { AppContext } from "../Context/AppContext";



function AdminHomePage() {

  const {setIsLoggedIn,setUser} = useContext(AppContext);
  const navigator = useNavigate();

  const LogoutHandler = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setUser(null);
    navigator("/");
    toast.success("Logout Success",{position:"top-right",autoClose: 2000});
  }

  return (
    <div className=" mt-[12vh] h-auto w-full ">

    

        <div className=" fixed w-[20%] h-full bg-green-500 flex flex-col gap-5  p-5 ">

          <Link to={"addCategory"} className=" w-full p-2 bg-blue-300 hover:bg-blue-400 text-gray-800 font-semibold text-sm rounded-lg " > Add E-waste Category </Link>
          <Link to={"addEwaste"} className=" w-full p-2 bg-blue-300 hover:bg-blue-400 text-gray-800 font-semibold rounded-lg " > Add E-waste </Link>
          <Link to={"processAppointment"} className=" w-full p-2 bg-blue-300 hover:bg-blue-400 text-gray-800 font-semibold rounded-lg " > Process Appointment </Link>
          <Link to={"addEducationalPopup"} className=" w-full p-2 bg-blue-300 hover:bg-blue-400 text-gray-800 font-semibold rounded-lg " > Add Educational Popup </Link>
          <button className=" bg-red-500 w-[100px] p-2 text-white " onClick={LogoutHandler} > Log out </button>

          {/* <NavLink to={""} className=" w-full p-2 bg-blue-300 hover:bg-blue-400 text-gray-800 font-semibold rounded-lg " >  My Appointments </NavLink> <br /> */}

        </div>

        <div className=" ml-[20%] w-[80%] h-[90vh] flex justify-center items-center   ">

            <Outlet />
            
        </div>

    
        
    </div>
  )
}

export default AdminHomePage