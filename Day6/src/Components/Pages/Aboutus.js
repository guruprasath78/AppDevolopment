import Navbar from './Navbar';
import React from 'react';
import Footer from './Footer';
import '../Assets/Aboutus.css';

function Aboutus() {
  return (
    <div>
      <Navbar />
      <div className='container'>
        <p className='para mt-3'>About StockX</p>
        <p className="p1">Welcome to StockX - Your Gateway to the World of Sneakers and Streetwear.</p>
        <p className="p1">At StockX, our mission is to connect sneakerheads and fashion enthusiasts with the latest and most exclusive products.</p>
        <p className="p1">On this platform, you'll find a curated selection of sneakers, apparel, and accessories from top brands.</p>
        <p className="p1">With our transparent marketplace, you can buy and sell with confidence, knowing you're getting the real deal.</p>
        <p className="p1">Join our community and elevate your style game to the next level.</p>
        <p className="p1">StockX - Where Sneaker Culture Meets Innovation.</p>
        <p className="p1">Sneak in Style with StockX.</p>
        <p className="p1">Discover Authenticity. Elevate Your Game.</p>
        <p className="p1">Join the StockX Movement Today!</p>
        <p className='para'>The StockX Team</p>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4 col-md-6 col-sm-12'>
            {/* Content for the first column */}
          </div>
          <div className='col-lg-4 col-md-6 col-sm-12'>
            {/* Content for the second column */}
          </div>
          <div className='col-lg-4 col-md-12 col-sm-12'>
            {/* Content for the third column */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Aboutus;
