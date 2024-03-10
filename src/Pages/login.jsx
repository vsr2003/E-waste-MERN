
import { useContext, useEffect, useState } from 'react';
import "../Styles/login.css";
import { AppContext } from '../Context/AppContext';
import { useNavigate } from 'react-router-dom';

function Login(){

  const [formData, setFormData] = useState({email:"",password:""});
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

    console.log(response);

    if(!response.ok){
        console.log("not ok in sendLoginRequest");
    }
    else{
        const data = await response.json();
        if(data.success)
        {
          console.log(data);
          console.log("setting this in localStorage",data.token);
          localStorage.setItem('token', data.token);

          setIsLoggedIn(true);


          console.log("got this user => ",data.user) ;
          setUser(data.user);

          const role = data.user.role ;

          if(role === "Admin") {
            navigator("/adminHome");
          }
          else{
            navigator("/");
          }

        }
        else{
          console.log("Login Failed");
        }
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
    <div id="logindiv" className='h-screen w-full bg-gray-400 flex items-center justify-center '>

       <form id="Loginform" className=' bg-green-700 opacity-80 text-black flex flex-col font-semibold font-serif w-[80%] h-[70%] md:w-[45%] md:h-[60%] lg:w-[25%] lg:h-[50%] font-400 lg:m-5 rounded-2xl p-7 md:p-10 '
            onSubmit={submitHandler}>

              <h2 className="text-3xl text-black text-center mt-3 mb-2">Login</h2>
    
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' value={formData.email} required={true} onChange={handleChange}></input>
    
            <label htmlFor='password '>Password</label>
            <input type='password' name='password' value={formData.password} required={true} onChange={handleChange}></input>
  
             
             <button type='submit' className='sm:w-[45%] sm:h-[12%] md:w-[50%] md:h-[10%] lg:w-[50%] lg:h-[15%] hover:text-white hover:bg-green-400 rounded-2xl md:rounded-3xl ml-9 md:ml-16 lg:ml-20 bg-green-200 text-black md:mb-4 md:p-1 m-6'>Login</button>
           
           <div className='flex text-white justify-around pr-3 m-3'>
            <p>Don't have account?  <button type='button' onClick={()=>{navigator("/signup")}}>Sign Up</button> </p>
            <p className='pl-3'>Forgot password?</p>
           </div>

        </form>
    </div> 
  );
}

export default Login;

