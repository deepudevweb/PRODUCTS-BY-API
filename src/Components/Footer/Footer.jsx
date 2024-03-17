import React from 'react'
import './Footer.css'



function Footer() {
  return (
    <>
      <footer className="footer-area footer--light">
        <div className="footer-big">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-12">
                <div className="footer-widget">
                  <div className="widget-about">
                    <h3>Shop.Online</h3>
                    <p>A platform offering curated collections of trending products.Join us on the journey to discover the latest in fashion, tech, and more!</p>
                    <ul className="contact-details" style={{display:'flex', flexDirection:'column'}}>
                      <li>
                        <span className="icon-earphones">Call Us:</span>
                        <p>8810544170</p>
                      </li>
                      <li>
                        <span className="icon-envelope-open"></span> 
                        <p> <a href="deepuprajapati0846@gmail.com" style={{listStyle:"none", textDecoration:'none', color:'black'}}>deepuprajapati0846@gmail.com</a></p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-4">
                <div className="footer-widget">
                  <div className="footer-menu footer-menu--1">
                    <h4 className="footer-widget-title">Popular Category</h4>
                    <p>Watches</p>
                    <p>Smartphones</p>
                    <p>Women's wear</p>
                    <p>Jeans</p>
                    <p>Laptop</p>
                    <p>Electronics</p>
                    <p>Glasses</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-4">
                <div className="footer-widget">
                  <div className="footer-menu">
                    <h4 className="footer-widget-title">Our Company</h4>
                    <p>About Us</p>
                    <p>How It Works</p>
                    <p>Affiliates</p>
                    <p>Testimonials</p>
                    <p>Contact Us</p>
                    <p>Plan &amp; Pricing</p>
                    <p>Blog</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-4">
                <div className="footer-widget">
                  <div className="footer-menu no-padding">
                    <h4 className="footer-widget-title">Help Support</h4>
                    <p>Support Forum</p>
                    <p>Terms &amp; Conditions</p>
                    <p>Support Policy</p>
                    <p>Refund Policy</p>
                    <p>FAQs</p>
                    <p>Buyers Faq</p>
                    <p>Sellers Faq</p>
                  </div>
                </div>
              </div>
              </div>
            </div>
            <div className="social">
            <div class="hero">
      <div class="social-links">
        <a href="https://www.facebook.com/people/Deepu-Prajapati/pfbid0NSMUSrzPWPeWNjtxn3Z2iraeFN1AAebwhwxZuiKE1KatnmzkZqi83YeY7C7VJtwXl/?mibextid=ZbWKwL" target='_blank'><i class="fab fa-facebook-f"></i></a>
        <a href="https://www.linkedin.com/in/deepu-prajapati-49683a23b/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank'><i class="fab fa-instagram"></i></a>
        <a href="https://twitter.com/i/flow/login?redirect_after_login=%2FDeepu_0090" target='_blank'><i class="fab fa-twitter"></i></a>
        <a href="https://github.com/deepudevweb" target='_blank'><i class="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/deepu-prajapati-49683a23b/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank'><i class="fab fa-linkedin-in"></i></a>
      </div>
    </div>
            </div>
          </div>
        <div className="mini-footer">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="copyright-text">
                  <p>© Shop.Online 2024 All rights reserved. Created by <a href="https://github.com/deepudevweb" target='_blank' style={{listStyle:"none", textDecoration:'none', color:'white'}}>Deepu Prajapati</a> 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
