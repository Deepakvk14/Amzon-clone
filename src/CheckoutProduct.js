import React from 'react'
import "./CheckoutProduct.css";
import { useStateValue } from './StateProvider';

function CheckoutProduct({id, title, image,price,rating}) {
    const [{basket},dispatch]=  useStateValue();
    const RemoveFromCart=() =>{
        dispatch({
            type:"REMOVE_FROM_CART",
            id:id,
        })
    }
   
    return (
        <div className="checkout_product">
         <img className="checkout_product_image" src={image}/>
        <div className="checkout_product_info">
            <h4>{title}</h4>
            
            <p className="checkout_product_price"> 
            <small>Rs.</small>
            <strong> {price}</strong> </p>
            <div className="checkout_product_ratting">
                {
                    Array(rating).fill().map((_,i)=>(
                        <strong>*</strong>
                         )     )
                }
                </div> 
                <button onClick={RemoveFromCart}> Remove from cart </button> 
               
        </div>
    </div>
    )
}

export default CheckoutProduct
