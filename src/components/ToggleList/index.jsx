import React from 'react';
import './style.css'



const ToggleList =({setOrder})=>{

  let toggleOrder =(e)=>{
    let action = e.target.innerHTML.split(" ");
    if(action[0] === "Nada"){
     return setOrder("nada");
    }
    setOrder(action[1]);
  }

  return(
    <div className="toggle-list-container">
      <ul>
        <li 
          onClick={(e)=>toggleOrder(e)} 
          className='order-text'
        >
          Nada
        </li>
        <li 
          onClick={(e)=>toggleOrder(e)} 
          className='order-text'
        >
            De menor a mayor precio
        </li>
        <li 
          onClick={(e)=>toggleOrder(e)} 
          className='order-text'
        >
          De mayor a menor precio
        </li>
        <li 
          onClick={(e)=>toggleOrder(e)} 
          className='order-text'
        >
          Más nuevos primero
        </li>
        <li 
          onClick={(e)=>toggleOrder(e)} 
          className='order-text'
        >
          Más viejos primero </li>
      </ul>
    </div>
  )
};




export default ToggleList;