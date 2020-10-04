import React from 'react';
import './style.css'



const OrderComponent =({setOrder})=>{


  let toggleOrder =(e)=>{
    let action = e.target.innerHTML.split(" ")[2]

    if(action === undefined){
     return setOrder("nada");
    }
    setOrder(action);
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
            De <strong> menor </strong>  a <strong>mayor</strong>  precio
        </li>
        <li 
          onClick={(e)=>toggleOrder(e)} 
          className='order-text'
        >
          De <strong>  mayor </strong> a <strong>menor</strong> precio
        </li>
        <li 
          onClick={(e)=>toggleOrder(e)} 
          className='order-text'
        >
          Más <strong> nuevos </strong> primero
        </li>
        <li 
          onClick={(e)=>toggleOrder(e)} 
          className='order-text'
        >
          Más <strong> viejos </strong> primero </li>
      </ul>
    </div>
  )
};




export default OrderComponent;