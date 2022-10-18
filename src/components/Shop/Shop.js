import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { addToDb, getFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {

    
    const products = useLoaderData();
    const [cart, setCart] = useState([]);
    


    useEffect(()=>{
        const storedCart = getFromDb();
        const newCart =[];
        for(const id in storedCart){
            const addedProduct = products.find(product => product.id === id);
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
        const exist = cart.find( product => product.id === cart.id);
        if(!exist){
            selectedProduct.quantity =1;
            newCart = [...cart, selectedProduct];
        }
        else{
            const rest = cart.filter(product => product.id !==selectedProduct.id);
            exist.quantity = exist.quantity + 1;
            newCart = [...rest, exist];
        }
        
        setCart(newCart);
        addToDb(selectedProduct.id);
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
            {
                products.map(product =><Product 
                    key={product.id}
                    product ={product}
                    handleAddToCart ={handleAddToCart}
                    ></Product>)
            }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;