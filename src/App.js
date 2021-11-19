import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import Applicant from './Applicant';
import Create from './Create';
import HomePage from './HomePage';
import List from './List';
import Hrlist from './Hrlist';


function App() {
  const LOCAL_STORAGE_KEY = "hrData"
  const LOCAL_STORAGE_KEY_1 = "applicantData"
  const [hrData, setHrData] = useState([])
  const [applicantData, setApplicantData] = useState([])

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    setHrData([...data])
    
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(hrData))
  }, [hrData])
  ////

  useEffect(() => {
    const data1 = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_1))
    setApplicantData([...data1])
    
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY_1, JSON.stringify(applicantData))
  }, [applicantData])

  ///

  const handleAdd = (val) => {
    setHrData([...hrData, val])
  }

  const handleAddApplicant = (val) => {
    setApplicantData([...applicantData, val])
  }

  const handleDelete = (index) => {
    setHrData([...hrData.slice(0, index), ...hrData.slice(index+1)])
  }


  const handleDelete1= (index) => {
    setApplicantData([...applicantData.slice(0, index), ...applicantData.slice(index+1)])
  }


  return (
    <div className="App">

  <BrowserRouter>
  <Switch>


  <Route exact path="/" component={HomePage} />


   <Route exact path = '/Create' render= {() => <Create handleAdd= {handleAdd} />} />

   <Route exact path = '/Applicant' render={() => <Applicant handleAddApplicant= {handleAddApplicant} />} />

  <Route exact path='/List' render= {() => <List applicantData= {applicantData} handleDelete1= {handleDelete1}  />} /> 

    <Route path='/Hrlist' render= {() => <Hrlist hrData= {hrData} handleDelete= {handleDelete} />} />

  </Switch>
  
  
  </BrowserRouter>


    </div>
  );
}

export default App;
