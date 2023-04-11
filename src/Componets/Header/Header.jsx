import React from "react";
import { Link } from "react-router-dom";
import './Header.css'


const Header = () => {
  return (
    <nav className="header-nav">
      <div className="job-track-title">Job Track</div>
      <div className="nav-link">
        <Link to="/"> Home </Link>
        <Link to="/chart">Statistics</Link>
        <Link to="/apply">Applied Jobs</Link>
        <Link to="/blog">Blog</Link>
      </div>
      <div className="">
        <button className="same-btn">Star Applying</button>
      </div>
    </nav>
  );
};

export default Header;