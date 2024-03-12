import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { useAuth } from '../../context/auth';
import { HiLogout } from "react-icons/hi";
import toast from 'react-hot-toast';
const Header = () => {
  const [auth,setAuth]=useAuth();
  const handleLogout=()=>{
    setAuth({
      ...auth,
      user:null,
      token:"",
    });
    localStorage.removeItem("auth");
    toast.success(" Account Logout successfully")
  }
  return (
    <div className="header">
    <div className="header-1">
      
      <Link to="/"><img className="logo2"src="/images/logo2.png " alt='img'/></Link>
      <Link to="/"><img className="logo1"src="/images/logo1.png " alt='img'/></Link>
    </div>
    <div className="header-2">
        {/* <div className="nav-items">
                <ul className='nav-itmes-list'>
                    <li>Home</li>
                    <li><Link to="/">Home</Link></li>
                    <li>About us</li>
                    <li>New Arrivals</li>
                    <li>categories</li>
                    <li>contact us</li>
                    
                </ul>
            </div> */}
                    <nav className="navbar navbar-expand-lg bg-secondary-subtle">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">
    <FaShoppingCart />
    </Link>
    {!auth.user?(
      <Link  className="navbar-brand" to="/register">
      <FaUser/>
     </Link>
    ):(
      <Link  onClick={handleLogout} className="navbar-brand" to="/register">
      <HiLogout />
     </Link>
    )}
    
    <Link className="navbar-brand" to="/">
     <FaHeart/>
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" to="/about">
            About Us
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" to="/newarrivals">
            New Arrivals
          </NavLink>
        </li>
        <li className="nav-item dropdown">
          <NavLink
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Categories
          </NavLink>
          <ul className="dropdown-menu">
            <li>
              <NavLink className="dropdown-item" href="#">
                SCHOOL BACKPACKS<span style={{ color: 'red' }}>(coming soon)</span>
              </NavLink>
            </li>
            <li>
              <NavLink className="dropdown-item" href="#">
                CASUAL BACKPACKS
              </NavLink>
            </li>
            <li>
              <NavLink className="dropdown-item" href="#">
                WHEELED DUFFLE<span style={{ color: 'red' }}>(coming soon)</span>
              </NavLink>
            </li>
            <li>
              <NavLink className="dropdown-item" href="#">
              RUCKSACKS
              </NavLink>
            </li>
            <li>
              <NavLink className="dropdown-item" href="#">
                BAGS FOR HER
              </NavLink>
            </li>
            <li>
              <NavLink className="dropdown-item" href="#">
                BUSINESS BACKPACKS
              </NavLink>
            </li>
            <li>
              <NavLink className="dropdown-item" href="#">
                T-SHIRTS<span style={{ color: 'red' }}>(coming soon)</span>
              </NavLink>
            </li>
            <li>
              <NavLink className="dropdown-item" href="#">
                DAYPACKS
              </NavLink>
            </li>
            
          </ul>
        </li>
        <li className="nav-item dropdown">
          <NavLink
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Labels
          </NavLink>
          <ul className="dropdown-menu">
            <li>
              <NavLink className="dropdown-item" href="#">
                CHEVIN
              </NavLink>
            </li>
            <li>
              <NavLink className="dropdown-item" href="#">
                AYS
              </NavLink>
            </li>
            <li>
              <NavLink className="dropdown-item" href="#">
                CHEVIN SPORTS
              </NavLink>
            </li>
            <li>
              <NavLink className="dropdown-item" href="#">
              CHEVIN CASUALS
              </NavLink>
            </li>
            <li>
              <NavLink className="dropdown-item" href="#">
                CHEVIN BUSINESS
              </NavLink>
            </li>
            
          </ul>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/contact">
            Contact Us
          </NavLink>
        </li>
      </ul>
      
    </div>
  </div>
</nav>

        </div>
    </div>


  )
}

export default Header
