import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Login from './Pages/Login.jsx'
import About from './Pages/About.jsx'
import './Global.css'
import FormVal from './FormVal.jsx'
const Router = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<FormVal/>}/>
             <Route path='/home' element={<Home/>} />
            <Route path='/login' element={<Login/>}/>
            <Route path='/about' element={<About/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Router