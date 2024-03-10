import { useContext } from "react"
import { AppContext } from "../Context/AppContext"


function AppointmentTable({data}) {

    const {user} = useContext(AppContext);
    const role = user.role ;

  return (
    <div className=" w-[80%] bg-purple-500 ">
        
        <table>
            
        </table>

    </div>
  )
}

export default AppointmentTable