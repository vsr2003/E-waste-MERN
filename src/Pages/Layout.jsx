import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"


const Layout = ({children}) => {
  return (
    <div className=" min-h-screen w-screen ">

        <Navbar />

        {children}

        <Footer />
        
    </div>
  )
}

export default Layout