import React, { useState, useContext, useEffect } from 'react'
import { Route, NavLink, useParams } from 'react-router-dom'
import { ModeContext } from '../App'
import storage from '../controllers/storage'
import '../css/NavBar.css'

function download(filename, json) {
  const $e = document.createElement('a')
  $e.setAttribute('href', 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(json)))
  $e.setAttribute('download', filename)

  $e.style.display = 'none'
  document.body.appendChild($e)
  $e.click()
  document.body.removeChild($e)
}

const NavHeader = ({ title, children }) => {
  return (
    <div className="navbar--header">
      <h4 className="navbar--header__title">{title}</h4>
      {children}
    </div>
  )
}

const NavFooter = ({
  addNewProject = false
}) => {
  const { mode, setMode } = useContext(ModeContext)

  return (
    <div className="navbar--footer">
      {mode === 'edit' &&
        <>
          {addNewProject &&
            <button
              className="navlink navlink--add"
              onClick={addNewProject}
            >
              + New Project
            </button>
          }

          <button
            className="navlink navlink--export"
            onClick={() => download('projects.json', storage.getJSON(mode))}
          >
            Export Data
          </button>
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
  )
}

const ProjectLinks = () => {
  const { mode } = useContext(ModeContext)

  const [projects, setProjects] = useState(null)

  useEffect(() => {
    setProjects(
      storage.getProjects(mode).map(project => ({
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

      <NavFooter addNewProject={addNewProject} />
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
        </div>
      </NavHeader>

      <NavFooter />
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
