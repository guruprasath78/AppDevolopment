import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="text-center text-lg-start text-light" style={{ backgroundColor: "black" }}>
      <section className="footer-container">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <div className="footer-box">
                <h6 className="text-uppercase fw-bold mb-4">Help</h6>
                <p>
                  <a style={{ textDecoration: "none", cursor: "pointer" }} className="text-reset" onClick={() => navigate("/faq")}>FAQ</a>
                </p>
                <p>
                  <a style={{ textDecoration: "none", cursor: "pointer" }} className="text-reset" onClick={() => navigate("/terms")}>Terms and Conditions</a>
                </p>
                <p>
                  <a style={{ textDecoration: "none", cursor: "pointer" }} className="text-reset" onClick={() => navigate("/privacy")}>Privacy Policy</a>
                </p>
                <p>
                  <a style={{ textDecoration: "none", cursor: "pointer" }} className="text-reset" onClick={() => navigate("/feedback")}>Feedback</a>
                </p>
              </div>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <div className="footer-box">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p><i className="fas fa-home me-3 text-secondary"></i> Mysore</p>
                <p>
                  <i className="fas fa-envelope me-3 text-secondary"></i>
                  admin@stockx.com
                </p>
                <p><i className="fas fa-phone me-3 text-secondary"></i> + 91 8807259800</p>
                <p><i className="fas fa-print me-3 text-secondary"></i> + 91 8877259800</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
