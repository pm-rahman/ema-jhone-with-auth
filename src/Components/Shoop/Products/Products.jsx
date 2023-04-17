import React from 'react';
import './Products.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Products = (props) => {
    const {img,name,price,seller,ratings}=props.product;
    const handleProductAdd = props.handleProductAdd;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='productInfo'>
                <h6>{name}</h6>
                <p>price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating : {ratings} star</p>
            </div>
            <button onClick={()=>handleProductAdd(props.product)} className='productBtn'>
                add to cart
                <FontAwesomeIcon icon={faShoppingCart} />
                </button>
        </div>
    );
};

export default Products;