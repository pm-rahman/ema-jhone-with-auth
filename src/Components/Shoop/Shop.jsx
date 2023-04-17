import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import PaymentSummary from '../PaymentSummary/PaymentSummary';
import Products from './Products/Products';
import './Shop.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [carts, setCarts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    useEffect(() => {
        const storedCart = getShoppingCart();
        const addedCart = [];
        // step: 01 get id
        for (const id in storedCart) {
            // step : 02 get 
            const savedCart = products.find(product => product.id === id);
            // step: 03 get quantity
            const quantity = storedCart[id];
            if (savedCart) {
                savedCart.quantity = quantity;
                addedCart.push(savedCart);
            }
        }
        setCarts(addedCart);
        // console.log(storedCart);
        // step:1 get id
        // for(const id in storedCart){
        //     // console.log(id);
        //     // step 02: get save cart
        //     const savedCart = products.find(product=>product.id===id);
        // step 03: get saved data quantity
        // const quantity = storedCart[id];
        // step 04: set quantity
        // savedCart.quantity = quantity;
        // console.log(savedCart);
        // }
    }, [products])
    const handleProductAdd = (product) => {
        // let newCart = [];
        // const exist  = cart.find(pd=>pd.id === product.id);
        // if(!exist){
        //     product.quantity = 1;
        //     newCart = [...cart,product];
        // }
        // else{
        //     exist.quantity = exist.quantity + 1;
        //     const remaining = cart.filter(pd=>pd.id !== product.id);
        //     newCart = [...remaining,exist];
        // }
        // const newCart = [...cart, product];

        let newCart = [];
        const exits = carts.find(pd => pd.id === product.id);
        if (!exits) {
            product.quantity = 1;
            newCart = [...carts, product];
        }
        else {
            exits.quantity = exits.quantity + 1;
            const remaining = carts.filter(pd => pd.id !== product.id);
            newCart = [...remaining, exits];
        }
        setCarts(newCart);
        addToDb(product.id)
    }
    const clearCartHandler = () => {
        setCarts([]);
        deleteShoppingCart()
    }
    return (
        <div className='shop'>
            <div className='productsContainer'>
                {products.map(product => <Products
                    key={product.id}
                    product={product}
                    handleProductAdd={handleProductAdd}
                ></Products>)}
            </div>
            <PaymentSummary
                cart={carts}
                clearCartHandler={clearCartHandler}
            >
                <Link to="/orders" className='checkOutLink'>
                    <button className='checkOut'>
                        Review Order
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </Link>
            </PaymentSummary>
        </div>
    );
};

export default Shop;