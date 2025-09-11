import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import './index.css';

import Navbar from './components/ui/Navbar';
import Hero from './components/ui/Herosection';
import CoworkingPage from './components/ui/CoworkingPage';
import OfficeSpacePage from './components/ui/OfficeSpacePage';
import EventsPage from './components/ui/EventsPage';
import PrivateOfficePage from './components/ui/PrivateOfficePage';
import CityDetailPage from './components/ui/CityDetailPage';
import AboutUsPage from './components/ui/AboutUsPage';
import LoginPage from './components/ui/LoginPage';
import OtpVerificationPage from './components/ui/OtpVerificationPage';
import SuccessRedirect from "./components/ui/SuccessRedirect";
import NewUserPhoneEntry from './components/ui/NewUserPhoneEntry';
import VerifyPhoneOtp from './components/ui/VerifyPhoneOtp';

import { Button } from './components/ui/button';

const AppContent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const loginRoutes = [
  "/login",
  "/verify-otp",
  "/new-user",
  "/verify-phone",
  "/success-redirect"
];

const showNavbar = !loginRoutes.includes(location.pathname);


  useEffect(() => {
    const interval = setInterval(() => {
      const flag = localStorage.getItem("otpSuccessFlag");
      if (flag === "true") {
        localStorage.removeItem("otpSuccessFlag"); // Clean up
        navigate("/"); // ✅ Redirect to HeroSection
      }
    }, 1000); // Check every second

    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <div className="font-sans">
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/coworking/:city" element={<CoworkingPage />} />
        <Route path="/office-spaces/:city" element={<OfficeSpacePage />} />
        <Route path="/events-shoots-and-advertising/:city" element={<EventsPage />} />
        <Route path="/private-office/:city" element={<PrivateOfficePage />} />
        <Route path="/centre/:city" element={<CityDetailPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/verify-otp" element={<OtpVerificationPage />} />
        <Route path="/success-redirect" element={<SuccessRedirect />} />
        <Route path="/new-user" element={<NewUserPhoneEntry />} />
        <Route path="/verify-phone" element={<VerifyPhoneOtp />} />
      </Routes>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
