import React from 'react'
import {
  Route,
  NavLink,
  useParams
} from 'react-router-dom'
import NavHeader from './NavHeader'
import storage from '../controllers/storage'
import '../css/NavBar.css'

const ProjectLinks = () => {
  const { project } = useParams()

  return (
    <>
      <NavLink
        to={`/${project}/`}
        className="navlink"
        activeClassName="navlink--active"
        replace
        exact
      >
        Dashboard
      </NavLink>

      <NavLink
        to={`/${project}/design/ideas`}
        className="navlink"
        activeClassName="navlink--active"
        replace
        exact
      >
        Design Ideas
      </NavLink>

      <NavLink
        to={`/${project}/react-components`}
        className="navlink"
        activeClassName="navlink--active"
        replace
        exact
      >
        React Components
      </NavLink>

      <NavLink
        to={`/${project}/timeline`}
        className="navlink"
        activeClassName="navlink--active"
        replace
        exact
      >
        Timeline
      </NavLink>

      <NavLink
        to={`/${project}/uml`}
        className="navlink"
        activeClassName="navlink--active"
        replace
        exact
      >
        UML
      </NavLink>

      <NavLink
        to={`/${project}/tasks`}
        className="navlink"
        activeClassName="navlink--active"
        replace
        exact
      >
        Tasks
      </NavLink>

      <NavLink
        to={`/${project}/statistics`}
        className="navlink"
        activeClassName="navlink--active"
        replace
        exact
      >
        Statistics
      </NavLink>

      <NavLink
        to={`/${project}/settings`}
        className="navlink"
        activeClassName="navlink--active"
        replace
        exact
      >
        Settings
      </NavLink>
    </>
  )
}

const NavBar = () => {
  const projects = storage.getProjects()

  return (
    <div className="navbar">
      <NavHeader title="Project Name" />
      
      <div className="navbar--links">
        <Route path="/" exact>
          {projects.map((project, i) => (
            <NavLink
              key={i}
              to={`/${project}/`}
              className="navlink"
            >
              {project}
            </NavLink>
          ))}
        </Route>

        <Route path="/:project">
          <ProjectLinks />
        </Route>
      </div>
    </div>
  )
}

export default NavBar
