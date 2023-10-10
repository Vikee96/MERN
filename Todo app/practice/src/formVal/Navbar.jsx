import React from 'react'
import { Link } from 'react-router-dom';
import img from './todo1.jpg'
import './Global.css'
const Navbar = () => {
  return (
    <div className='container'>
        <div className='div'><img src={img} alt="" height='62px' width='100px' /></div>
        <div>
            <ul className='item'>
            <li className='items'><Link to='/' style={{textDecoration:"none", color:'black'}}>Register</Link></li>
                <li className='items' ><Link to='/home' style={{textDecoration:"none",color:'black'}}>Home</Link></li>
                <li className='items'><Link to='/about'style={{textDecoration:"none",color:'black'}}>About</Link></li>
                <li className='items'><Link to='/login' style={{textDecoration:"none",color:'black'}}>Login</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar