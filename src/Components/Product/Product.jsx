import React, { useState } from 'react';
import PaymentSummary from '../PaymentSummary/PaymentSummary';
import { Link, useLoaderData } from 'react-router-dom';
import './Product.css'
import ReviewItem from '../ReviewItem/ReviewItem';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCardAlt } from '@fortawesome/free-solid-svg-icons'

const Product = () => {
    const savedCart = useLoaderData();
    const [carts, setCarts] = useState(savedCart);
    const handleRemoveItem = (id) => {
        const remaining = carts.filter(pd => pd.id !== id);
        setCarts(remaining);
        removeFromDb(id);
    }
    const clearCartHandler = () => {
        setCarts([]);
        deleteShoppingCart()
    }
    return (
        <div className='reviewShop'>
            <div className='reviewItems'>
                {carts.map(cart => <ReviewItem
                    key={cart.id}
                    cart={cart}
                    handleRemoveItem={handleRemoveItem}
                ></ReviewItem>)}
            </div>
            <PaymentSummary
                cart={carts}
                clearCartHandler={clearCartHandler}
            >
                <Link to="/payment" className='checkOutLink'>
                    <button className='checkOut'>
                        Proceed Checkout
                        <FontAwesomeIcon icon={faCreditCardAlt} />
                    </button>
                </Link>
            </PaymentSummary>
        </div>
    );
};

export default Product;