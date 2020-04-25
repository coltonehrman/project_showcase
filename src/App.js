import React from 'react';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom'
import NavBar from './components/NavBar'
import Dashboard from './components/Dashboard'
import DesignIdeas from './components/DesignIdeas'
import './css/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <NavBar />

          <Route path="/" exact>
            <Dashboard />
          </Route>

          <Route path="/design/ideas" exact>
            <DesignIdeas />
          </Route>

          <Route path="/react/components" exact>
            
          </Route>

          <Route path="/timeline" exact>
            
          </Route>

          <Route path="/uml" exact>
            
          </Route>

          <Route path="/tasks" exact>
            
          </Route>

          <Route path="/statistics" exact>
            
          </Route>

          <Route path="/settings" exact>
            
          </Route>
        </div>
      </div>
    </Router>
  )
}

export default App
