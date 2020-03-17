import React from 'react'
import './NavBar.css'
import NavBarButton from './NavBarButton/NavBarButton.js'

const NavBar = () => {
    return (
        <div className="NavButtons">
            <NavBarButton/>
            <NavBarButton/>
            <NavBarButton/>
            <NavBarButton/>
            <NavBarButton/>
        </div>
    )
}

export default NavBar
