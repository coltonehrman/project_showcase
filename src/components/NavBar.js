import React, { useState, useContext, useEffect } from 'react'
import { Route, NavLink, useParams } from 'react-router-dom'
import { ModeContext } from '../App'
import storage from '../controllers/storage'
import '../css/NavBar.css'

const NavHeader = ({ title, children }) => {
  return (
    <div className="navbar--header">
      <h4 className="navbar--header__title">{title}</h4>
      {children}
    </div>
  )
}

const ProjectLinks = () => {
  const { mode, setMode } = useContext(ModeContext)

  const [projects, setProjects] = useState(null)

  useEffect(() => {
    setProjects(
      storage.getProjects({
        staticData: (mode === 'static')
      }).map(project => ({
        text: project, editing: false
      }))
    )
  }, [mode])

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
    storage.addProject(projects[i].text)
  }

  if (!projects) return null

  return (
    <div className="navbar">
      <NavHeader title="My Projects">
        <div className="navbar--links">
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
        </div>
      </NavHeader>

      <div className="navbar--footer">
        {mode === 'edit' &&
          <>
            <button
              className="navlink navlink--add"
              onClick={addNewProject}
            >
              + New Project
            </button>

            <NavLink
              to="/?export"
              className="navlink navlink--export"
            >
              Export Data
            </NavLink>
          </>
        }

        <button
          className={`navlink navlink--mode navlink--mode__${mode}`}
          onClick={() => {
            if (mode === 'static') {
              setMode('edit')
            } else if (mode === 'edit') {
              setMode('static')
            }
          }}
        >
          MODE: <span className="navlink--mode__type">{mode}</span>
        </button>
      </div>
    </div>
  )
}

const ProjectDetailLinks = () => {
  const { project } = useParams()

  return (
    <div className="navbar">
      <NavHeader title={project}>
        <div className="navbar--links">
          <NavLink
            to={`/${project}/`}
            className="navlink"
            activeClassName="navlink--active"
            replace
            exact
          >
            Dashboard
          </NavLink>

          {/* <NavLink
            to={`/${project}/design/ideas`}
            className="navlink"
            activeClassName="navlink--active"
            replace
            exact
          >
            Design Ideas
          </NavLink> */}

          {/* <NavLink
            to={`/${project}/react-components`}
            className="navlink"
            activeClassName="navlink--active"
            replace
            exact
          >
            React Components
          </NavLink> */}

          {/* <NavLink
            to={`/${project}/timeline`}
            className="navlink"
            activeClassName="navlink--active"
            replace
            exact
          >
            Timeline
          </NavLink> */}

          {/* <NavLink
            to={`/${project}/uml`}
            className="navlink"
            activeClassName="navlink--active"
            replace
            exact
          >
            UML
          </NavLink> */}

          {/* <NavLink
            to={`/${project}/tasks`}
            className="navlink"
            activeClassName="navlink--active"
            replace
            exact
          >
            Tasks
          </NavLink> */}

          {/* <NavLink
            to={`/${project}/statistics`}
            className="navlink"
            activeClassName="navlink--active"
            replace
            exact
          >
            Statistics
          </NavLink> */}

          {/* <NavLink
            to={`/${project}/settings`}
            className="navlink"
            activeClassName="navlink--active"
            replace
            exact
          >
            Settings
          </NavLink> */}
        </div>
      </NavHeader>
    </div>
  )
}

const NavBar = () => {
  return (
    <>
      <Route path="/" exact>
        <ProjectLinks />
      </Route>

      <Route path="/:project">
        <ProjectDetailLinks />
      </Route>
    </>
  )
}

export default NavBar
