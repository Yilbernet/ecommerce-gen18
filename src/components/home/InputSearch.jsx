import React from 'react';
import './styles/InputSearch.css';

const InputSearch = ({inputText, setInputText}) => {

   const handleChange = (e) => {
      setInputText(e.target.value);
   }

  return (
   <div className='home__inputSearch'>
    <input
      className='home__input'
      value={inputText}
      onChange={handleChange}
      type="text"
      placeholder='what are you looking for?'
    />
    <i className="home__input__icon fa-solid fa-magnifying-glass"></i>
   </div>
  )
}

export default InputSearch;