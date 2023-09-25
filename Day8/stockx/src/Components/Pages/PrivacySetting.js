import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import PrivacyOption from './PrivacyOption'; // Create a PrivacyOption component for each setting
import '../Assets/PrivacySetting.css';

function PrivacySetting() {
  // Dummy privacy settings data
  const [settings, setSettings] = useState({
    showEmail: true,
    showPhone: false,
    allowNotifications: true,
  });

  // Function to toggle privacy settings
  const toggleSetting = (setting) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      [setting]: !prevSettings[setting],
    }));
  };

  return (
    <div>
      <Navbar />
      <div className='privacy-settings-container'>
        <div className='privacy-settings-content'>
          <div className='privacy-settings-header'>
            <h1 className='privacy-settings-title'>Privacy Settings</h1>
          </div>

          <div className='privacy-settings-section'>
            <h2 className='section-title'>Privacy Settings</h2>
            <PrivacyOption
              label='Show Email'
              value={settings.showEmail}
              onChange={() => toggleSetting('showEmail')}
            />
            <PrivacyOption
              label='Show Phone'
              value={settings.showPhone}
              onChange={() => toggleSetting('showPhone')}
            />
            {/* Add more privacy options as needed */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PrivacySetting;
