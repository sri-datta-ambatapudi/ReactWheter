import React from "react";
import { Link } from "react-router-dom";


function Footer() {




  return (
    <footer className="text-dark text-center text-lg-start py-4" style={{ backgroundColor: "#ccecff" }}>
      <div className="container">
        <div className="row">

          <div className="col-12 col-md-6 mb-3 mb-md-0">
            <h5 className="fw-bold">Weather Updates</h5>
            <p className="text-muted mediam">Designed and built with all the love in the world.</p>
          </div>


          <div className="col-12 col-md-6 text-center text-md-end">
            <h5 className="fw-bold">Follow Us</h5>
            <ul className="d-flex justify-content-center justify-content-md-end gap-3 list-unstyled m-0">
              <li>
                <Link to="/" className="text-dark text-decoration-none">
                  <i className="bi bi-house-door-fill fs-4"></i>
                </Link>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/ambataputi-sri-datta-venkata-subrahmanyam-17a29a28b/" className="text-dark text-decoration-none" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-linkedin fs-4"></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/" className="text-dark text-decoration-none" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-github fs-4"></i>
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/" className="text-dark text-decoration-none" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-youtube fs-4"></i>
                </a>
              </li>
              <li>
                <a href="https://getbootstrap.com/" className="text-dark text-decoration-none" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-bootstrap fs-4"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>




        <div className="text-center mt-3 text-muted small">
          &copy; {new Date().getFullYear()} Weather Updates. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
