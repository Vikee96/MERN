import React, {  useState } from 'react'
import STYLE from './form.module.css'
import { Link } from 'react-router-dom'
const FormVal = () => {
   const initialState={userName:"",Email:"",Password:""}
   const [formData,setFormData]=useState(initialState)
   const [error,setError]=useState({userName:"",Email:"",Password:""})
   

   let handleChange=(e)=>{
    const{name,value}=e.target
    setFormData({...formData, [name] :value})
   }
   let handleSubmit=(e)=>{
      e.preventDefault()
    let updateError={...error}
     setError(updateError)
    if(formData.userName.trim()===""){
        updateError.userName="userName is required"
    }
    else{
        updateError.userName="" 
    }
    if(!formData.Email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/)){
      updateError.Email="email should be in proper format" 
    }
    else{
         updateError.Email=""   
    }
    if(!formData.Password){
      updateError.Password="password is required"
    }
    else if(formData.Password.length<4){
      updateError.Password="password must be 4 char"
    }
    else if(formData.Password.length>10){
      updateError.Password="password must be less than 10 char "
    }
    else{
      updateError.Password=""
    }
    if(formData.userName && (formData.Email) && (formData.Password)  ){
       console.log(formData);
       localStorage.setItem('userName',formData.userName)
       localStorage.setItem('Email',formData.Email)
       localStorage.setItem('Password',formData.Password)
       window.location.assign('/login')
    }


}
  return (
    <div className={STYLE.main}>
      <h2>Welcome to TO_DO application </h2>
      
        <form action="" onSubmit={handleSubmit}>
          <div className={STYLE.divider}>
            <div className={STYLE.a}>
            <label htmlFor="userName">Username</label>
            <input type="text" name='userName' placeholder='userName' value={formData.userName} onChange={handleChange} />
           <p style={{color:"red"}}>{error.userName}</p>
            </div>
            <div className={STYLE.a}>
             <label htmlFor="email">Email</label>
            <input type="text" name='Email' placeholder='email' value={formData.Email} onChange={handleChange} />
            <p style={{color:"red"}}>{error.Email}</p>
            </div>
            <div className={STYLE.a}>
            <label htmlFor="Password">Password</label>
            <input type="password" name='Password' placeholder='password' value={formData.Password} onChange={handleChange} />
            <p style={{color:"red"}}>{error.Password}</p>
            </div>
            <button type='submit'>Create Account</button>
            <Link to='/login'>Login</Link>
          </div>
        </form>
    </div>
  )
}

export default FormVal