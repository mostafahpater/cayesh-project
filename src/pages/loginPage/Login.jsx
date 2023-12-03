import React, { useEffect, useState } from "react";
import "./login.css";
import { useFormik } from "formik";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/Slices/UsersSlice";
function Login() {
  const { usersData,  loading, error } = useSelector(
    (state) => state.users
  );
  const dispach=useDispatch()
  const navigate = useNavigate();
  const[errorUserName,setErrorUserName]=useState('')
  const[errorPassword,setErrorPassword]=useState('')
  const[errorLogin,setErrorLogin]=useState('')
const formik = useFormik({
  initialValues: {
    userName: "",
    password: "",
  },
  onSubmit: async(values) => {
     if (values.userName==='') {
      console.log('error')
      setErrorUserName('required')
      return false
     } else{
      setErrorUserName('')
     }
     if (values.password==='') {
      console.log('error')
      setErrorPassword('required')
      return false
     }else{
      setErrorPassword('')
     }
     console.log(values)
     const myPromise = ()=>Promise.resolve(
      dispach(loginUser(values))
    )
    myPromise().then((res)=>{
      if (res.payload) {
        setErrorLogin('')
        navigate('/')
        window.location.reload();
        // return   <Navigate replace to="/" />
        
      }else{
        setErrorLogin('Your Password or email wrong')
        console.log(false)
      }
    })
   
  },
});
  return (
    <div className="limiter">
       <div className="container-login100">
        <div className="wrap-login100">
          <div className="login100-pic js-tilt" data-tilt="">
            <img src={require("../../assets/img-01.webp")} alt="IMG" />
          </div>
          <form
            onSubmit={formik.handleSubmit}
            className="login100-form validate-form"
          >
            <span className="login100-form-title">Login</span>
            <div
              className="wrap-input100 validate-input"
              data-validate="Valid userName is required"
            >
              <input
                className="input100"
                type="text"
                name="userName"
                placeholder="User Name"
                {...formik.getFieldProps("userName")}
              />
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <i className="fa fa-envelope" aria-hidden="true"></i>
              </span>
            </div>
            {errorUserName && (
              <div style={{color:'red',paddingLeft:'8px'}}>{errorUserName}</div>
            )}
            <div
              className="wrap-input100 validate-input"
              data-validate="Password is required"
            >
              <input
                className="input100"
                type="password"
                name="password"
                placeholder="Password"
                {...formik.getFieldProps("password")}
              />
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <i className="fa fa-lock" aria-hidden="true"></i>
              </span>
            </div>
            {errorPassword && (
              <div style={{color:'red',paddingLeft:'8px'}}>{errorPassword}</div>
            ) }
              {errorLogin && (
              <div style={{color:'red',paddingLeft:'8px'}}>{errorLogin}</div>
            ) }
            <div className="container-login100-form-btn">
              <button type="submit" className="login100-form-btn">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
