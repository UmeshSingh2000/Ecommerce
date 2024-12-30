import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementQnty, removeProduct, decrementQnty } from '../features/cart/counterSlice';
import {loadStripe} from '@stripe/stripe-js';

const Cart = () => {
    const cartData = useSelector((state) => state.counter.cartProducts);
    const total = useSelector((state) => state.counter.TotalAmount);
    const dispatch = useDispatch();
    console.log(cartData);
    
    const makePayment =async()=>{
        const stripe = await loadStripe("pk_test_51QbiURIhF0b9SX54zet8JgzL8jUbAEAxWQY5qJ4GiSCvmeunl2patqBIqFNppICHprCet4mGoRT4Nh2B8XCnspXT00fRXwBctC")
        const body = {
            products : cartData
        }
        const headers={
            "Content-Type":"application/json"
        }
        const response = await fetch('http://localhost:3000/api/payment/create-checkout-session', {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(body)
        });

        const session = await response.json();
        const result = await stripe.redirectToCheckout({
            sessionId: session.id,
        })
        if(result.error){
            console.log(result.error.message);
        }
    }
    return (
        <div className="cart">
            <h3>Your Cart</h3>
            {cartData.length === 0 ? (
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    alignItems: 'center',
                    height: "90%"
                }}>
                    <i className="fa-solid fa-bag-shopping" style={{
                        fontSize: '100px',
                        color: 'green'
                    }}></i>
                    <h2 style={{ fontSize: '.9rem' }}>Your cart is feeling lonely</h2>
                </div>
            ) : (
                <div className="cart_container">
                    {cartData.map((prod) => (
                        <div key={prod.productId} className='cart-item'>
                            <img src={prod.src} alt={prod.title} />
                            <div className='cart-item-info'>
                                <h4>{prod.title}</h4>
                                <h4>{prod.price}</h4>
                                <h4>{prod.star}<i className="fa-solid fa-star" style={{ color: 'yellow' }}></i></h4>
                                <i className="fa-solid fa-trash" onClick={() => dispatch(removeProduct(prod))}></i>
                                <div className="quantity">
                                    <button className='btn' onClick={() => dispatch(decrementQnty(prod))}>-</button>
                                    <p>{prod.qnty}</p>
                                    <button className='btn' onClick={() => dispatch(incrementQnty(prod))}>+</button>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="total">
                        <div className="container">
                            <div className="price">
                                <p>Total: ₹{total}</p>
                            </div>
                            <div className="placeOrder">
                                <button className="btn" onClick={makePayment}>Confirm Order</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
