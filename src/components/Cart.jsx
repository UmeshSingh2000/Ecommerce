import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incrementQnty, removeProduct, decrementQnty } from '../features/cart/counterSlice'

const Cart = () => {

    const cartData = useSelector((state) => state.counter.cartProducts)
    const total = useSelector((state) => state.counter.TotalAmount)
    const dispatch = useDispatch();
    useEffect(() => {
        console.log(total);
    })
    return (
        <>
            <div className='cart'>
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
                        <h2>Your cart is feeling lonely</h2>
                    </div>
                ) : (
                    <div className="cart_container">
                        {cartData.map((prod) => {
                            return (
                                <div key={prod.productId} className='cart-item'>
                                    <img src={prod.src} />
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
                            )
                        })}
                        <div className="total">
                            <div className="container">
                                <div className="price">
                                    <p>Total:₹{total}</p>
                                </div>
                                <div className="placeOrder">
                                    <button className="btn">Confirm Order</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default Cart
