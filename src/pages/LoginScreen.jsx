import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import './styles/LoginScreen.css';

const LoginScreen = () => {

   const {handleSubmit, register, reset} = useForm();
   const [isLogged, setIsLogged] = useState(false);
   const navigate = useNavigate();

   const submit = (data) => {
      const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/users/login`;
      axios.post(URL, data)
         .then(res => {
            console.log(res.data);
            localStorage.setItem('token', res.data.data.token);
            // navigate(`/`);
            setIsLogged(true);
         })
         .catch(err => console.log(err));
   }

   useEffect(() => {
      if(localStorage.getItem('token')){
         setIsLogged(true);
      } else {
         setIsLogged(false);
      }
   }, [])
   

   const handleLogout = () => {
      localStorage.removeItem('token');
      // navigate(`/`);
      setIsLogged(false);
   }

   const handleRegister = () => {
      navigate(`/register`);
   }

   if(localStorage.getItem('token')){
      return (
         <div className='Logged'>
            <h2 className='Logged__title'>User Logged ✔</h2>
            <button
               className='Logged__btn'
               onClick={handleLogout}>Logout
            </button>
         </div>
      )
   }

  return (
    <div className='loginScreen'>
      <form onSubmit={handleSubmit(submit)} className='loginScreen__form' >
         <div className='loginScreen__email'>
            <label htmlFor="email">Email</label>
            <input
               className='loginScreen__input'
               type="email"
               placeholder='Enter your email'
               id='email' {...register('email')}
            />
         </div>
         <div className='loginScreen__password'>
            <label htmlFor="password">Password</label>
            <input 
               className='loginScreen__input'
               type="password"
               placeholder='Enter your password'
               id='password' {...register('password')}
            />
         </div>
         <button className='loginScreen__btn'>Login</button>
      </form>
      <div className='loginScreen__register'>
         <p>if you are not registered yet</p>
         <button
            className='loginScreen__btn'
            onClick={handleRegister}>Register
         </button>
      </div>
    </div>
  )
}

export default LoginScreen;