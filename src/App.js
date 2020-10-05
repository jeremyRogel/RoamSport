import React from 'react';
import NavBar from './components/navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar></NavBar>
        <p>
         <code>Welcome to RoamSport</code>
        </p>
        <a>
          What's Your Finish Line?
        </a>
      </header>
    </div>
  );
}

export default App;
