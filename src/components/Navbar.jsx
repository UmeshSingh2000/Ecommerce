import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/boAt_logo_small_3067da8c-a83b-46dd-b28b-6ef1e16ccd17_small.svg'
import { useSelector } from 'react-redux'
import Cart from '../components/Cart'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {
  const navigate = useNavigate();
  const cartCounter = useSelector((state) => state.counter.cartCounter)
  // const cartCounterProd = useSelector((state) => state.counter.cartProducts)
  const [searchQuerry, setSearchQuerry] = useState('');
  const handleSearch = () => {
    if (!searchQuerry.trim()) return
    navigate(`/search/${encodeURIComponent(searchQuerry.trim())}`);
  }



  const handleHome = () => {
    window.scrollTo(0, 0);
  }
  const openCart = () => {
    document.querySelector('.cart').classList.toggle('show')
  }
  return (
    <>
      <Cart />
      <nav className="navbar" style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}>
        <div className="logo">
          <Link to="/" style={{
            textDecoration: 'none',
            color: 'black',
          }} onClick={handleHome}>
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <ul>
          <Link to="/" style={{
            textDecoration: 'none',
          }} onClick={handleHome}><li>Home</li></Link>
          <a href="#categories" style={{
            textDecoration: 'none',
          }}><li className='categories'>
              Categories
            </li></a>
          <li>
            <div className="search">
              <i className="fa-solid fa-magnifying-glass" onClick={handleSearch}></i>
              <input type="text" placeholder='Search' onChange={(e) => setSearchQuerry(e.target.value)} onKeyDown={(e) => {
                if (e.key === 'Enter') handleSearch()
              }} />
            </div>
          </li>
        </ul>
        <div className="cartIcon">
          <i className="fa-regular fa-user"></i>
          <i className="fa-solid fa-cart-shopping" data-count={cartCounter} onClick={openCart}></i>
        </div>
      </nav>
    </>
  )
}
export default Navbar
