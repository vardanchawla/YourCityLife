import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import crossIcon from '../cross_icon.png'; // Make sure to import your assets properly
import './LoginPopup.css';

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState('Login');
  const [hasAccount, setHasAccount] = useState(false);
  const [showLoginOptions, setShowLoginOptions] = useState(false); // Track when to show login options
  const [loginType, setLoginType] = useState('');

  useEffect(() => {
    if (currState === 'Login' || currState === 'Sign Up') {
      document.body.style.overflow = 'hidden'; // Prevent scrolling on background content
    } else {
      document.body.style.overflow = 'auto'; // Allow scrolling on background content
    }

    // Clean up function to restore default body overflow behavior
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [currState]);

  const handleClose = () => {
    setShowLogin(false);
  };

  const handleLogin = (type) => {
    setLoginType(type);
    // Handle login logic here
    console.log('Logging in as', type);
    handleClose();
  };

  const handleSignup = () => {
    setCurrState('Sign Up');
    setShowLoginOptions(true); // Show login options after clicking "Sign Up here"
  };

  const handleOptionSelect = (type) => {
    setHasAccount(true);
    setLoginType(type);
    setShowLoginOptions(false);
  };

  return (
    <div className="login-popup-backdrop">
      <div className="login-popup">
        <form className="login-popup-container">
          <div className="login-popup-title">
            <h2>{currState}</h2>
            <button onClick={handleClose} ><img src={crossIcon} alt="closeIcon" /></button>
          </div>
          <div className="login-popup-input">
            {currState === 'Sign Up' && (
              <input type="text" placeholder="Your Name" required />
            )}
            <input type="email" placeholder="Your Email" required />
            <input type="password" placeholder="Password" required />
          </div>
          {!showLoginOptions && (
            <button onClick={() => handleLogin('customer')}>
              {currState === 'Sign Up' ? 'Create account' : 'Login'}
            </button>
          )}
          {showLoginOptions && !hasAccount && (
            <>
              <button onClick={() => handleOptionSelect('service-provider')}>
                Create account as Service Provider
              </button>
              <button onClick={() => handleOptionSelect('customer')}>
                Create account as Customer
              </button>
            </>
          )}
          <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By continuing, I agree to the terms of use & privacy policy.</p>
          </div>
          {currState === 'Login' ? (
            <p>
              Don't have an account?{' '}
              <span onClick={handleSignup}>Sign Up here</span>
            </p>
          ) : (
            <p>
              Already have an account?{' '}
              <span onClick={() => setCurrState('Login')}>Login here</span>
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

LoginPopup.propTypes = {
  setShowLogin: PropTypes.func.isRequired,
};

export default LoginPopup;
