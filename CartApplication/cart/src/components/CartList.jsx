import React from 'react'

const CartList = ({Cart}) => {
   debugger;
  return (
    <div>
        {Cart.map((data,index)=>{
            return(
             <div key={index}>
                <img src={data.url} alt="" width={40} />
                <span>{data.name}</span>
                <button >-</button>
                <span>{data.quantity}</span>
                <button >+</button>
                <span>{data.price}</span>
               
             </div>
            )
            
        })}
       
        <span> Total price:-
          {
            Cart.map(item=>item.price).reduce((total,value)=>total+value,0)
          }
        </span>
        
    </div>
  )
}

export default CartList