import React from 'react';
import './App.css';
import HomeOfficial from './components/official/HomeOfficial';
import NewRegister from './components/NewRegister';
import {  Routes, Route } from "react-router-dom";
import TeamDetails from './components/TeamDetails';
import Home from './components/Home';
// import PageNotFound from '../public/404.html';
const App = () => {

  return (<>
    <Routes>
        <Route exact path="/"  element={<HomeOfficial />}/>
        <Route exact path="/123"  element={<Home />}/>
        <Route exact path="/newteamregistration"  element={<NewRegister />} />
        <Route exact path="/teamdetails"  element={<TeamDetails />} />
        {/* <Route path="*" component={PageNotFound} /> */}
      </Routes>

    </>
  );
}

export default App;
