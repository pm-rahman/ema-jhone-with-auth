import React from 'react';
import './ReviewItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
const ReviewItem = ({ cart,handleRemoveItem }) => {
    const { id, img, name, price, quantity } = cart;
    return (
        <div className='reviewItem'>
            <img src={img} alt="" />
            <div className='reviewInfo'>
                <p className='productTitle'>{name}</p>
                <p>Price: <span className='orange'>{price}$</span></p>
                <p>Shopping Charge: <span className='orange'>{quantity}</span></p>
            </div>
            <button onClick={()=>handleRemoveItem(id)} className='deleteBtn'>
                <FontAwesomeIcon className='deleteIcon' icon={faTrashAlt} />
            </button>
        </div>
    );
};

export default ReviewItem;