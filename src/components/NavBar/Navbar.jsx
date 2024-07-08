import React from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { LinkComponent } from "../../utils/links";
const Navbar = () => {
  
  return (
    <nav className="nav">
      <div className="container nav-container">
        <header className="nav-header">
          <Link to="/" className="nav-brand">
            Susan Nail Art
          </Link>
          <div className="nav-toggler">
            <button className="icon-btn btn nav-toggler">
              <FaBars className="nav-icon" />
            </button>
          </div>
        </header>
        <LinkComponent classLink="nav-links" />
      </div>
    </nav>
  );
};

export default Navbar;
