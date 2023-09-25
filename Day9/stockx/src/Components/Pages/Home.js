import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../Assets/Home.css';
import Sidebar from './Sidebar';

function Home() {
  return (
    <div>
      <Navbar />
      <div className='container'>
        <div className='row'>
          <div className='col-md-3'>
            <Sidebar />
          </div>
          <div className='col-md-9'>
            <h1 className='welcome-text'>Welcome to StockX</h1>
            <p className='description'>
              We provide a state-of-the-art inventory management solution to streamline your business operations.
            </p>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <div className='feature-icon'>
              <i className='bx bx-check-circle'></i>
            </div>
            <h2 className='feature-title'>Efficient Inventory Tracking</h2>
            <p className='feature-description'>
              Keep real-time records of your inventory levels and enhance your control over stock management.
            </p>
          </div>
          <div className='col-md-4'>
            <div className='feature-icon'>
              <i className='bx bx-bar-chart'></i>
            </div>
            <h2 className='feature-title'>Data Analytics</h2>
            <p className='feature-description'>
              Utilize advanced analytics tools to gain insights into your inventory performance and make informed decisions.
            </p>
          </div>
          <div className='col-md-4'>
            <div className='feature-icon'>
              <i className='bx bx-support'></i>
            </div>
            <h2 className='feature-title'>Dedicated Support</h2>
            <p className='feature-description'>
              Our dedicated support team is ready to assist you with any questions or issues you may encounter.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
