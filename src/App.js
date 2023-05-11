import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import FAQ from "./pages/FAQ";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HeaderResponsive } from "./components/Header";
import FooterCentered from "./components/FooterCentered";

export default function App() {
  return (
    <BrowserRouter>
      <HeaderResponsive />
      <Routes>
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <FooterCentered />
    </BrowserRouter>
  );
}
