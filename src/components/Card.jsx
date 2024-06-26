import React from 'react'
import { useDispatch } from 'react-redux'
import { increment } from '../features/cart/counterSlice';


const Card = (props) => {
    const dispatch = useDispatch();

    return (
        <>
        
            <div className="card">
                <div className="image">
                    <div className='card-feature'>
                        <p>{props.feature}</p>
                    </div>
                    <img src={props.src} alt="..."></img>
                </div>
                <div className="content">
                    <div>
                        <h2 className='title'>{props.title}</h2>
                        <p className='price'>{props.price}</p>
                        <p>
                            <i className="fa-solid fa-star"></i>{props.stars}
                        </p>
                    </div>
                    <div className="btn" onClick={() => dispatch(increment(
                        {
                            title: props.title,
                            price: props.price,
                            src: props.src,
                            qnty: 1,
                            productId: props.productId,
                            star : props.stars
                        }
                    ))}>Add to Cart</div>
                </div>
            </div>
        </>
    )
}

export default Card
