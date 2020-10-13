// import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

import NavigationBar from './Components/NavigationBars/NavigationBar';
import RegisterForm from './Components/RegisterForm/RegisterForm';
import LoginPages from './Components/LoginPages/LoginPages';

export const UserContext=createContext ();

function App() {
  const [loggedInUser,setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
      <p>Name: {loggedInUser.name} </p>
      <Router>
      <NavigationBar />
          <Switch>
          <Route path="/home">
            
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <LoginPages />
            </Route>
            <Route path="/register">
              <RegisterForm />
            </Route>
            <Route path="/register">
              <NavigationBar/>
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
      </Router>
      
    </UserContext.Provider> 
  );
}

export default App;
