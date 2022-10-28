import React from 'react';

const FilterPrice = ({setFilterByPrice}) => {

   const handleSubmit = (event) => {
      event.preventDefault();
      const from = +event.target.from.value;
      const to = +event.target.to.value;
      const obj = {
         from: from,
         to: (to!==0)?(to):(Infinity),
      }
      setFilterByPrice(obj);
   }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Price</h3>
      <div>
         <label htmlFor="from">From</label>
         <input type="number" id='from' />
      </div>
      <div>
         <label htmlFor="to">To</label>
         <input type="number" id='to' />
      </div>
      <button>Filter</button>
    </form>
  )
}

export default FilterPrice;