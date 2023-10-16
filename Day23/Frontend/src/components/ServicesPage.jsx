import backgroundImage from '../assets/images/bg.jpeg';
import Header from './Navbar';
import Footer from './Footer';
import '../assets/css/ServicePage.css'; // Create a new CSS file for styling

function ServicesPage() {
  return (
    <div className="wrapper">
      <Header />
      <div className="container my-5 content">
        <div className="row">
          <div className="col-md-12">
            <h1 className="display-4 text-center mb-3">StockX Services</h1>
            <p className="lead text-center mt-3">
              Explore the range of services and products offered by StockX.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 g-5">
            <h2>Stock Management</h2>
            <p>
              Efficient stock management solutions for businesses of all sizes.
            </p>
          </div>
          <div className="col-md-6 g-5">
            <h2>Supply Chain Optimization</h2>
            <p>
              Streamline your supply chain operations for maximum efficiency.
            </p>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-6 g-5">
            <h2>Inventory Tracking</h2>
            <p>
              Advanced inventory tracking systems to keep your stock in check.
            </p>
          </div>
          <div className="col-md-6 g-5">
            <h2>Order Fulfillment</h2>
            <p>
              Rapid and reliable order fulfillment services for your business.
            </p>
          </div>
        </div>

        {/* Small Hardware Items Section */}
        <div className="row mt-4">
          <div className="col-md-6 g-5">
            <h2>Data Analytics</h2>
            <p>
              Harness the power of data analytics to make informed stock decisions.
            </p>
          </div>
          <div className="col-md-6 g-5">
            <h2>Technology Solutions</h2>
            <p>
              Innovative technology solutions to drive your stock management into the future.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;
