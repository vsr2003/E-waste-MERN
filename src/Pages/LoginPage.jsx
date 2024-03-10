import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../Context/AppContext';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';
import loginImg from '../assets/2008.i301.017.Electronic garbage isometric background.jpg';

function LoginPage() {

  const [formData, setFormData] = useState({email:"",password:""});
  const [showError,setShowError] = useState(null);
  const {setIsLoggedIn,setUser,user} = useContext(AppContext);
  const navigator = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    sendLoginRequest(formData);
  };

  const sendLoginRequest = async(formData) => {

    const response = await fetch("http://localhost:4000/auth/login",{

        method: 'POST',
        headers: {
            'Content-Type': 'application/json', 
        },
        body:  JSON.stringify(formData),

    });
    const data = await response.json();

    if(!response.ok){
        console.log("not ok in sendLoginRequest");
        toast.error("Login Failed",{position:'top-right',autoClose:2000})
        setShowError(data.message);
    }
    else{
        localStorage.setItem('token', data.token);

        setIsLoggedIn(true);
        setUser(data.user);

        toast.success("Login Successful",{position:'top-center',autoClose:2000})

        const role = data.user.role ;

        role==="Admin" ? navigator("/adminHome") : navigator("/");

    }

  }

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
        navigator("/");
      }
    }

  }
  
  useEffect(()=>{
    const token = localStorage.getItem('token');
    if(token) sendLoginRequestWithToken(token);
  },[]);

  return (

    <div class="bg-gray-100 mt-[12vh] flex justify-center items-center h-[85vh] ">

        {/* <!-- Left: Image --> */}
        <div class="w-1/2 h-screen hidden lg:flex justify-center items-center">
            <img src={loginImg} alt="Placeholder Image" class="object-cover w-[80%] h-[80%]" />
        </div>

        {/* <!-- Right: Login Form --> */}
        <div class="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">

            <h1 class="text-2xl font-semibold mb-4">Login</h1>

            <form onSubmit={submitHandler}>

                {/* <!-- Username Input --> */}
                <div class="mb-4">
                    <label for="email" class="block text-gray-600">Email</label>
                    <input type="text" value={formData.email} onChange={handleChange} id="email" name="email" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autocomplete="on" />
                </div>

                {/* <!-- Password Input --> */}
                <div class="mb-4">
                    <label for="password" class="block text-gray-600">Password</label>
                    <input type="password" id="password" value={formData.password} onChange={handleChange} name="password" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autocomplete="on" />
                </div>

                <p className='text-red-700 text-sm'> {showError} </p>

                {/* <!-- Login Button --> */}
                <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full">Login</button>

            </form>

            {/* <!-- Sign up  Link --> */}
            <div class="mt-6 text-blue-500 text-center">
                <a href="/signup" class="hover:underline">Sign up Here</a>
            </div>

        </div>

    </div>
  )
}

export default LoginPage