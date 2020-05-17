import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from './components/Login';
import dashboard from './components/Dashboard';
import Dashboard from './components/Dashboard';
import styled from 'styled-components';

function App() {

  return (

    <BrowserRouter>

    <Route exact path='/' component={Login}/>
    <Route exact path='/dashboard' component={Dashboard}/>

    </BrowserRouter>

  );

}

export default App;
