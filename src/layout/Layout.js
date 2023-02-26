import { Outlet } from "react-router-dom";
import Footer from "../components/navigation/footer/Footer";
import Menubar from "../components/navigation/Menubar";

const Layout = () => {
  return (
    <main>
      <Menubar/>
        <Outlet/>
      <Footer/>
    </main>
  )
}

export default Layout;