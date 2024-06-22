import React from 'react'

const Card = (props) => {
    return (
        <>
            <div className="card">
                <div className="image">
                    <div className='card-feature'>
                        <p>120 Hour Playback</p>
                    </div>
                    <img src={props.src} alt="..."></img>
                </div>
                <div className="content">
                    <h2>{props.title}</h2>
                    <p>{props.price}</p>
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
