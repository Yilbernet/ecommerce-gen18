import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAllProducts, getProductsByCategory } from '../../store/slices/products.slice';

const FilterCategory = () => {

   const [categories, setCategories] = useState();

   useEffect(() => {
      const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products/categories`;
      axios.get(URL)
         .then(res => setCategories(res.data.data.categories))
         .catch(err => console.log(err));
   }, []);

   const dispatch = useDispatch();

   const handleCategory = (id) => {
      if(id){
         dispatch(getProductsByCategory(id));
      } else {
         dispatch(getAllProducts());
      }
   }

  return (
    <article>
      <h3>Category</h3>
      <ul>
         <li onClick={() => handleCategory()}>All Products</li>
         {
            categories?.map(category => (
               <li key={category.id}
               onClick={() => handleCategory(category.id)}
               >{category.name}</li>
            ))
         }
      </ul>
    </article>
  )
}

export default FilterCategory;