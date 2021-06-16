import React from 'react'
import "./Subtotal.css"
import CurrenncyFormat from "react-currency-format";
import {useStateValue} from './StateProvider';
import {getBasketTotal} from './Reducer';

function Subtotal() {
    const [{basket},dispatch] = useStateValue();
    return (
        <div className="subtotal">
           <CurrenncyFormat
            renderText={(value)=>(
                <>
                <p>Subtotal({basket.length} items): <strong>{value}</strong>
                </p>
                <small className="subtotal_gift">
                    <input type="checkbox"/>
                    this order contains gift
                </small>
                <button className="btn1">Proceed to checkout</button>
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeprator={true}
            prefix={"Rs."}
           /> 
        </div>
    )
}

export default Subtotal
