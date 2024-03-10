import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";


function EwasteAddFormAdmin() {

    const [formData, setFormData] = useState({
        name: '',
        modelNumber: '',
        category: '',
        greenPoints: 0,
        preciousMetals: [{ name: '', weight: '' }]
    })

    const [categoryNames,setCategoryNames] = useState([]);
    const[submitted,setSubmitted] = useState(false);
    
    const handleInputChange = (key, value) => {
      
        if(key === "greenPoints"){
          value = (value==="") ? 0 : parseInt(value);
        }

        setFormData({
            ...formData,
            [key]: value
        });
    };

    const handleMetalInputChange = (index, key, value) => {
    const updatedMetals = [...formData.preciousMetals];
    updatedMetals[index][key] = value;
    setFormData({
        ...formData,
        preciousMetals: updatedMetals
    });
    };

    const addMoreInputFields = () => {
    setFormData({
        ...formData,
        preciousMetals: [...formData.preciousMetals, { name: '', weight: '' }]
    });
    };

    const handleSubmit = (event) => {
    event.preventDefault();

    // Now you have form data in the state
    console.log(formData);

    sendRequest(formData);
    };

    const sendRequest = async(formData) => {

        console.log("final form data",formData);

        const response = await fetch("http://localhost:4000/admin/add_ewaste",{

          method: 'POST',
          headers: {
              'Content-Type': 'application/json', 
          },
          body:  JSON.stringify(formData),

        });

        if(!response.ok){
            console.log("not ok in sendRequest",data);
        }
        else{
            const data = await response.json();
            console.log("Device details",data);
            setSubmitted(true);
        }

    }

    const getCategories = async() => {

      const response = await fetch("http://localhost:4000/category/getAllCategories");

        if(!response.ok){
            console.log("not ok in getCategories");
        }
        else
        {
            const data = await response.json();
            console.log("setting this",data.allCategories);
            setCategoryNames(data.allCategories);
        }

    }

    useEffect(()=>{

      getCategories();
      // console.log(categoryNames)
      
      // console.log("categories ",categoryNames)
    },[]);

      // console.log(categoryNames);
    
  return (
    <div className="mt-[12vh] bg-white h-full w-full  flex flex-col justify-between items-center">

    

    <form onSubmit={handleSubmit} className="min-h-[90%] drop-shadow-md p-5  flex flex-col items-center w-[60%] space-y-4">

        <div className="flex flex-col w-full">
          <label className="text-sm">Name:</label>
          <input
            type="text"
            placeholder="Item Name"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 mt-1"
          />
        </div>

        <div className="flex flex-col w-full">
          <label className="text-sm">Model Number:</label>
          <input
            type="text"
            placeholder="Model Number"
            value={formData.modelNumber}
            onChange={(e) => handleInputChange('modelNumber', e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 mt-1"
          />
        </div>

        <div className="flex flex-col w-full">
          <label className="text-sm">Green Points:</label>
          <input
            type="number"
            placeholder="Green Points"
            value={formData.greenPoints}
            onChange={(e) => handleInputChange('greenPoints', e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 mt-1"
          />
        </div>

        <div className="flex flex-col w-full">
          <label className="text-sm">Category:</label>
          <select name="category" id="category"
            onChange={(e) => handleInputChange('category', e.target.value)}
           className="border-gray-600"  >

            <option value="none">Option</option>
            {
                categoryNames && categoryNames.map((obj,i)=>(
                  <option value={obj.categoryName} key={i} className="text-gray-600"> {obj.categoryName} </option>
                )
                )
            }
            
          </select>

        </div>

        <div className="flex flex-col w-full">

          <label htmlFor="" className="text-sm">Precious Metals :</label>
          {formData.preciousMetals.map((metal, index) => (
            <div key={index} className="flex justify-between space-x-2 w-full">
              <input
                type="text"
                placeholder="Name"
                value={metal.name}
                onChange={(e) => handleMetalInputChange(index, 'name', e.target.value)}
                className="border w-[50%] border-gray-300 rounded-md px-3 py-2 mt-1"
              />
              <input
                type="text"
                placeholder="Weight"
                value={metal.weight}
                onChange={(e) => handleMetalInputChange(index, 'weight', e.target.value)}
                className="border w-[50%] border-gray-300 rounded-md px-3 py-2 mt-1"
              />
            </div>
          ))}

        <button type="button" onClick={addMoreInputFields} className="w-[100px] h-[30px] text-center flex  items-center justify-center mt-2 bg-blue-500 text-white rounded hover:bg-blue-600">Add More <IoAddCircleOutline className=" ml-1 inline-block "/> </button>

        </div>

        <button type="submit" className="w-[150px] bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Submit</button>

    </form>

    {
      submitted && <h1>SUBMITTED SUCCESSFULLY</h1>
    }

    </div>
  )
}

export default EwasteAddFormAdmin