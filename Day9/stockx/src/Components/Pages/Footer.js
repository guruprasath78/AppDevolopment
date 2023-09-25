import React from 'react';
import '../Assets/Footer.css';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
      <footer className='bg-primary text-white py-5'>
        <div className='container'>
          <div className='row'>
            
            <div className='col-md-2'>
              <h5 className='text-uppercase mb-4 font-weight-bold'>Products</h5>
              <ul className='list-unstyled'>
                <li><span className='text-white'>Work in Progress Inventory</span></li>
                <li><span className='text-white'>Raw Material Inventory</span></li>
                <li><span className='text-white'>Finished Inventory</span></li>
              </ul>
            </div>
            <div className='col-md-3'>
              <h5 className='text-uppercase mb-4 font-weight-bold'>Help</h5>
              <ul className='list-unstyled'>
                <li><Link to='/faq' className='text-white'>FAQ</Link></li>
                <li><Link to='/about' className='text-white'>About Us</Link></li>
                <li><Link to='/privacy-settings' className='text-white'>Privacy and Settings</Link></li>
                <li><Link to='/feedback' className='text-white'>Feedback</Link></li>
              </ul>
            </div>
            <div className='col-md-3'>
              <h5 className='text-uppercase mb-4 font-weight-bold'>Contact</h5>
              <p><i className='bx bxs-home-smile'></i> Coimbatore, India</p>
              <p><i className='bx bx-envelope'></i> contact@stockx.com</p>
              <p><i className='bx bx-phone'></i> +91 8807259800</p>
              <p><i className='bx bx-printer'></i> +01 234 567 890</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
