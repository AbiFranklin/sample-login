import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import EmailLogIn from './Component/EmailLogIn';
import Login from './Component/Login';
import Error from './Component/Error';
import logo from './Component/assets/images/logo.svg'


function App() {
  return (
    <div className="App">
      <div className='header'><img src={logo} alt='logo' /></div>
      <Switch>
        <Route exact path="/">
          <EmailLogIn />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/error">
          <Error />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
