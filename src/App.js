import logo from './logo.svg';
import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import Login from './pages/loginPage/Login';
import Nominee from './pages/nominee/Nominee';
import { useEffect, useState } from 'react';

function App() {
  const [isAuth, setIsAuth] = useState("");
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("user"));
    if ( items && typeof items == 'object') {

          setIsAuth(true);
 
    } else {
      setIsAuth(false);
    }
  }, []);
  
  console.log(localStorage.getItem('user'))
  const MainLayOut= () => {
    
    return (
      <Routes>
     <Route path="*" element={<Nominee/>}/>
  </Routes>
  );}
  const Auth = ()=>{
  return (
    <Routes>
   <Route path="*" element={<Login/>}/>
</Routes>
)}
return isAuth ? MainLayOut() : Auth();

}

export default App;
