import React from 'react';
import { Link } from 'react-router-dom';

const Navbars = () => {
  return (
    <div className="container-fluid bg-light">
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex align-items-center justify-content-between flex-column flex-lg-row align-items-lg-center">
            <div className="col-8 m-auto col-lg-3">
              <Link to="/" className="nav-link p-0">
                <img src="https://www.westside.com/cdn/shop/files/w-logo.png?v=1687335574&width=210" alt="Westside Logo"/>
              </Link>
            </div><br/>
            <div className="col-12 col-lg-8">
              <div className="search-container">
                <input
                  type="text"
                  placeholder="Search For West-side"
                  className="search-input form-control"
                style={{padding:"6px 40px"}}/>
                <span className="search-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-search"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </span>
              </div>
            </div><br/>
            <div className="col-6 col-lg-1">
              <ul className="list-unstyled d-flex justify-content-between align-items-center">
                <li><Link className="nav-link p-2"><i className="bi bi-heart"></i></Link></li>
                <li><Link to="/Cart" className="nav-link p-0"><i className="bi bi-bag"></i></Link></li>
                <li><Link to="/Login" className="nav-link p-0">Signin</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 m-auto">
            <ul className="list-unstyled d-flex justify-content-center flex-wrap">
              <li><Link className="nav-link p-2 fw-bold" to="/Suits">SALE</Link></li>
              <li><Link className="nav-link p-2 fw-bold" to="/product">WOMEN</Link></li>
              <li><Link className="nav-link p-2 fw-bold" to="/manproduct">MEN</Link></li>
              <li><Link className="nav-link p-2 fw-bold">KIDS</Link></li>
              <li><Link className="nav-link p-2 fw-bold">BEAUTY</Link></li>
              <li><Link className="nav-link p-2 fw-bold" to="/Homes">HOME</Link></li>
              <li><Link className="nav-link p-2 fw-bold">BRAND</Link></li>
              <li><Link className="nav-link p-2 fw-bold">W-STYLE</Link></li>
              <li><Link className="nav-link p-2 fw-bold">VIEW MORE</Link></li>
            </ul> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbars;
