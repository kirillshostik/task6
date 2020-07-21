import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import {Header} from "./components/Header/Header";
import EmployeesContainer from "./components/Employees/EmployeesContainer";
import {Main} from "./components/Main/Main";

function App() {
  return (
      <BrowserRouter>
          <Header/>
          <div>
              <Route exact path={'/'} render={() => <Main/>}/>
              <Route path={'/employees'} render={() => <EmployeesContainer/>}/>
          </div>
      </BrowserRouter>
  );
}

export default App;
