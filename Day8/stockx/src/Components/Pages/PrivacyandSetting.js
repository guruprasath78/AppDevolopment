import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import '../Assets/PrivacyandSetting.css';

function PrivacyandSetting() {
  const navigate = useNavigate();

  const handlePrivacySettingsClick = () => {
    navigate('/privacysettings');
  };

  const handleAccountSettingsClick = () => {
    navigate('/accountsettings');
  };

  return (
    <div className='privacy-settings-container'>
      <Navbar />
      <div className='privacy-settings-content'>
        <div className='privacy-settings-header'>
          <h1 className='privacy-settings-title'>Privacy and Settings</h1>
        </div>

        <button className='button-style' onClick={handlePrivacySettingsClick}>
          Privacy Settings
        </button>

        <button className='button-style' onClick={handleAccountSettingsClick}>
          Account Settings
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default PrivacyandSetting;
