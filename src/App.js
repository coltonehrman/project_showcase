import React, { useState } from 'react';
import { Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Dashboard from './components/Dashboard'
import DesignIdeas from './components/DesignIdeas'
import './css/App.css'

export const ModeContext = React.createContext('static')

function App() {
  const [mode, setMode] = useState('static')

  return (
    <ModeContext.Provider value={{ mode, setMode }}>
      <div className="App">
        <div className="container">
          <NavBar />

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
