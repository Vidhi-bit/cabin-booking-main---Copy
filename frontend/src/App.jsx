import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'
import Navbar from './components/ui/Navbar'
import Hero from './components/ui/Herosection'
import CoworkingPage from './components/ui/CoworkingPage';
import OfficeSpacePage from './components/ui/OfficeSpacePage';
import EventsPage from './components/ui/EventsPage';
import PrivateOfficePage from './components/ui/PrivateOfficePage';
import CityDetailPage from './components/ui/CityDetailPage';
import AboutUsPage from './components/ui/AboutUsPage';
import { Button } from './components/ui/button'

const App = () => {
  return (
    <Router>
      <div className="font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/coworking/:city" element={<CoworkingPage />} />
          <Route path="/office-spaces/:city" element={<OfficeSpacePage />} />
           <Route path="/events-shoots-and-advertising/:city" element={<EventsPage />} />
           <Route path="/private-office/:city" element={<PrivateOfficePage />} /> 
           <Route path="/centre/:city" element={<CityDetailPage />} />
           <Route path="/about-us" element={<AboutUsPage />} />

        </Routes>
      </div>
    </Router>
  )
}
export default App
