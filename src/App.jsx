import { BrowserRouter, Route, Routes,redirect, Navigate, useNavigate } from "react-router-dom"
import Home from "./Pages/Home"
import Login from "./Pages/login"
import Signup from "./Pages/Signup"
import AdminEwasteAdd from "./Pages/AdminEwasteAddPage"
import EwasteSubmit from "./Pages/EwasteSubmit"
import Navbar from "./Components/Navbar"
import EwasteAddFormAdmin from "./Components/EwasteAddFormAdmin"
import CategoryForm from "./Components/CategoryAddForm"
import AdminHomePage from "./Pages/AdminHomePage"
import { useContext, useEffect } from "react"
import { AppContext } from "./Context/AppContext"
import ContactUsPage from "./Pages/ContactUsPage"
import AdminCategoryAddPage from "./Pages/AdminCategoryAddPage"
import AdminEwasteAddPage from "./Pages/AdminEwasteAddPage"
import Dashboard from "./Pages/Dashboard"
import AppointmentPage from "./Pages/AppointmentPage"
import About from "./Pages/About"
import MyAppointmentPage from "./Pages/MyAppointmentPage"
import AdminProcessAppointmentPage from "./Pages/AdminProcessAppointmentPage"
import Footer from "./Components/Footer"

import Popup from "./Components/Popup"
import { ToastContainer, toast } from 'react-toastify';
import ScrollToTop from "./Components/ScrollToTop"
import Profile from "./Pages/Profile"
import LoginPage from "./Pages/LoginPage"
import SignupPage from "./Pages/SignupPage"
import AdminEducationalPopupAdd from "./Pages/AdminEducationalPopupAdd"
import Layout from "./Pages/Layout"

function App() {

  const {isLoggedIn,redirectBasedOnRole,user,setIsLoggedIn,setUser} = useContext(AppContext);
  const role = user?.role ;

  const sendLoginRequestWithToken = async(token) => {

    const response = await fetch("http://localhost:4000/auth/verifyToken",{

        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },

    });

    if(!response.ok){
        console.log("not ok in sendLoginRequestWithToken");
    }
    else{
      const data = await response.json() ;
      if(data.success)
      {
        setIsLoggedIn(true);
        setUser(data.user);
      }
    }

  }
  
  useEffect(()=>{
    const token = localStorage.getItem('token');
    if(token) sendLoginRequestWithToken(token);
  },[]);
  
  return (
    <div className=' relative h-screen w-screen overflow-x-hidden  '>

      <Navbar />      

        <Routes>

         

          <Route path="/" element={<Home />}  />
          <Route path="/submit" element={isLoggedIn ? <EwasteSubmit /> : <Navigate to="/login" /> } />
          <Route path="/contactus" element={<ContactUsPage/>} />
          <Route path="/about" element={<About/>} />

          <Route path="/login" element={ <LoginPage />}  />
          <Route path="/signup" element={<SignupPage />}  />
          

          <Route path="/appointmentPage" element={<AppointmentPage />} />

          <Route path="/dashboard" element={ role==="Normal" ? <Dashboard /> : <div className=" w-screen h-screen flex justify-center items-center text-red-600 bg-white ">Access Denied</div> } >
            <Route path="/dashboard/myAppointments" element={<MyAppointmentPage />} />
            <Route path="/dashboard/" element={<Profile />} />
          </Route>


          <Route path="/adminHome" element={ user?.role === "Admin" ? <AdminHomePage /> : <div className=" w-screen h-screen flex justify-center items-center text-red-600 bg-white ">Access Denied</div> } >
            <Route path="/adminHome/addCategory" element={<AdminCategoryAddPage />} />
            <Route path="/adminHome/addEwaste" element={<AdminEwasteAddPage />} />
            <Route path="/adminHome/processAppointment" element={<AdminProcessAppointmentPage />} />
            <Route path="/adminHome/addEducationalPopup" element={<AdminEducationalPopupAdd />} />
          </Route>

        </Routes>
      
      <Footer />

      <Popup />
      
      
      {/* <ToastContainer /> */}

    </div>
  )
}

export default App
