import React from 'react';
import './PaymentSummary.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
const PaymentSummary = ({cart,clearCartHandler,children}) => {
    // const  cart= props.cart; first way
    // const {cart}=props; second way
    // console.log(cart);
    let totalPrice = 0;
    let totalShippingPrice = 0
    let quantity = 0;
    for (const product of cart){
        // if(product.quantity===0){
        //     product.quantity = 1;
        // }
        // product.quantity = product.quantity || 1;
        totalPrice = totalPrice + product.price * product.quantity;
        totalShippingPrice = totalShippingPrice + product.shipping * product.quantity;
        quantity = quantity + product.quantity;
    }
    const text = totalPrice*5/100;
    const grandTotal = totalPrice + totalShippingPrice + text;
    return (
        <div>
            <div className='paymentContainer'>
                <h5>payment summary</h5>
                <div className='paymentSummary'>
                    <p>selected item: {quantity}</p>
                    <p>Total Price: ${totalPrice}</p>
                    <p>shipping Charge: ${totalShippingPrice}</p>
                    <p>Tax: ${text.toFixed(2)}</p>
                    <h6>Grand Total:${grandTotal.toFixed(2)}</h6>
                    <button onClick={clearCartHandler} className='clearBtn'>
                        <span>Clear Cart</span>
                        <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default PaymentSummary;