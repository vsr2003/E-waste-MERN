import { useContext, useEffect, useState } from "react";
import DeviceInfo from "../Components/DeviceInfo";
import '../Styles/EwasteSubmit.css';
import { AppContext } from "../Context/AppContext";



function UserSearchEwasteSearch() {

    const {setDeviceDetails,setIsDeviceInfoAvailable,scrollToSection} = useContext(AppContext);

    const[formData, setFormData] = useState({category: "",device: ""});
    const[category,setCategory] = useState([]);
    const[wastesName,setWastesName] = useState([]);
    


    const handleChange = (event) => {

        const { name, value } = event.target;
        console.log(name)
        console.log(value)

        if(name === "category")
        {
            // console.log(value);
            getCategoryNames(value);
        }

        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));

    };

    const handleSubmit = (event) => {

        event.preventDefault();
        
        console.log(formData);
        getDeviceDetails(formData);

    };

    const getCategoryNames = async(category) => {

        const categoryNamesResponse = await fetch("http://localhost:4000/waste/getSelectedCategoryWasteInfo",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 
            },
            body:  JSON.stringify({category:category}),
        });

            if(!categoryNamesResponse.ok){
                // const data = await categoryNamesResponse.json();
                console.log("Not ok",data);
            }
            else{
                const data = await categoryNamesResponse.json();
                // setCategory(data.uniqueCategories)
                setWastesName(data.data);
            }
    }

    const getDeviceDetails = async(formData) => {

        console.log(formData);

        const response = await fetch("http://localhost:4000/waste/getDeviceDetails",{

            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 
            },
            body:  JSON.stringify(formData),

        });

        

        if(!response.ok){
            console.log("not ok in getDeviceDetails",data);
        }
        else{
            const data = await response.json();

            console.log(" Device details ",data.device);

            scrollToSection("deviceDetails");
            setDeviceDetails(data.device);
            setIsDeviceInfoAvailable(true);
        }

    }

    
    useEffect(()=>{
        async function fetchWasteCategory() 
        {
            const categoryResponse = await fetch("http://localhost:4000/waste/getEwastesCategory");

            if(!categoryResponse.ok){
                const data = await categoryResponse.json();
                console.log("category",data);
            }
            else{
                const data = await categoryResponse.json();
                setCategory(data.uniqueCategories)
                // console.log(data.uniqueCategories);
            }
        }

        fetchWasteCategory();

    },[]);


  return (
    <form className=" w-full  md:w-[35vw] shadow-lg hover:shadow-xl rounded-xl px-8 pt-6 pb-8 mb-4" data-scroll data-scroll-speed="5">

                <div className="mb-4">
                    <label htmlFor="category" className="block text-sm font-bold mb-2">Category:</label>
                    <select name="category" id="category" className="w-full p-2 border border-black rounded-md  " onChange={handleChange}>
                        <option value="none">Select</option>
                        {category.map((cat, i) => (
                            <option key={i} value={cat}>{cat}</option>
                        ))}
                    </select>
                </div>

                <div className="mb-4">
                    <label htmlFor="device" className="block text-sm font-bold mb-2">Device:</label>
                    <select name="device" id="device" className="w-full p-2 border border-black rounded-md  " onChange={handleChange}>
                        <option value="none">Select</option>
                        {wastesName.map((wasteName, i) => (
                            <option key={i} value={wasteName}>{wasteName}</option>
                        ))}
                    </select>
                </div>

                <div className="flex items-center justify-between">
                    <button type="submit" className="px-4 py-2 bg-blue-500 text-white border border-black rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600" onClick={handleSubmit}>Search</button>
                </div>
    </form>
  )
}

export default UserSearchEwasteSearch