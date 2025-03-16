import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/compo/Navbar";
import Footer from "./Components/compo/Footer";
import Login from "./Pages/Auth/Login";
import SignUp from  "./Pages/Auth/Register";

import Home from "./Pages/Static/Home";
import AboutUs from "./Components/compo/compo-pages/AboutUs"
import ContactUs from "./Components/compo/compo-pages/AboutUs";
import PrivacyPolicy from "./Components/compo/compo-pages/Privacy-Policy";
import TermsOfService from "./Components/compo/compo-pages/TermsofService";

import Community from "./Pages/Dynamic_Pages/Community"
import ProfilePage from "./Pages/Dynamic_Pages/Profile";
import NotFound from "./Pages/Static/NotFound";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
/*Dynamic Pages*/
        <Route path="/community" element={<Community />} />
        <Route path="/profile" element={<ProfilePage/>} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
