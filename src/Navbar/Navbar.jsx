
import React, { useState } from 'react';
import './Navbar.css'
import Menuitem from './Menuitem';


const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="main-navbar shadow-sm sticky-top">
                <div className="top-navbar">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-2 my-auto d-md-block d-lg-block">
                                <h5 className="brand-name">Shop.online</h5>
                            </div>
                            <div className="col-md-5 my-auto">
                                <form role="search">
                                    <div className="input-group">
                                        <input type="search" placeholder="Search your product" className="form-control" />
                                        <button className="btn bg-white" type="submit">
                                            <i className="fa fa-search"></i>
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className="col-md-5 my-auto">
                                <ul className="nav justify-content-end">

                                    <li className="nav-item">
                                        <a className="nav-link" href="#" style={{ background: 'none' }}>
                                            <i className="fa fa-shopping-cart"></i> Cart (0)
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#" style={{ background: 'none' }}>
                                            <i className="fa fa-heart"></i> Wishlist (0)
                                        </a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a style={{ background: 'none' }} className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={toggleDropdown}>
                                            <i className="fa fa-user"></i> Username
                                        </a>
                                        {isOpen && (<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li><a className="dropdown-item" href="#"><i className="fa fa-user"></i> Profile</a></li>
                                            <li><a className="dropdown-item" href="#"><i className="fa fa-list"></i> My Orders</a></li>
                                            <li><a className="dropdown-item" href="#"><i className="fa fa-heart"></i> My Wishlist</a></li>
                                            <li><a className="dropdown-item" href="#"><i className="fa fa-shopping-cart"></i> My Cart</a></li>
                                            <li><a className="dropdown-item" href="#"><i className="fa fa-sign-out"></i> Logout</a></li>
                                        </ul>)}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div >
                </div>
            </div>
            <Menuitem />
        </>
    );
};

export default Navbar;
