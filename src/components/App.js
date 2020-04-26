import React from 'react';
import './App.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from './auth/Login.component'
import Register from './auth/Register.component'


function App() {
  return (
      <Router>
        <div className="App">
            <header>
              Hello its header
            </header>
            <Switch>
              <Route path='/login' component={Login} />
              <Route path='/register' component={Register} />
            </Switch>
        </div>
      </Router>
  );
}

export default App;
