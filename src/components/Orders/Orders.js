import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import CartItem from '../CartItem/CartItem';
import './Orders.css';

const Orders = () => {
    const {products, dataForCart} = useLoaderData();
    const [cart, setCart]= useState(dataForCart);
    const handleDeleteBtn = id =>{
        const productAfterDelet = cart.filter(product=> product.id !==id);
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
                    key={product.id}
                    product={product}
                    handleDeleteBtn={handleDeleteBtn}
                    ></CartItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;