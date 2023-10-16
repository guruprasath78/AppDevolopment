import backgroundImage from '../assets/images/bg.jpeg';
import Header from './Navbar';
import Footer from './Footer';

function AboutPage() {
  const wrapperStyle = {
    background: `url(${backgroundImage}) center/cover no-repeat fixed`,
    minHeight: '100vh',
  };

  const contentStyle = {
    backgroundColor: 'rgba(192, 192, 192, 0.9)',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
  };

  return (
    <div className="wrapper" style={wrapperStyle}>
      <Header />
      <div className="container my-5" style={contentStyle}>
        <div className="row">
          <div className="col-md-12">
            <h1 className="display-4 text-center mb-3">Welcome to StockX</h1>
            <p className="lead text-center mt-3">
              StockX Enterprises is your gateway to a world of innovative solutions and services.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 g-5">
            <h2>Our New Beginning</h2>
            <p>
              StockX Enterprises embarked on a journey of transformation and reinvention in 2022.
              What was once a small venture has now evolved into a thriving hub of creativity and innovation.
            </p>
          </div>
          <div className="col-md-6 g-5">
            <h2>Our Vision</h2>
            <p>
              Our vision is to redefine the boundaries of what's possible. We are committed to pioneering
              groundbreaking solutions that make a difference in the world, empowering individuals and
              businesses with the tools they need to succeed.
            </p>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-6 g-5">
            <h2>Our Core Values</h2>
            <ul>
              <li>Innovation: We thrive on pushing the envelope and embracing the latest technologies.</li>
              <li>Empowerment: We believe in empowering our clients to achieve their aspirations.</li>
              <li>Collaboration: Our success is built on strong partnerships and collaboration.</li>
              <li>Sustainability: We are dedicated to environmentally sustainable practices.</li>
              <li>Community: We actively engage with and support our local and global communities.</li>
            </ul>
          </div>
          <div className="col-md-6 g-5">
            <h2>Our Team</h2>
            <p>
              At StockX Enterprises, we have assembled a diverse team of experts who bring their
              passion and expertise to every project. We are here to support you and help you reach
              new heights in your endeavors.
            </p>
          </div>
        </div>
        
        {/* Additional Content Here */}
        <div className="row mt-4">
          <div className="col-md-12">
            <h2>Awards and Achievements</h2>
            <p>
              StockX Enterprises has received numerous awards and accolades for our dedication
              to innovation and excellence in our field.
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default AboutPage;
