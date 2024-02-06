
import React from 'react';
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
            <img src="https://cdni.iconscout.com/illustration/premium/thumb/ecommerce-3465500-2912114.png"alt="logo" />
            <h3>THE DP STORE</h3>
            </div>
           
        <div className="navbar-links">
          <div className="nav-link">Products</div>
          <div className="nav-link">Cart</div>
          <div className="nav-link">Login</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
