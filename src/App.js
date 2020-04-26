import React from 'react';
import {
  Route
} from 'react-router-dom'
import NavBar from './components/NavBar'
import Dashboard from './components/Dashboard'
import DesignIdeas from './components/DesignIdeas'
import './css/App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <NavBar />

        <Route path="/:project/">
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
  )
}

export default App
