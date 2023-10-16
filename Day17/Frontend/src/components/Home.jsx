import { useState } from 'react';
import backgroundImage from '../assets/images/bg.jpeg';
import Footer from './Footer';
import Header from './Navbar';
import '../assets/css/home.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";

function Home() {
  const { username } = useSelector((state) => state.auth.user) || {};

  const navigate = useNavigate();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const wrapperStyle = {
    minHeight: '100vh',
    position: 'relative',
  };

  const contentStyle = {
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
    position: 'relative',
    zIndex: '1',
  };

  return (
    <div className="wrapper" style={wrapperStyle}>
        <Header />
      <div className={`content ${isSidebarOpen ? 'shifted' : ''}`} style={contentStyle}>
        <div className='container' id='homec'>
          <div className='d-flex flex-column'>
            <div className='p-2'>
              <h1 style={{ color: 'maroon', textAlign: 'left', fontFamily: 'Arial, sans-serif' }}>
                Welcome {username}, to StockX - Your Premier Stock Management Solution!
              </h1>
            </div>
            <div className='p-2 d-flex justify-content-center'>
              <p>
                At STOCKX, we are committed to providing innovative and efficient stock management services
                that help your business thrive. Our comprehensive solutions are tailored to meet your specific
                needs, whether you run a small e-commerce store or a large-scale enterprise.
              </p>
            </div>
            <div className='p-2 d-flex justify-content-center'>
              <p>
                Our team of experts is dedicated to ensuring that your stock is well-organized, your supply chain
                is optimized, and your order fulfillment is swift and reliable. We are here to empower your business
                to reach new heights.
              </p>
            </div>
            <div className='p-2 d-flex justify-content-center'>
              <p>
                Explore our user-friendly platform, get real-time insights into your stock, and harness the power
                of data analytics to make informed decisions. We believe in efficiency, innovation, and strong
                partnerships with our clients.
              </p>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
