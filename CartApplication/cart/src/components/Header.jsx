import React from 'react'

const Header = (props) => {
  return (
    <div className='main'>
        <div id='div1' onClick={()=>props.handleShow(false)}>Shopping Cart</div>
        <div id='div2' onClick={()=>props.handleShow(true)}>Cart
          <sup>{props.count}</sup>
        </div>
    </div>
  )
}

export default Header