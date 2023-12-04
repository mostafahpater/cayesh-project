import logo from './logo.svg';
import './App.css';
import { Navigate, Route, Router, Routes } from 'react-router-dom';
import Login from './pages/loginPage/Login';
import Nominee from './pages/nominee/Nominee';
import { useEffect, useState } from 'react';

function App() {
    return (
     <Routes>
     <Route path="/" element={<Navigate to={'/login'} replace/>}/>
     <Route path="/nominee" element={<Nominee/>}/>
     <Route path="/login" element={<Login/>}/>
     </Routes>
)
}

export default App;
