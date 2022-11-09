import React from 'react';
import logo from '../../images/SA.L.E.T.-1.png';
import "./Header.css";

const Header = () => {
  return (
    <>
        <div className='header-container container'>
        <div className='logo-image-container'>
        <img src={logo} className="logo-image"></img>
        </div>
        <div className='nav-heading-container'>
            <ul>
               <li>
                Why are we creating it?
               </li>
               <li>
               Who should use SA.L.E.T.?
               </li>
               <li>
                Work with Us
               </li>
               <li>
                Contact Us
               </li>
            </ul>
        </div>
        </div>
    </>
  )
}

export default Header