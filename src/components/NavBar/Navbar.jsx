import React from 'react'
import { Link } from 'react-router-dom';
import {FaBars} from 'react-icons/fa';
const Navbar = () => {
  return (
    <nav className='nav'>
      <div className='container nav-container'>
        <header className='nav-header'>
            <Link to="/" className='nav-brand'>
                <h1 className='logo'>Susan's Nail</h1>
            </Link>
            <div>
            <button type='button' className='icon-btn btn nav-toggle'>
                <FaBars className="nav-icon" />
            </button>
            </div>
        </header>

      </div>
    </nav>
  )
}

export default Navbar;
