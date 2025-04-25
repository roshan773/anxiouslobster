import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className='container-fluid' style={{ backgroundColor: "#ffffff" }}>
        <nav className='navbar navbar-expand-lg navbar-light container d-flex justify-content-center align-items-center bg-info'>
          <Link to="/" className='navbar-brand'>
            <img src="https://1000logos.net/wp-content/uploads/2017/02/Apple-Logosu.png" alt="Apple Logo" width={30} height={20} />
          </Link>

          <div className='collapse navbar-collapse'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <Link className='nav-link fw-bold me-4'>Store</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link fw-bold me-4'>Mac</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link fw-bold me-4'>IPad</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link fw-bold me-4'>IPhone</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link fw-bold me-4'>Watch</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link fw-bold me-4'>Vision</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link fw-bold me-4'>AirPods</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link fw-bold me-4'>Tv & Home</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link fw-bold me-4'>Entertainment</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link fw-bold me-4'>Accessories</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link fw-bold me-4'>Support</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Navbar