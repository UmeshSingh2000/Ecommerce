import React from 'react'


const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <h1>SoundMart</h1>
        </div>
        <ul>
          <li>Home</li>
          <li className='categories'>
            Categories
          </li>
          <li>
            <div className="search">
            <i className="fa-solid fa-magnifying-glass"></i>
              <input type="text" placeholder='Search'/>
            </div>
          </li>
        </ul>
        <div className="cart">
          <i className="fa-regular fa-user"></i>
          <i className="fa-solid fa-cart-shopping" data-count = "0"></i>
        </div>
      </nav>
    </>
  )
}

export default Navbar
