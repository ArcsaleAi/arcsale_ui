import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <section className="p-4">
        <Navbar />
        <Outlet />
      </section>
      <Footer />
    </>
  );
};

export default Layout;
