import React from 'react'
import Card from './Card'

const Toppick = () => {
    return (
        <>
            <div className="toppicks">
                <h1>Top Picks</h1>
                <div className='toppicks-cards'>
                    <Card src = "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Nirvana_Ion.jpg?v=1697621745" title = "Nirvana Ion" price = "₹1,999" stars = "5.0"/>
                    <Card src = "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/131_f04f74fd-45d4-4614-85cf-6ccf69c4cf90.jpg?v=1691395049" title = "Airdopes 131" price = "₹899" stars = "4.8"/>
                    <Card src = "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_161.jpg?v=1686297917" title = "Airdopes 161" price = "₹999" stars = "4.9"/>
                    <Card src = "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_141.png?v=1703145765" title = "Airdopes 141" price = "₹1,099" stars = "4.9"/>
                    
                </div>

            </div>
        </>
    )
}

export default Toppick
