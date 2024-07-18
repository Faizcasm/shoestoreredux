import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, incrementItem, decrementItem } from '../features/cart/cartSlice';
import {  useNavigate } from 'react-router-dom';
import './ShoppingCart.css';

const ShoppingCart = () => {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const navigate =useNavigate()

    const handleProceedToPayment = () => {
       navigate('/payment')
    };

    return (
        <div className="shopping-cart">
            <h2>Shopping Cart</h2>
            {cart.items.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <div>
                    <ul>
                        {cart.items.map(item => (
                            <li key={item.id}>
                                <img src={item.image} alt={item.name} />
                                <span>{item.name} - ${item.price}</span>
                                <div className="quantity-controls">
                                    <button onClick={() => dispatch(decrementItem(item))}>-</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => dispatch(incrementItem(item))}>+</button>
                                </div>
                                <button className='rmv' onClick={() => dispatch(removeItem(item))}>Remove</button>
                            
                            </li>
                        ))}
                    </ul>
                    <h3>Total: ${cart.totalAmount}</h3>
                    <button onClick={handleProceedToPayment}>Proceed to Payment</button>
                </div>
            )}
        </div>
    );
};

export default ShoppingCart;
