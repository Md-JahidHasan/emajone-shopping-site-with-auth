import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShopping } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './CartItem.css';

const CartItem = ({product, handleDeleteBtn}) => {
    const {id,name, price, quantity, img} = product;
    console.log(product);
    return (
        <div className='review-items'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="review-details">
                <div className="details">
                    <h5>{name}</h5>
                    <p>Price: {price}$</p>
                    <p>Quantity: {quantity}</p>
                </div>
                <div className="delet">
                    <button onClick={()=>handleDeleteBtn(id)}>
                        <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;