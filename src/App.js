import React, { useState } from 'react';
import { Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Dashboard from './components/Dashboard'
import './css/App.css'

export const ModeContext = React.createContext('static')

function App() {
  const [mode, setMode] = useState('static')

  return (
    <ModeContext.Provider value={{ mode, setMode }}>
      <div className="App">
        <div className="container">
          <NavBar />

          <Route path="/" exact>
            <div style={{ flex: '4' }}></div>
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
