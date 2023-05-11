import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HeaderResponsive } from "./components/Header";

export default function App() {
  return (
    <BrowserRouter>
      <HeaderResponsive />
      <Routes>
        <Route path="/contactUs" element={<ContactUs />} />

        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
