import React from 'react';
import './style.css'



const ToggleList =()=>{
  return(
    <div className="toggle-list-container">
      <ul>
        <li className='order-text'>Nada</li>
        <li className='order-text'>De menor a mayor precio</li>
        <li className='order-text'>De mayor a menor precio</li>
        <li className='order-text'>Más nuevos primero </li>
        <li className='order-text'>Más viejos primero </li>
      </ul>
    </div>
  )
};




export default ToggleList;