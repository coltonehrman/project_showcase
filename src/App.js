import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import NavBar from './components/NavBar'
import Dashboard from './components/Dashboard'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <NavBar />

          <Route path="/" exact>
            <Dashboard />
          </Route>

          <Route path="/react/components" exact>
            <Dashboard />
          </Route>
        </div>
      </div>
    </Router>
  )
}

export default App
