import React from 'react';
import NavBar from './components/NavBar'
import Dashboard from './components/Dashboard'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <NavBar />
        <Dashboard />
      </div>
    </div>
  )
}

export default App
