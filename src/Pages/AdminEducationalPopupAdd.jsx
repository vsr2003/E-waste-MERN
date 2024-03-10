import { useState } from "react"
import {toast} from 'react-toastify'

function AdminEducationalPopupAdd() {

    const [formData,setFormData] = useState({description:"",title:""});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const submitChange = (e) => {
        e.preventDefault();
        sendEducationalPopupReq(formData);
    }

    const sendEducationalPopupReq = async(formData) => {

        const response = await fetch("http://localhost:4000/educationalPopup/addEducationalPopup",{
    
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 
            },
            body:  JSON.stringify(formData),
    
        });
    
        if(!response.ok){
            console.log("not ok in sendEducationalPopupReq");
        }
        else{
            const data = await response.json();
            toast.success("Popup Added",{autoClose:2000, position:"top-center"})
        }
    
    }


  return (
    <div className=" w-full h-[88vh] flex justify-center items-center ">
      
      <form 
        onSubmit={submitChange}
        className="bg-white drop-shadow-2xl w-[70%] rounded px-8 pt-6 pb-8 mb-4">

        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Title"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
            Description:
          </label>
          <textarea
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Description"
            required
          />
        </div>

        { <p className="text-red-500 text-xs italic">{}</p>}

        <div className="flex items-center justify-between">
          <button
            type="textbox"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
         
      </form>
      
      
    </div>
)
}

export default AdminEducationalPopupAdd