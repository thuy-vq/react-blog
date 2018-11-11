import React from 'react'
import {Link} from 'react-router-dom';

const Navbar = () => {
  return  (
    // <ul>
    //   <li>
    //     <Link to="/">Root page</Link>
    //   </li>
    //   <li>
    //     <Link to="/about">About page</Link>
    //   </li>
    //   <li>
    //     <Link to="/home">Home page</Link>
    //   </li>
    // </ul>
    
<nav className="topbar topbar-inverse topbar-expand-md topbar-sticky">
  <div className="container">
    <div className="topbar-left">
      <button className="topbar-toggler">☰</button>
      <Link className="topbar-brand" to="/">
        <img className="logo-default" src={`${process.env.PUBLIC_URL}/assets/img/logo.png`} alt="logo" />
        <img className="logo-inverse" src={`${process.env.PUBLIC_URL}/assets/img/logo-light.png`} alt="logo" />
      </Link>
    </div>
    <div className="topbar-right">
      <ul className="topbar-nav nav">
        <li className="nav-item"> 
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/articles/create">Write new article</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/article/garry">Hey Garry!
            <i className="fa fa-caret-down" />
          </Link>
          <div className="nav-submenu">
            <Link className="nav-link" to="/login">My articles</Link>
            <a className="nav-link" href="true">Logout</a>
          </div>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/signup">Signup</Link>
        </li>
      </ul> 
    </div>
  </div>
</nav>

    
  ); 
};

export default Navbar;