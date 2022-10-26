import axios from 'axios';
import React from 'react';
import { useDispatch } from 'react-redux';
import { getAllProductsCart, setCartGlobal } from '../../store/slices/cart.slice';
import getConfig from '../../utils/getConfig';
import './styles/CartProduct.css';

const CartProduct = ({product}) => {

  const dispatch = useDispatch();

  const handleDelete = () => {
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/cart/${product.id}`;
    axios.delete(URL, getConfig())
      .then(res => {
        console.log(res.data);
        dispatch(getAllProductsCart());
        dispatch(setCartGlobal(null));
      })
      .catch(err => console.log(err));
  }

  return (
    <article className='cart-p'>
      <h2 className='cart-p__title'>{product.title}</h2>
      <ul className='cart-p__list'>
        <li className='cart-p__item'>
          <span className='cart-p__span'>Price
          </span>${product.price}
        </li>
        <li className='cart-p__item'>
          <span className='cart-p__span'>Quantity
          </span>{product.productsInCart.quantity}
        </li>
      </ul>
      <button className='cart-p__btn' onClick={handleDelete}>
        <i className="cart-p__icon fa-regular fa-trash-can"></i>
        Delete
      </button>
    </article>
  )
}

export default CartProduct;