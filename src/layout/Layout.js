import { Outlet } from "react-router-dom";
import Footer from "../components/navigation/Footer";
import Navbar from "../components/navigation/Navbar";

const Layout = () => {
  return (
    <main>
      <Navbar/>
        <Outlet/>
      <Footer/>
    </main>
  )
}

export default Layout;