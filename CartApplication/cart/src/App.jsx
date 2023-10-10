import React, { useState } from 'react'
import Header from './components/Header';
import './Globel.css'
import ProductList from './components/ProductList';
import CartList from './components/CartList';
const App = () => {
    const [Products,setProducts]=useState([
        {
            url:"https://image.shutterstock.com/image-photo/white-sneaker-sport-shoe-on-260nw-2155395817.jpg",
            name:"campus",
            price:1600

        },
        {
            url:"https://img.freepik.com/premium-psd/laptop-psd-mockup-with-gradient-led-light_53876-138283.jpg",
            name:"Hp",
            price:50000  
        },
        {
            url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnIjW407i3X2KYC_OcIdhI929SXqEVx-q_-22-CgX6&s",
            name:"oppo",
            price:20000  
        },
        {
            url:"https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?cs=srgb&dl=pexels-ge-yonk-1152077.jpg&fm=jpg",
            name:"campus",
            price:1000 
        },
        {
            url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShcBpzbg864R3lk1A0CRq8corz8EuchMK3KXQRGkT-1g&s",
            name:"Sonata",
            price:1500  
        },
        {
            url:"https://img.freepik.com/free-photo/levitating-music-headphones-display_23-2149817602.jpg",
            name:"boot",
            price:2000   
        }
    ])
    const[Cart,setCart]=useState([])
     const[showCart,setShowCart]=useState(false)
    let addToCart=(data)=>{
      setCart([...Cart , {...data ,quantity:1}])
      
    }
    let handleShow=(value)=>{
        setShowCart(value)
    }
  return (
    <div>
       <Header count={Cart.length} handleShow={handleShow}/>
       {
         showCart ?  <CartList Cart={Cart}/> :
         <ProductList products={Products} addToCart={addToCart}/>
       }
      
       
       
    </div>
  )
}

export default App