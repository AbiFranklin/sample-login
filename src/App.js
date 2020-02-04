import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <input placeholder="email" />
      <p>{window.location.search}</p>
      <p>{window.location.href}</p>
    </div>
  );
}

export default App;
