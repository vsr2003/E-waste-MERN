import { useContext } from "react"
import { AppContext } from "../Context/AppContext"
import DeviceInfo from "./DeviceInfo";
import EwasteCenterDetailCard from "./EwasteCenterDetailCard";


function EwasteCenterDetails() {

    const { ewasteCenters } = useContext(AppContext);

    console.log("these are centers ",ewasteCenters);


  return (

    <div className=" w-full md:w-[40%] h-auto  ">
        
    
        {/* heading */}
        <h2 className=" text-white font-montserrat text-center font-semibold">Nearest E-waste Centers</h2>

        {
            ewasteCenters.length ? 

            <EwasteCenterDetailCard />

            :

            <p className=" text-red-700 md:text-center leading-none mt-2 font-semibold "> No Centre Details found <br /> Try Searching Using Buttons </p>
        }


    </div>

  )
}

export default EwasteCenterDetails