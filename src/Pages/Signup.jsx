import { useContext, useState } from "react";
import "../Styles/signup.css";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

 function Signup() {

  const [formData, setFormData] = useState({email:"",password:"", Name:"",role:"Normal"});
  const navigator = useNavigate();

  const {setIsLoggedIn} = useContext(AppContext);

  const[signupFailed , setSignupFailed] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    sendSignupRequest(formData)
  };

  const sendSignupRequest = async(formData) => {

    const response = await fetch("http://localhost:4000/auth/signup",{

            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify(formData),

    });

    console.log(response);
    const data = await response.json();
    console.log(data);

    if(!response.ok){
        console.log("not ok in sendSignupRequest",response);
    }

    else{

      // const data = await response.json();
      
      if(data.success)
      {
        // if signup is successsful , send user to home page with signed in
        console.log("in successsful signup");
        setIsLoggedIn(true);
        navigator("/");
      }
      else{
        setSignupFailed(true);
      }

    }

  }

  return (
    <div id="signupdiv" className='h-screen w-full bg-gray-400 flex items-center justify-center '>

       <form id="formtag" className=' bg-green-700 text-black flex flex-col font-semibold font-serif sm:w-[80%] sm:h-[90%] opacity-75 md:w-[45%] md:h-[80%] lg:w-[30%] lg:h-[75%] font-400 lg:m-5 rounded-2xl p-7 md:p-10 '
            onSubmit={submitHandler}>

              <h2 className="text-3xl text-black text-center mt-3 mb-2">Sign Up</h2>
    
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' value={formData.email} required={true} onChange={handleChange}></input>
    
            <label htmlFor='password '>Password</label>
            <input type='password' name='password' value={formData.password} required={true} onChange={handleChange}></input>
    
            <label htmlFor='firstName'>FirstName</label>
            <input type='text' name='Name' value={formData.Name} required={true} onChange={handleChange}></input>
    
    
            {/* <label htmlFor='dateOfBirth'>DOB :</label>
            <input type='date' name='dateOfBirth' value={formData.dateOfBirth} onChange={handleChange}></input> */}
    
            <label htmlFor='phone'>Phone</label>
            <input type='phone' name='phone' value={formData.phone} onChange={handleChange}></input>
    
            {/* <label htmlFor='gender'>Gender</label>
            <select name='gender' value={formData.gender} onChange={handleChange}>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
             </select> */}

              <br></br>
             {
              signupFailed && <p className="text-red-600">SignUp Failed</p>
             }
             <button type='submit' className='w-[45%] h-[8%] md:w-[50%] md:h-[10%] hover:text-white hover:bg-green-400 rounded-2xl md:rounded-3xl ml-12 lg:ml-20 bg-green-200 text-black md:mb-4 md:p-2 '>SUBMIT</button>
          
        </form>
    </div> 
  );
}

export default Signup;
