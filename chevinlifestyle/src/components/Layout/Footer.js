import React from 'react'
import 'primeicons/primeicons.css';
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    // <div>
    //   <h1>footer</h1>
    // </div>
    <div className="footer">
    <div className="footer1">
      <div className='footer-logo'>
      <Link to="/"><img className="footerlogo"src="/images/logo1.png " alt='img'/></Link>
      </div>
      
      <div className="footer-menu">
  <Link to="/about" className="footer-link">About</Link>
  <Link className="footer-link">Account</Link>
  <Link to="/careers" className="footer-link">Careers</Link>
  <Link to="/contact" className="footer-link">Contact us</Link>
  
      </div>
      
      <div className='social-icons'>
        
    <Link className='link' to="https://www.instagram.com/chevin_lifestyle/">  <i className="pi pi-instagram" style={{ fontSize: '3rem' }}></i></Link>
    <Link className='link' to="">   <i className="pi pi-facebook" style={{ fontSize: '3rem' }}></i></Link>
    <Link className='link' to="https://www.linkedin.com/company/chevinbags/mycompany/?viewAsMember=true"> <i className="pi pi-linkedin" style={{ fontSize: '3rem' }}></i></Link>
        {/* <div><Link><img className="facebook" src="/images/facebook_logo.png" alt=" logo" /></Link></div>
        <div ><Link><img className="insta" src="/images/insta_logo.png" alt=" logo" /></Link></div>
        <div ><Link><img className="linkedin" src="/images/linkedin_logo.jpg" alt=" logo" /></Link></div> */}
      </div>
    </div>
    <div className="footer2">
    <h1 className='text-center with-padding'>Copyright © 2023 Chevin Lifestyle</h1>
    </div>

</div>
  )
}

export default Footer
