import React from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../context";
import { LinkComponent } from "../utils/links";
const Navbar = () => {
  const {openSidebar } = useGlobalContext();
  return (
    <nav className="nav">
      <div className="container nav-container">
        <header className="nav-header">
          <div className="nav-toggler">
            <button className="icon-btn btn nav-toggler" onClick={openSidebar}>
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
