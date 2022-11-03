import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { addToDb, deleteShoppingCart, getFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {

    
    const {products, count} = useLoaderData();
    const [cart, setCart] = useState([]);
    
    const clearCart =()=>{
        setCart([]);
        deleteShoppingCart()
    }

    useEffect(()=>{
        const storedCart = getFromDb();
        const newCart =[];
        for(const id in storedCart){
            const addedProduct = products.find(product => product._id === id);
            // console.log(addedProduct);
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                newCart.push(addedProduct);
            }
        }
        setCart(newCart)
    }, [products])

    const handleAddToCart = (selectedProduct)=>{
        let newCart= [];
        const exist = cart.find( product => product._id === cart._id);
        if(!exist){
            selectedProduct.quantity =1;
            newCart = [...cart, selectedProduct];
        }
        else{
            const rest = cart.filter(product => product._id !==selectedProduct._id);
            exist.quantity = exist.quantity + 1;
            newCart = [...rest, exist];
        }
        
        setCart(newCart);
        addToDb(selectedProduct._id);
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
            {
                products.map(product =><Product 
                    key={product._id}
                    product ={product}
                    handleAddToCart ={handleAddToCart}
                    ></Product>)
            }
            </div>
            <div className="cart-container">
                <Cart clearCart={clearCart} cart={cart}>
                    <Link to='/orders'>
                        <button>Review Orders</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;