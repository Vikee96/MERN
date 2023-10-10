import React from 'react'
import Navbar from '../Navbar.jsx'
import App from '../../Redux/App.jsx'
import STYLE from "./home.module.css"
const Home = () => {
  return (
    <div>
      <div>
    <Navbar/>
      </div>
      <div className={STYLE.cont}>
      <div className={STYLE.Home}>
      < App/>
      </div>
      </div>
    </div>
  )
}

export default Home