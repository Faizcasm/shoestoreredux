import React from 'react';
import { useSelector } from 'react-redux';
import './PaymentPage.css';

const PaymentPage = () => {
    const cart = useSelector(state => state.cart);

    return (
        <div className="payment-page">
            <h2>Payment Page</h2>
            <div className="cart-summary">
                <h3>Cart Summary</h3>
                <ul>
                    {cart.items.map(item => (
                        <li key={item.id}>
                            <span>{item.name} - ${item.price} x {item.quantity}</span>
                        </li>
                    ))}
                </ul>
                <h3>Total: ${cart.totalAmount}</h3>
            </div>
            <div className="payment-form">
                <h3>Enter Credit Card Details</h3>
                <form>
                    <div>
                        <label>Card Number</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>Expiration Date</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>CVV</label>
                        <input type="text" />
                    </div>
                    <button type="submit">Pay Now</button>
                </form>
            </div>
        </div>
    );
};

export default PaymentPage;
