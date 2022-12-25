import React, {useState} from 'react';
import {Routes, Route} from 'react-router-dom';

import Login from "./login/login";
import Index from "./main/index";
import UserInfo from "./userInfo/userInfo";

import Appointment from "./calendar/addAppointment";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/main" element={<Index />}></Route>
        <Route path="/userinfo" element={<UserInfo />}></Route>

        <Route path="/appointment" element={<Appointment />}></Route>
      </Routes>
    </>
  );
}

export default App;
