import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({
  setIsModalOpen,
}: {
  setIsModalOpen: (isModalOpen: boolean) => void;
}) => {
  return (
    <>
      <Navbar setIsModalOpen={setIsModalOpen} />
      <Outlet />
      <Footer setIsModalOpen={setIsModalOpen} />
    </>
  );
};

export default Layout;
