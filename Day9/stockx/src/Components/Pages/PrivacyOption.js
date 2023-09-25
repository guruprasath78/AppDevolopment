import React from 'react';

function PrivacyOption({ label, value, onChange }) {
  return (
    <div className='privacy-option'>
      <label>{label}</label>
      <input type='checkbox' checked={value} onChange={onChange} />
    </div>
  );
}

export default PrivacyOption;
