import React from 'react'
import {Link} from "react-router-dom";
import {NavbarData as Menu} from './Data';


const NavStack = () => {
    return (
        <div>
          <nav>
            <ul>
            {Menu.map(navItem => (
               <li key={navItem.id}><Link to={navItem.path}>{navItem.title}</Link></li>
            ))}
            </ul>
          </nav>
        </div>
    )
}

export default NavStack;