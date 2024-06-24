import React from 'react'
import logo from '../assets/boAt_logo_small_3067da8c-a83b-46dd-b28b-6ef1e16ccd17_small.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="box">
                        <img src={logo} alt="" />
                        <h2>Subscribe to our email alerts!</h2>
                        <input type="Email" placeholder='Enter Your Email address' className='email' />
                    </div>
                    <div className="box">
                        <h1>Shop</h1>
                        <Link to={`/category/True Wireless Earbuds`} style={{
                            textDecoration: 'none',
                            color: 'black',
                        }}>
                            <p>True Wireless Earbuds</p>
                        </Link>
                        <Link to={`/category/Neckband`} style={{
                            textDecoration: 'none',
                            color: 'black',
                        }}>
                            <p>Neckband</p>
                        </Link>
                        <Link to={`/category/Smart Watches`} style={{
                            textDecoration: 'none',
                            color: 'black',
                        }}>
                            <p>Smart Watches</p>
                        </Link>
                        <Link to={`/category/Wireless Headphones`} style={{
                            textDecoration: 'none',
                            color: 'black',
                        }}>
                            <p>Wireless Headphones</p>
                        </Link>
                        <Link to={`/category/Wireless Speakers`} style={{
                            textDecoration: 'none',
                            color: 'black',
                        }}>
                            <p>Wireless Speakers</p>
                        </Link>
                        <Link to={`/category/Wired Headphones`} style={{
                            textDecoration: 'none',
                            color: 'black',
                        }}>
                            <p>Wired Headphones</p>
                        </Link>
                        <Link to={`/category/Soundbars`} style={{
                            textDecoration: 'none',
                            color: 'black',
                        }}>
                            <p>Soundbars</p>
                        </Link>
                        <Link to={`/category/Trimmers`} style={{
                            textDecoration: 'none',
                            color: 'black',
                        }}>
                            <p>Trimmers</p>
                        </Link>
                        <Link to={`/category/Chargers`} style={{
                            textDecoration: 'none',
                            color: 'black',
                        }}>
                            <p>Chargers</p>
                        </Link>
                    </div>
                </div>
                <p style={{
                    textAlign:'center',
                    margin:'10px',
                }}>&copy;{new Date().getFullYear()} All Rights Reserved</p>
            </footer>
        </>
    )
}

export default Footer
