import React from 'react'

const Card = (props) => {
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
                    <h2 className='title'>{props.title}</h2>
                    <p className='price'>{props.price}</p>
                    <p>
                        <i className="fa-solid fa-star"></i>{props.stars}
                    </p>
                    <div className="btn">Add to Cart</div>
                </div>
            </div>
        </>
    )
}

export default Card
