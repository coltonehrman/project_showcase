import React, { useState } from 'react';
import { Route, useLocation } from 'react-router-dom'
import NavBar from './components/NavBar'
import Dashboard from './components/Dashboard'
import DesignIdeas from './components/DesignIdeas'
import storage from './controllers/storage'
import './css/App.css'

export const ModeContext = React.createContext('static')

function App() {
  const [mode, setMode] = useState('static')
  const { search } = useLocation()

  return (
    <ModeContext.Provider value={{ mode, setMode }}>
      <div className="App">
        <div className="container">
          <NavBar />

          <Route path="/" exact>
            {(search === '?export') ?
              (
                <div style={{ flex: '4', overflow: 'scroll', margin: '25px' }}>
                  <pre>{storage.getJSON({ staticData: (mode === 'static') })}</pre>
                </div>
              ) : <div style={{ flex: '4' }}></div>
            }
          </Route>

          <Route path="/:project/" exact>
            <Dashboard />
          </Route>

          <Route path="/:project/design/ideas" exact>
            <DesignIdeas />
          </Route>

          <Route path="/:project/react/components" exact>
            
          </Route>

          <Route path="/:project/timeline" exact>
            
          </Route>

          <Route path="/:project/uml" exact>
            
          </Route>

          <Route path="/:project/tasks" exact>
            
          </Route>

          <Route path="/:project/statistics" exact>
            
          </Route>

          <Route path="/:project/settings" exact>
            
          </Route>
        </div>
      </div>
    </ModeContext.Provider>
  )
}

export default App
