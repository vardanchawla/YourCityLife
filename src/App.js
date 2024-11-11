import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import LoginPopup from './components/LoginPopup'; // Ensure correct path here
import AboutPage from './components/pages/About/AboutPage';
import ContactPage from './components/pages/Contact/ContactPage';
import GetStartedPage from './components/pages/GetStarted/GetStartedPage';
import HomePage from './components/pages/Home/HomePage';
import ServicePage from './components/pages/Service/ServicePage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Header setShowLogin={setShowLogin} />
        {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/get-started" element={<GetStartedPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
