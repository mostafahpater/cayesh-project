import React, { useEffect, useState } from 'react'
import './navbar.css'
import { NavLink } from 'react-router-dom'
import { logoutUser } from '../../redux/Slices/UsersSlice'
import { useDispatch } from 'react-redux'
function Navbar() {
  const dispatch=useDispatch()
  const [userName, setUserName] = useState('')
  useEffect(()=>{
    setUserName(JSON.parse(localStorage.getItem('user')))
  },[])
const logout=()=>{
  dispatch(logoutUser())
  window.location.reload();
}
  return (
    <div>
   {localStorage.getItem('user')&&  <ul className="topnav">
  <li><NavLink className="active" href="#home">Navbar</NavLink></li>
  {userName&&<li className="right"><p>Hi {userName.userName}</p><NavLink onClick={()=>logout()}>Logout</NavLink></li>}
</ul>}
    </div>
  )
}

export default Navbar
