import { useContext } from "react"
import { AppContext } from "../Context/AppContext"
import EwasteCenterLabel from "./EwasteCenterLabel";


function EwasteCenterDetailCard() {

    const {ewasteCenters} = useContext(AppContext);

    let center = {
        "coordinates": [
            75.849355,
            22.776537
        ],
        "name": "Pine Labs Paper Waste Management",
        "address": "Sector F Sanwer Road Industrial Area, Sector E, Sanwer Road Industrial Area, Indore 452015, Madhya Pradesh"
    };
    

  return (
    <div className=" w-full p-5 ">
        {
            ewasteCenters.map((center,i) => (
                i<3 && <EwasteCenterLabel key={i} data={center} />
            ))
        }
    </div>
  )

}

export default EwasteCenterDetailCard