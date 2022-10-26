import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './styles/Header.css';

const Header = () => {
  return (
    <header className='header'>
      <h1 className='header__title'>
         <Link className='header__link' to='/'>E-Commerce</Link>
      </h1>
      <nav className='header__nav'>
         <ul className='header__list'>
            <li className='header__item'>
               <NavLink className='header__link' to='/login'>
               <i className="header__icon fa-solid fa-user"></i>
                  Login
               </NavLink>
            </li>
            <li className='header__item'>
               <NavLink className='header__link' to='/purchases'>
               <i className="header__icon fa-solid fa-box-open"></i>
                  Purchases
               </NavLink>
            </li>
            <li className='header__item'>
               <NavLink className='header__link' to='/cart'>
               <i className="header__icon fa-solid fa-cart-shopping"></i>
                  Cart
               </NavLink>
            </li>
         </ul>
      </nav>
    </header>
  )
}

export default Header;