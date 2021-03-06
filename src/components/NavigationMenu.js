import React from 'react'
import { Link } from 'react-router-dom';

function NavigationMenu(props) {
  return (
    <div>
      <span className="font-bold p-5 block">AppName</span>
        <ul>
          <li>
            <Link 
              to="/" 
              className="text-blue-500"
              onClick={props.closeMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className="text-blue-500"
              onClick={props.closeMenu}
            >
              About Us
              </Link>
          </li>
          <li>
            <Link 
              to="/contact-us" 
              className="text-blue-500"
              onClick={props.closeMenu}
            >
              Contact Us
              </Link>
          </li>
        </ul>
    </div>
  )
}

export default NavigationMenu