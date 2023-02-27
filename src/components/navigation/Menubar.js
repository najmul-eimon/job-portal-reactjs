import { useEffect, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import {menuItems} from '../../data/menuItems';
import logo from '../../assets/images/svg/logo.svg';

const Menubar = () => {
  const [scroll, setScroll] = useState(false);
  
  useEffect(() => {
    document.addEventListener('scroll', () => {
      let scrolling = window.scrollY;

      if(scrolling > 200){
        setScroll(true);
      }
      else{
        setScroll(false);
      }
    });
  }, [])

  return (
    <header className={`menubar ${scroll ? 'navFixed' : ''}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <Navbar expand="lg">
              <Link className="navbar-brand" to="/">
                <img src={logo} alt="Logo"/>
              </Link>
              <Navbar.Toggle aria-controls="basic-navbar-nav" >
                <span className="navbar-toggler-icon">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.9375 5H14.0625" stroke="#0075C8" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"/>
                    <path d="M3.125 10H16.875" stroke="#0075C8" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"/>
                    <path d="M5.9375 15H14.0625" stroke="#0075C8" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"/>
                  </svg>                    
                </span>
              </Navbar.Toggle>
              <Navbar.Collapse id="basic-navbar-nav">
                <ul className="navbar-nav me-auto">
                  {
                    menuItems.map(({id, name, link}) => (
                      <li key={id} className="nav-item">
                        <NavLink className="nav-link" to={link === 'home' ? '/' : link}>{name}</NavLink>
                      </li>
                    ))
                  }
                </ul>
                <ul className="navbar-nav right-nav">
                  <li>
                    <Link to="/register" className="animate-btn animate-btn-outline register-btn">Register</Link>
                  </li>
                  <li>
                    <Link to="/login" className="animate-btn animate-btn-fill login-btn">Login</Link>
                  </li>
                </ul>
              </Navbar.Collapse>
            </Navbar>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Menubar;