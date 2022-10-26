import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/AlertMessage.css';

const AlertMessage = ({setAlert, fail}) => {

  const navigate = useNavigate();

  const alertBtn = () => {
    setAlert(true);
    if(!fail){
      navigate(`/login`);
    }
  }

  return (
    <article className='alert'>
      <h2 className='alert__title'>Confirmation Message</h2>
      {
        (fail)?
        (<p className='alert__message'>something went wrong ❌<br />user could not be registered</p>):
        (<p className='alert__message'>user registered successfully ✔</p>)
      }
      <button
         onClick={alertBtn}
         className='alert__btn'
      >Agree
      </button>
    </article>
  )
}

export default AlertMessage;