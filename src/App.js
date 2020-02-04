import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <input placeholder="Email" />
      <p>{window.location.href}</p>
      <p>{window.location.search}</p>
    </div>
  );
}

export default App;
