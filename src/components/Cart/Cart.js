import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart, clearCart, children} = props;
    let total = 0;
    let shipping = 0 ;
    let quantity = 0;
    for(const product of cart ){
        quantity = quantity+ product.quantity;
        total = total + product.price* product.quantity;
        shipping = shipping + product.shipping;
    }
    let tax = total * 0.1;
    return (
        <div className='cart'>
            <h2>Order Summery</h2>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${total} </p>
            <p>Total Shipping: ${shipping} </p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h5>Grand Total: ${total+ shipping+ parseFloat(tax.toFixed(2))}</h5>
            {/* <button onClick={clearCart}>Clear Cart</button> */}
            {children}
        </div>
    );
};

export default Cart;