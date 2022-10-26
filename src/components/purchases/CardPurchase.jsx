import React from 'react';
import './styles/CardPurchase.css';

const CardPurchase = ({purchase}) => {

  const options1 = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  const options2 = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,
  };

  return (
    <article className='cardPurchase'>
      <header className='cardPurchase__title'>
        {new Intl.DateTimeFormat('en-US', options1).format(new Date(purchase.updatedAt))}
        <br /><span className='cardPurchase__span'>Time</span>
        {new Intl.DateTimeFormat('en-US', options2).format(new Date(purchase.updatedAt))}
      </header>
      <div className='cardPurchase__container'>
        {
          purchase.cart.products.map(product => (
            <section key={product.id}>
              <h3>{product.title}</h3>
              <p><span className='cardPurchase__span'>Quantity</span>
              {product.productsInCart.quantity}</p>
              <p><span className='cardPurchase__span'>Unit Price</span>
              ${product.price}</p>
            </section>
          ))
        }
      </div>
    </article>
  )
}

export default CardPurchase;