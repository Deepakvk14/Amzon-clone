import React from 'react'
import "./Product.css";
import { useStateValue } from './StateProvider';

function Product({id,title, image, price, rating}) {
     const [ {basket}, dispatch] = useStateValue();
     const AddToBasket = () => {
        dispatch({
            type:"ADD_TO_BASKET",
            item:{
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating,
            },
        })
    }
    
    return (
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                
                <p className="product_price"> 
                <small>Rs.</small>
                <strong> {price}</strong> </p>
                <div className="product_ratting">
                    {
                        Array(rating).fill().map((_,i)=>(
                            <h1>*</h1>
                             )     )
                    }
                    </div>  
                   
            </div>
            <img className="product_image" src={image}/>
        
            <button className="btn" onClick={AddToBasket}> Add to cart </button>
            
        </div>
    )
}

export default Product
