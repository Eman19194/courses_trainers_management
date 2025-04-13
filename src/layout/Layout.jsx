import Footer from "../shared/footer/Footer.jsx";
import Navbar from "../shared/navbar/Navbar.jsx";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../utils/scroll/ScrollToTop.jsx";

const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
