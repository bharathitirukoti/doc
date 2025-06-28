import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import Login from "./components/common/Login";
import Register from "./components/common/Register";
import UserHome from './components/user/UserHome';
import AdminHome from "./components/admin/AdminHome";
import UserAppointments from "./components/user/UserAppointments";
import ApplyDoctor from "./components/user/ApplyDoctor";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/userhome" element={<UserHome />} />
      <Route path="/admin-home" element={<AdminHome />} />
      <Route path="/user-appointments" element={<UserAppointments />} />
      <Route path="/apply-doctor" element={<ApplyDoctor />} />
    </Routes>
  );
}

export default App;