import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    // <div>
    //   <h1>footer</h1>
    // </div>
    <div className="footer">
    <div className="footer1">
      <div className='footer-logo'>
        <h1>logo</h1>
      </div>
      
      <div className="footer-menu">
  <Link to="/about" className="footer-link">About</Link>
  <Link className="footer-link">Account</Link>
  <Link className="footer-link">Careers</Link>
  <Link to="/contact" className="footer-link">Contact us</Link>
  
      </div>
      <div className='social-icons'>
        <h1>social icons logo</h1>
      </div>
    </div>
    <div className="footer2">
    <h1 className='text-center with-padding'>Copyright © 2023 Chevin Lifestyle</h1>
    </div>

</div>
  )
}

export default Footer
