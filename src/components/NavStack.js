import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Listings from './Listings';
import Profile from './Profile';
  
const NavStack = () => {
    return (
    <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Listings</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
            </ul>
          </nav>

         
        </div>
      </Router>
    )
}

export default NavStack;