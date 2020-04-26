import React from 'react'
import {
  Route,
  Link,
  useLocation,
  useParams
} from 'react-router-dom'
import NavHeader from './NavHeader'
import NavLink from './NavLink'
import storage from '../controllers/storage'
import '../css/NavBar.css'

const ProjectLinks = () => {
  const { pathname: path } = useLocation()
  const { project } = useParams()

  return (
    <>
      <Link to={`/${project}/`}>
        <NavLink text="Dashboard" active={path === '/'} />
      </Link>

      <Link to={`/${project}/design/ideas`}>
        <NavLink text="Design Ideas" active={path === '/design/ideas'} />
      </Link>

      <Link to={`/${project}/react-components`}>
        <NavLink text="React Components" active={path === '/react/components'} />
      </Link>

      <Link to={`/${project}/timeline`}>
        <NavLink text="Timeline" active={path === '/timeline'} />
      </Link>

      <Link to={`/${project}/uml`}>
        <NavLink text="UML" active={path === '/uml'} />
      </Link>

      <Link to={`/${project}/tasks`}>
        <NavLink text="Tasks" active={path === '/tasks'} />
      </Link>

      <Link to={`/${project}/statistics`}>
        <NavLink text="Statistics" active={path === '/statistics'} />
      </Link>

      <Link to={`/${project}/settings`}>
        <NavLink text="Settings" active={path === '/settings'} />
      </Link>
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
            <Link key={i} to={`/${project}/`}>
              <NavLink text={project} />
            </Link>
          ))}
        </Route>

        <Route path="/:project" exact>
          <ProjectLinks />
        </Route>
      </div>
    </div>
  )
}

export default NavBar
