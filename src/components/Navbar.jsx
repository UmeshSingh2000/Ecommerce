import React from 'react'
import { Link } from 'react-router-dom'


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
            <h1>Sound <span style={{
              color: 'red',
              fontWeight: '700',
              textDecoration: 'underline'
            }}>Mart</span></h1>
          </Link>
        </div>
        <ul>
          <Link to="/" style={{
            textDecoration: 'none',
          }}><li>Home</li></Link>
          <li className='categories'>
            Categories
          </li>
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
