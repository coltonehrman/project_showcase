import React from 'react'
import '../css/NavLink.css'

const NavLink = ({
  text,
  active = false
}) => {
  return (
    <div className={`navlink ${active ? 'navlink--active' : ''}`}>
      {text}
    </div>
  )
}

export default NavLink
