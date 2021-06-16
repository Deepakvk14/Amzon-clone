
import React from 'react'
import "./Checkout.css";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from './StateProvider';

function Checkout() {
    const [{basket,user},dispatch]=useStateValue();
    return (
        <div className="checkout">
        <div className="checkout_left">
            <img className="checkout_Add" src="https://wordstream-files-prod.s3.amazonaws.com/s3fs-public/styles/simple_image/public/images/media/images/banner-ads-examples-aws.jpg?jwAuTeoLXQvDzDNGQ8Q3zDmWXndEqL8V&itok=tukEXkYJ"/>
       
        <div className="cheeckout_title">
        <h3>{user.name}</h3> 
        <h2>Yout shopping items </h2>
        {basket.map(item=>(
            <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
            />
        ))}
        </div>
        </div>
            <div className="checkout_right">
                <Subtotal/>
            </div>
            
        </div>
    )
}

export default Checkout
