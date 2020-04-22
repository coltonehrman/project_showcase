import React from 'react'
import './NavHeader.css'

const NavHeader = ({
  title
}) => {
  return (
    <div className="navheader">
      <h4 className="navheader--title">{title}</h4>
    </div>
  )
}

export default NavHeader
