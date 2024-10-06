// rfce

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LibraryLogo from '../assets/Library.svg'
import { Link } from "react-router-dom"

// The 'Nav' functional component, taking 'numberOfItems' as a prop to display cart item count
const Nav = ({numberOfItems}) => {

  // Function to open the mobile menu by adding a CSS class to the body
  function openMenu() {
    // Adds the 'menu--open' class to the body tag, typically used to show the mobile menu
    document.body.classList += " menu--open"
  }

  // Function to close the mobile menu by removing the CSS class
  function closeMenu() {
    // Removes the 'menu--open' class from the body tag, hiding the mobile menu
    document.body.classList.remove("menu--open")
  }

  // The return block renders the actual JSX for the navigation bar
  return (
    <nav>
      {/* Main container for the navigation bar */}
      <div className='nav__container'>
        
        {/* Logo that links to the home page */}
        <Link to="/">
          {/* Using the imported logo asset */}
          <img src={LibraryLogo} alt="Library Logo" className="logo" />
        </Link>

        {/* Unordered list containing the main navigation links */}
        <ul className='nav__links'>
          
          {/* Home link */}
          <li className="nav__list">
            {/* The Link component navigates to the home page when clicked */}
            <Link to="/" className="nav__link">
              Home
            </Link>
          </li>

          {/* Books link */}
          <li className="nav__list">
            {/* The Books link with an additional 'nav__link--primary' class for styling */}
            <Link to="/books" className="nav__link nav__link--primary">
              Books
            </Link>
          </li>

          {/* MOBILE MENU button for opening the mobile navigation menu */}
          <button className='btn__menu' onClick={openMenu}>
            {/* FontAwesome icon for a 'hamburger' menu */}
            <FontAwesomeIcon icon="bars" />
          </button>

          {/* Cart icon with a dynamic item count badge */}
          <li className="nav__icon">
            {/* Link to the cart page */}
            <Link to="/cart" className='nav__link'>
              {/* Shopping cart icon */}
              <FontAwesomeIcon icon='shopping-cart' />
            </Link>
            {/* Conditional rendering to show the number of items in the cart if the count is greater than 0 */}
            {
              numberOfItems > 0 && <span className="cart__length">{numberOfItems}</span>
            }
          </li>
        </ul>

        {/* Backdrop for the mobile menu; this will cover the screen when the mobile menu is open */}
        <div className="menu__backdrop">
          {/* Button to close the mobile menu */}
          <button className="btn__menu btn__menu--close" onClick={closeMenu}>
            {/* FontAwesome icon for a 'close' or 'X' mark */}
            <FontAwesomeIcon icon="xmark" />
          </button>

          {/* Unordered list containing links for the mobile menu */}
          <ul className='menu__links'>
            {/* Mobile Home link */}
            <li className="menu__list">
              <Link to="/" className="menu__link">
                Home
              </Link>
            </li>

            {/* Mobile Books link */}
            <li className="menu__list">
              <Link to="/books" className="menu__link">
                Books
              </Link>
            </li>

            {/* Mobile Cart link */}
            <li className="menu__list">
              <Link to="/cart" className="menu__link">
                Cart
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

// Exporting the Nav component to be used in other parts of the application
export default Nav