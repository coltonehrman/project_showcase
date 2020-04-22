import React from 'react'
import {
  Link,
  useLocation
} from 'react-router-dom'
import NavHeader from './NavHeader'
import NavLink from './NavLink'
import './NavBar.css'

const NavBar = () => {
  const { pathname: path } = useLocation()

  return (
    <div className="navbar">
      <NavHeader title="Project Name" />
      
      <div className="navbar--links">
        <Link to="/">
          <NavLink text="Dashboard" active={path === '/'} />
        </Link>

        <Link to="/design/ideas">
          <NavLink text="Design Ideas" active={path === '/design/ideas'} />
        </Link>

        <Link to="/react/components">
          <NavLink text="React Components" active={path === '/react/components'} />
        </Link>

        <Link to="/timeline">
          <NavLink text="Timeline" active={path === '/timeline'} />
        </Link>

        <Link to="/uml">
          <NavLink text="UML" active={path === '/uml'} />
        </Link>

        <Link to="/tasks">
          <NavLink text="Tasks" active={path === '/tasks'} />
        </Link>

        <Link to="/statistics">
          <NavLink text="Statistics" active={path === '/statistics'} />
        </Link>

        <Link to="/settings">
          <NavLink text="Settings" active={path === '/settings'} />
        </Link>
      </div>
    </div>
  )
}

export default NavBar
