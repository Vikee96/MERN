import React from 'react'

const ProductList = ({products,addToCart}) => {
  return (
    <div className='flex'>
        {
    products.map((items,index)=>{
       return(
             <div key={index} style={{width:'50%'}}>
               <img src={items.url} alt="" height="50%" width='50%'/>
             <h3>Brand :- {items.name}</h3>
             <h3>price :- {items.price}</h3>
             <button onClick={()=>addToCart(items)}>add to Cart</button>
             </div>
    )})
        }
    </div>
  )
}

export default ProductList