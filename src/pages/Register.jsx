import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import AlertMessage from '../components/register/AlertMessage';
import './styles/Register.css';

const Register = () => {

  const {handleSubmit, register, reset} = useForm();
  const [alert, setAlert] = useState(true);
  const [fail, setFail] = useState(false);

  const submit = (data) => {
    console.log(data);
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/users`;
    axios.post(URL, data)
      .then(res => {
        console.log(res.data);
        setFail(false);
        setAlert(false);
      })
      .catch(err => {
        console.log(err);
        setFail(true);
        setAlert(false);
      });
  }

  return (
    <div className='register'>
      <div className={`register__alert ${alert && 'register__disable'}`}>
        <AlertMessage setAlert={setAlert} fail={fail} />
      </div>
      <form className='register__form' onSubmit={handleSubmit(submit)}>
        <div className='register__item'>
          <label htmlFor="firstName">First Name</label>
          <input
            className='register__input'
            type="text"
            id='firstName'
            placeholder='Enter your first name'
            required {...register('firstName')}
          />
        </div>
        <div className='register__item'>
          <label htmlFor="lastName">Last Name</label>
          <input
            className='register__input'
            type="text"
            id='lastName'
            placeholder='Enter your last name'
            required {...register('lastName')}
          />
        </div>
        <div className='register__item'>
          <label htmlFor="email">Email</label>
          <input
            className='register__input'
            type="email"
            id='email'
            placeholder='Enter your email'
            title='the email must have a minimum of 8 characters'
            minLength='8'
            required {...register('email')}
          />
        </div>
        <div className='register__item'>
          <label htmlFor="password">Password</label>
          <input
            className='register__input'
            type="password"
            id='password'
            placeholder='Enter your password'
            title='the password must have a minimum of 8 characters'
            minLength='8'
            required {...register('password')}
          />
        </div>
        <div className='register__item'>
          <label htmlFor="phone">Phone Number</label>
          <input
            className='register__input'
            type="tel"
            id='phone'
            placeholder='Enter your phone number'
            title='the phone number must have a minimum of 10 characters'
            defaultValue='1234567890'
            pattern="[0-9]{10,15}"
            required {...register('phone')}
          />
        </div>
        <div className='register__item'>
          <label htmlFor="role">Role</label>
          <input
            className='register__input'
            type="text"
            id='role'
            placeholder='Enter your role'
            title='the role must have a minimum of 5 characters'
            defaultValue='admin'
            pattern="[a-z]{5,15}"
            required {...register('role')}
          />
        </div>
        <button className='register__btn'>Submit</button>
      </form>
    </div>
  )
}

export default Register;