import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Layout_Components/Navbar";
import Footer from "./Components/Layout_Components/Footer";
import Login from "./Pages/Auth/Login";
import SignUp from "./Pages/Auth/Register"

import AdminLogin from "./Pages/Auth/Admin_login";
import AdminDashboard from "./Pages/Dashboard/Admin_Dashboard";
import AdminUsers from "./Pages/Dashboard/Dashboard_Pages.jsx/Dashboard_Users";
import ProtectedRoute from "./Components/ProtectedRoute";

import Home from "./Pages/Static/Home";
import AboutUs from "./Components/compo/compo-pages/AboutUs";
import ContactUs from "./Components/compo/compo-pages/ContactUs";
import PrivacyPolicy from "./Components/compo/compo-pages/Privacy-Policy";
import TermsOfService from "./Components/compo/compo-pages/TermsofService";

import Community from "./Pages/Dynamic_Pages/Community";
import Vocabulary from "./Pages/Dynamic_Pages/Vocabulary"
import Grammar from "./Pages/Dynamic_Pages/Grammar"
import Practice from "./Pages/Dynamic_Pages/Practice"
import Courses from "./Pages/Dynamic_Pages/Courses";
import AI from "./Pages/Dynamic_Pages/AI";

import ProfilePage from "./Pages/Dashboard/Client_Dashboard";
import Settings from "./Pages/Dashboard/Dashboard_Pages.jsx/Settings"
import EnrollmentForm from "./Pages/Dynamic_Pages/Enrollment-Page";


import NotFound from "./Pages/Static/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route
          path="/*"
          element={
            <>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />

                <Route path="/community" element={<Community />} />
                <Route path="/vocabulary" element={<Vocabulary />} />
                <Route path="/grammar" element={<Grammar />} />
                <Route path="/practice" element={<Practice />} />
                <Route path="/Talkaroo-AI" element={<AI />} />

                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/profile/settings" element={<ProfilePage />} />
                <Route path="/enroll/:courseId" element={<EnrollmentForm />} />

                <Route path="/courses" element={<Courses />} />

                <Route path="*" element={<NotFound />} />
              </Routes>
              <Footer />
            </>
          }
        />

        {/* Admin Login Route */}
        <Route path="/admin-login" element={<AdminLogin />} />

        {/* Protected Admin Route */}
        <Route path="/admin" element={<ProtectedRoute> <AdminDashboard /></ProtectedRoute>
          }
        />
         <Route path="/dashboard/users" element={<AdminUsers />} />
      </Routes>
    </Router>
  );
}

export default App;
