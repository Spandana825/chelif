import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { useAuth } from '../../context/auth';
import { HiLogout } from "react-icons/hi";
import { FaHouseUser } from "react-icons/fa";
import toast from 'react-hot-toast';
import useCategory from '../../hooks/useCategory';
import SearchInput from '../Form/SearchInput';
const Header = () => {
  const [auth,setAuth]=useAuth();
  const categories=useCategory()
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
    <Link className="navbar-brand" to="/">
     <FaHeart/>
    </Link>
    {!auth.user?(
      <Link  className="navbar-brand" to="/register">
      <FaUser/>
     </Link>
    ):(
      <>
      <Link  onClick={handleLogout} className="navbar-brand" to="/register">
      <HiLogout />
     </Link>
     <Link  className="navbar-brand" 
     to={`/dashboard/${
                auth?.user?.role===1 ?"admin":"user"
     }`}>
      <FaHouseUser />
      </Link>
      <h4 className='heyuser'>Hi {auth?.user?.name},</h4>
     </>
    )}
  
    
    
   
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
          <SearchInput/>
        </li>
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
            {categories?.map((c)=>(
              <li>
              <Link className="dropdown-item" to={`/category/${c.slug}`}>
                {c.name}
              </Link>
            </li>

            ))}
          
             {/* <li>
              <Link className="dropdown-item" to={`/category/$}`}>
                School Backpacks<span style={{ color: 'red', fontSize:"13px" }}>(coming soon)</span>
              </Link>
            </li>  */}
            <li>
              <Link className="dropdown-item" to={`/category/$`}>
                Wheeled Duffle<span style={{ color: 'red', fontSize:"13px"}}>(coming soon)</span>
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to={`/category/$`}>
                T-Shirts<span style={{ color: 'red' , fontSize:"13px"}}>(coming soon)</span>
              </Link>
            </li>
             {/* <li>
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
            </li> */}
            
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
              <Link className="dropdown-item" to={`/category/daypacks`}>
                CHEVIN
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to={`/category/bags-for-her`}>
                AYS
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to={`/category/rucksacks`}>
                CHEVIN SPORTS
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to={`/category/casuals`}>
              CHEVIN CASUALS
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to={`/category/business-backpacks`}>
                CHEVIN BUSINESS
              </Link>
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
