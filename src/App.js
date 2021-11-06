import './App.css';
import React from 'react';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import Applicant from './Applicant';
import Create from './Create';
import HomePage from './HomePage';


function App() {
  return (
    <div className="App">

  <BrowserRouter>
  <Switch>
<Route exact path ='/' component={HomePage} > </Route>

   <Route exact path = '/Create' component={Create}></Route>

   <Route exact path = '/Applicant' component={Applicant}></Route>


  </Switch>
  
  
  </BrowserRouter>


    </div>
  );
}

export default App;
