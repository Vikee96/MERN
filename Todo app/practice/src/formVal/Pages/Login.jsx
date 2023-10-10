import React, { useEffect, useState } from 'react'
import STYLE from './login.module.css'
import { Link } from 'react-router-dom'
const Login = () => {
  const[formData,setFormData]=useState({Name:"",Password:""})
  const[logData,setLogData]=useState({})
  useEffect(()=>{
    let userName=localStorage.getItem("userName")
    let Password=localStorage.getItem("Password")
   setLogData({userName,Password})
  },[])
  let handleChange=(e)=>{
   const{name,value}=e.target
  setFormData({...formData, [name]:value})
  }
  let handleSubmit=(e)=>{
             e.preventDefault()
          if(formData.Name===logData.userName && formData.Password===logData.Password){
            alert("login Success")
            window.location.assign('/home')
          }
          else{
            alert("invalid user id")
            window.location.assign('/login')
          }
  }
  return (
    <div  className={STYLE.container}>
      <form action="" onSubmit={handleSubmit}>
        <div className={STYLE.divider}>
        <marquee behavior="" direction="right" ><h1 style={{color:'red'}}>Welcome to login</h1></marquee>
        <div className={STYLE.b}>
          <label htmlFor="Name" >Username</label>
          <input type="text" required name='Name' value={formData.Name} placeholder='UserName' onChange={handleChange} />
        </div>
        <div className={STYLE.b}>
          <label htmlFor="Password">Password</label>
          <input type="password" required name='Password' value={formData.Password} placeholder='password' onChange={handleChange}/>
        </div>
        <button type='submit'>Submit</button>
        <Link to='/'>Register</Link>
        </div>
      </form>
    </div>
  )
}

export default Login