import React from 'react';

function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <h5>DOWNLOAD THE APP</h5>
              <a href="#" style={{width:"40%"}}><img src="https://i.pinimg.com/1200x/74/70/97/747097f26488c02998e6b81e5a7cc7b3.jpg" style={{width:"50%"}} alt="Google Play"/></a> <br />
            </div>
            <div className="col-md-3 col-sm-6">
              <h5>SHOP</h5>
              <ul className="list-unstyled">
                <li><a href="#">WOMAN</a></li>
                <li><a href="#">MAN</a></li>
                <li><a href="#">KIDS</a></li>
                <li><a href="#">BEAUTY</a></li>
                <li><a href="#">HOME</a></li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6">
              <h5>SITES & STORES</h5>
              <ul className="list-unstyled">
                <li><a href="#">ABOUT US</a></li>
                <li><a href="#">CONTACT US</a></li>
                <li><a href="#">STORE LOCATOR</a></li>
                <li><a href="#">MEDIA CENTER</a></li>
                <li><a href="#">SITEMAP</a></li>
                <li><a href="#">MEMBERSHIP</a></li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6">
              <h5>JOIN OUR NEWSLETTER</h5>
              <div className="subscribe">
                <input type="email" placeholder="Email Id" />
                <input type="submit" style={{backgroundColor:"black", color:"white", outline:"none",border:"none",width:"100%"}}></input>
              </div>
            </div>
          </div>
          <div className="row mt-4 ">
            <div className="col-md-12 text-center">
              <ul className="list-inline social-icons">
                <li className="list-inline-item"><a href="#"><i className="fab fa-twitter"></i></a></li>
                <li className="list-inline-item"><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                <li className="list-inline-item"><a href="#"><i className="fab fa-instagram"></i></a></li>
                <li className="list-inline-item"><a href="#"><i className="fab fa-youtube"></i></a></li>
              </ul>
              <ul className="list-inline terms">
                <li className="list-inline-item"><a href="#">TERMS & CONDITIONS</a></li>
                <li className="list-inline-item"><a href="#">PRIVACY POLICY</a></li>
                <li className="list-inline-item"><a href="#">RETURN POLICY</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;