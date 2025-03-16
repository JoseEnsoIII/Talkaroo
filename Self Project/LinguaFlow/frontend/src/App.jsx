import { Routes, Route } from 'react-router-dom'
import Home from './assets/Pages/Static_Pages/Home'

import ContactUs from './assets/Pages/Static_Pages/Contact'
import FlowChart from './assets/Pages/Static_Pages/How_it_Works'
import Language from './assets/Pages/Static_Pages/Language'
import Vocabs from './assets/Pages/DynaPages/Lessons/Vocabs'
import About from './assets/Pages/Static_Pages/About'
import Practice from './assets/Pages/DynaPages/Dynamic_Pages/Practice'
import Grammar from './assets/Pages/DynaPages/Dynamic_Pages/Grammar'
import PrivacyPolicy from './assets/Pages/Static_Pages/Privacy-Policy'
import Terms from './assets/Pages/Static_Pages/Terms'
import AI_Chat from './assets/Pages/AI/AI_Translate'


import Login from './assets/Pages/Auth/Login'
import SignUp from './assets/Pages/Auth/SignUp'

import Community from './assets/Pages/DynaPages/Dynamic_Pages/Community'
import Language_Course from './assets/Pages/DynaPages/Dynamic_Pages/Language_Data'
import EnrollmentPage from './assets/Pages/DynaPages/Dynamic_Pages/Enroll'
import PaymentPage from './assets/Pages/DynaPages/Payment'
import NewEnrollee from './assets/Pages/DynaPages/Dynamic_Pages/Home_New_Enrollee'

import NotFound from './assets/Pages/Static_Pages/NotFound404'
import MainLayout from './assets/Components/layouts/MainLayout'

import Users from './assets/Pages/DB/users_page'
import Profile from './assets/Pages/DynaPages/ProfilePage/Profile'
import Settings from './assets/Pages/DynaPages/ProfilePage/Settings'
/*admin*/
import Login_DB from './assets/Pages/DB/DB_Login'

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>

        {/* Pages */}
        <Route path="/" element={<Home />} />
        {/* Static pages */}
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/flowchart" element={<FlowChart />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<Terms />} />
        <Route path="/ai-chat" element={<AI_Chat />} />

        {/* Language Course */}
        <Route path="/courses" element={<Language />} />
        <Route path="/vocabs" element={<Vocabs />} />
        <Route path="/about" element={<About />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/grammar" element={<Grammar />} />
        <Route path="/community" element={<Community />} />

        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Language Course */}
        <Route path="/language/:id" element={<Language_Course />} />
        {/* Enroll Page */}
        <Route path="/enroll/:id/:level" element={<EnrollmentPage />} />
        {/* Payment Page */}
        <Route path="/payment/:id/:level" element={<PaymentPage />} />
        {/* New Enrollee Page */}
        <Route path="/home/new" element={<NewEnrollee />} />
        {/* DB Users */}
        <Route path="/users" element={<Users />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/admin" element={<Login_DB />} />
        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
