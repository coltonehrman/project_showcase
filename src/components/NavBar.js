import React, { useState } from 'react'
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
  const [projects, setProjects] = useState(
    storage.getProjects().map(project => ({
      text: project, editing: false
    }))
  )

  const addNewProject = () => {
    setProjects([...projects, { text: '', editing: true }])
  }

  const setProject = (i) => (e) => {
    projects[i].text = e.target.value
    setProjects([...projects])
  }

  const saveProject = (i) => () => {
    projects[i].editing = false

    if (projects[i].text.trim() === '') {
      projects.splice(i, 1)
      return setProjects([...projects])
    }

    setProjects([...projects])
    storage.project(projects[i].text)
  }

  return (
    <div className="navbar">
      <NavHeader title="Project Name" />
      
      <div className="navbar--links">
        <Route path="/" exact>
          {projects.map((project, i) => (
            (project.editing) ?
              <input
                key={i}
                value={project.text}
                className="navlink navlink--edit"
                onChange={setProject(i)}
                onBlur={saveProject(i)}
                autoFocus
              /> :
              <NavLink
                key={i}
                to={`/${project.text}/`}
                className="navlink"
              >
                {project.text}
              </NavLink>
          ))}

          <button
            className="navlink navlink--add"
            onClick={addNewProject}
          >
            + New Project
          </button>
        </Route>

        <Route path="/:project">
          <ProjectLinks />
        </Route>
      </div>
    </div>
  )
}

export default NavBar
