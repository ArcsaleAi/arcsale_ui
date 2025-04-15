import { useState } from "react";
import Home from "./components/Home";
import Layout from "./components/Layout";
import PricingTable from "./components/Pricing";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import ReferralModal from "./components/ContactModal";
import ContactForm from "./components/ContactForm";
import AboutUs from "./components/AboutUs";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  console.log(isModalOpen);
  
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route path="" element={<Layout />}>
        <Route path="/" element={<Home setIsModalOpen = {setIsModalOpen} />} />
        <Route path="pricing" element={<PricingTable />} />
        <Route path="contact" element={<ContactForm />} />
        <Route path="aboutus" element={<AboutUs />} />
      </Route>
    )
  );

  return (
    <main className="p-4">
      <ReferralModal
          isOpen={isModalOpen}
          onClosee={() => setIsModalOpen(false)}
        />
      <RouterProvider router={route} />
    </main>
  );
}

export default App;
