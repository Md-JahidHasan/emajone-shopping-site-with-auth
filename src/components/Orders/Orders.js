import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import CartItem from '../CartItem/CartItem';
import './Orders.css';

const Orders = () => {
    const {products, dataForCart} = useLoaderData();
    const [cart, setCart]= useState(dataForCart);
    const clearCart =()=>{
        setCart([]);
        deleteShoppingCart()
    }
    const handleDeleteBtn = id =>{
        const productAfterDelet = cart.filter(product=> product._id !==id);
        setCart(productAfterDelet);
        removeFromDb(id)
        console.log(productAfterDelet);
    }
    // console.log(products);
    return (
        <div className='shop-container'>
            <div className="orders-container">
                {
                    cart.map(product=><CartItem
                    key={product._id}
                    product={product}
                    handleDeleteBtn={handleDeleteBtn}
                    ></CartItem>)
                }
            </div>
            <div className="cart-container">
                <Cart clearCart={clearCart} cart={cart}>
                    <Link to='/shipping'>
                        <button>Shipping</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;