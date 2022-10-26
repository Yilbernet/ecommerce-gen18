import axios from 'axios';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAllProductsCart } from '../../store/slices/cart.slice';
import getConfig from '../../utils/getConfig';
import './styles/CardProduct.css';

const CardProduct = ({product}) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    navigate(`/product/${product.id}`);
  }

  const handleCart = (event) => {
    event.stopPropagation();
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/cart`;
    const data = {
      id: product.id,
      quantity: 1,
    }
    axios.post(URL, data, getConfig())
      .then(res => {
        console.log(res.data);
        dispatch(getAllProductsCart);
      })
      .catch(err => console.log(err));
  }

  return (
    <article className='product' onClick={handleClick}>
      <header className='product__header'>
        <img className='product__img' src={product.productImgs[0]} alt="product image" />
      </header>
      <div className='product__body'>
        <h3 className='product__title'>{product.title}</h3>
        <div className='product__price'>
          <span className='product__price-label'>price</span>
          <p className='product__price-number'>{product.price}</p>
        </div>
        <button className='product__icon-container' onClick={handleCart}>
          <i className="product__icon fa-solid fa-cart-shopping"></i>
        </button>
      </div>
    </article>
  )
}

export default CardProduct;