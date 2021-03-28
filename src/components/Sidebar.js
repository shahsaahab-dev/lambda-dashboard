import React from 'react'
import logo from '../logo.png';
import Logo from './Logo';
import NavStack from './NavStack';
const Sidebar = () => {

    return (
        <div className="sidebar__wrapper">
            {(logo)?<Logo />:''}
            <NavStack/>
        </div>
    )
}

export default Sidebar;