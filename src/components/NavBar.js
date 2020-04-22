import React from 'react'
import NavHeader from './NavHeader'
import NavLink from './NavLink'
import './NavBar.css'

const NavBar = () => {
  return (
    <div className="navbar">
      <NavHeader title="Project Name" />
      
      <div className="navbar--links">
        <NavLink text="Dashboard" active />
        <NavLink text="Timeline" />
        <NavLink text="UML" />
        <NavLink text="Tasks" />
        <NavLink text="Statistics" />
        <NavLink text="Settings" />
      </div>
    </div>
  )
}

export default NavBar
