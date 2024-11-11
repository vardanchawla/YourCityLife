import { faBars, faTimes, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo192 from '../logo192.png';
import styles from './Header.module.css';
import LoginPopup from './LoginPopup'; // Import the LoginPopup component

const Header = () => {
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showHeader, setShowHeader] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (currentScrollPos > scrollPosition) {
        // Scrolling Down
        setShowHeader(false);
      } else {
        // Scrolling Up
        setShowHeader(true);
      }

      setScrollPosition(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollPosition]);

  const toggleLoginPopup = () => {
    setShowLoginPopup(!showLoginPopup);
  };

  const handleLogin = () => {
    setShowLoginPopup(true);
  };

  const handleContactClick = () => {
    navigate('/contact');
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <section className={`transition-all duration-300 ${showHeader ? 'sticky top-0' : '-top-full'} bg-[#151218] text-white z-50`}>
      <div className="flex justify-between items-center flex-wrap p-4 mx-auto max-w-7xl">
        <div>
          <img src={logo192} alt="Logo" width={120} />
        </div>
        <div className={`${styles['h-menu']} ${menuOpen ? styles['open'] : ''}`}>
          <Link to="/" onClick={toggleMenu} className='hover:text-[#fdc063]'>Home</Link>
          <Link to="/about" onClick={toggleMenu} className='hover:text-[#fdc063]'>About us</Link>
          <Link to="/service" onClick={toggleMenu} className='hover:text-[#fdc063]'>Services</Link>
          <Link to="/get-started" onClick={toggleMenu} className='hover:text-[#fdc063]'>Get Started</Link>
          <button className={`py-2 px-4 transition duration-300 ease-in-out border-none ${styles['custom-gradient']}`} onClick={handleContactClick}>Contact</button>
          <div className="login-icon text-2xl cursor-pointer hover:text-[#fdc063]" onClick={handleLogin}>
            <FontAwesomeIcon icon={faUser} />
          </div>
        </div>
        <div className={`${styles['menu-icon']} text-2xl block md:hidden cursor-pointer`} onClick={toggleMenu}>
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </div>
      </div>
      {showLoginPopup && <LoginPopup setShowLoginPopup={setShowLoginPopup} />}
    </section>
  );
};

export default Header;
