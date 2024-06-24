import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/boAt_logo_small_3067da8c-a83b-46dd-b28b-6ef1e16ccd17_small.svg'


const Navbar = () => {
  return (
    <>
      <nav className="navbar" style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}>
        <div className="logo">
          <Link to="/" style={{
            textDecoration: 'none',
            color: 'black',
          }}>
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <ul>
          <Link to="/" style={{
            textDecoration: 'none',
          }}><li>Home</li></Link>
          <a href="#categories" style={{
            textDecoration: 'none',
          }}><li className='categories'>
            Categories
          </li></a>
          <li>
            <div className="search">
              <i className="fa-solid fa-magnifying-glass"></i>
              <input type="text" placeholder='Search' />
            </div>
          </li>
        </ul>
        <div className="cart">
          <i className="fa-regular fa-user"></i>
          <i className="fa-solid fa-cart-shopping" data-count="0"></i>
        </div>
      </nav>
    </>
  )
}
export default Navbar
