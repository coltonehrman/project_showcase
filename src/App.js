import React, { useState, useEffect, useContext } from 'react';
import { Route, useHistory } from 'react-router-dom'
import NavBar from './components/NavBar'
import Dashboard from './components/Dashboard'
import Section from './components/Section'
import Card from './components/Card'
import storage from './controllers/storage'
import './css/App.css'

export const ModeContext = React.createContext('static')

function ProjectCards() {
  const history = useHistory()
  const { mode } = useContext(ModeContext)

  const renderProjectRows = () => {
    const projects = [...storage.getProjects(mode)]
    const rows = Math.ceil(projects.length / 4)
    let row = 0
    const rowElements = []

    while (row++ < rows) {
      const colElements = projects.splice(0, 4).map((project, i) => {
        let paddingRight = '25px'
        let paddingLeft = '25px'
        if (i !== 3) paddingRight = '12.5px'
        if (i !== 0) paddingLeft = '12.5px'

        let background = null
        const bgImage = storage.project(project, mode).getImages()[0]
        if (bgImage) background = `url(${bgImage}) no-repeat center center`

        return (
          <Section
            key={i}
            title={project}
            bodyStyle={{ paddingRight, paddingLeft }}
            sectionStyle={{ width: '25%' }}
          >
            <Card
              style={{
                background,
                backgroundSize: 'cover',
                height: '250px',
                borderRadius: '0.5rem',
                cursor: 'pointer'
              }}
              onClick={() => history.push(`/${project}`)}
            ></Card>
          </Section>
        )
      })

      rowElements.push(
        <div key={row} style={{ display: 'flex' }}>
          {colElements}
        </div>
      )
    }

    return rowElements
  }

  return renderProjectRows()
}

function App() {
  const [mode, setMode] = useState('static')

  return (
    <ModeContext.Provider value={{ mode, setMode }}>
      <div className="App">
        <div className="container">
          <NavBar />

          <Route path="/" exact>
            <div style={{ flex: '4', overflow: 'scroll' }}>
              <div style={{ padding: '2rem 0' }}>
                <ProjectCards />
              </div>
            </div>
          </Route>

          <Route path="/:project/" exact>
            <Dashboard />
          </Route>
        </div>
      </div>
    </ModeContext.Provider>
  )
}

export default App
