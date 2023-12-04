import React, { useEffect, useState } from 'react'
import './navbar.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { logoutUser } from '../../redux/Slices/UsersSlice'
import { useDispatch, useSelector } from 'react-redux'
function Navbar() {
  const userToken = localStorage.getItem('userToken')
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const [userName, setUserName] = useState('')
  useEffect(()=>{
    setUserName(JSON.parse(localStorage.getItem('user')))
  },[localStorage.getItem('user')])
const logout=async()=>{
await  dispatch(logoutUser())
await  navigate('/login')
}
  return (
    <div>
   {userToken&&  <ul className="topnav">
  <li><NavLink className="active" href="#home">Navbar</NavLink></li>
  {userName&&<li className="right"><p>Hi {userName.userName}</p><NavLink onClick={()=>logout()}>Logout</NavLink></li>}
</ul>}
    </div>
  )
}

export default Navbar
