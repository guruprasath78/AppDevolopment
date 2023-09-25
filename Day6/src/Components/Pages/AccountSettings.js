import React, { useState } from 'react';
import '../Assets/AccountSettings.css';

function AccountSettings() {
  const [fullName, setFullName] = useState('John Doe');
  const [email, setEmail] = useState('johndoe@example.com');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleSaveChanges = () => {
    // Handle saving changes to user account settings here
    // You can send an API request to update user data on the server
    // Don't forget to add validation and error handling
    console.log('Changes saved successfully!');
  };

  return (
    <div className="account-settings-container">
      <h1>Account Settings</h1>
      <div className="account-settings-content">
        <div className="account-settings-section">
          <h2>Personal Information</h2>
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="account-settings-section">
          <h2>Change Password</h2>
          <div className="form-group">
            <label htmlFor="currentPassword">Current Password</label>
            <input
              type={isPasswordVisible ? 'text' : 'password'}
              id="currentPassword"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="toggle-password"
              onClick={() => setIsPasswordVisible(!isPasswordVisible)}
            >
              {isPasswordVisible ? 'Hide' : 'Show'}
            </button>
          </div>
          <div className="form-group">
            <label htmlFor="newPassword">New Password</label>
            <input
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmNewPassword">Confirm New Password</label>
            <input
              type="password"
              id="confirmNewPassword"
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
            />
          </div>
        </div>
        <button className="save-changes-btn" onClick={handleSaveChanges}>
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default AccountSettings;
