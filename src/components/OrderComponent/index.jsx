import React from 'react';
import './style.css'



const OrderComponent =({setOrder})=>{

  let toggleOrder =(e)=>{
    let action = e.target.innerHTML;
    if(action === "Nada"){
     return setOrder("nada");
    }
    setOrder(action);
  }

  return(
    <div className="order-list-container">
      <div className="order-center">
          <ul>
            <li 
              onClick={(e)=>toggleOrder(e)} 
              className='order-text'
            >
              Nada
            </li>
            <li 
              className='order-text'
            >
                De <strong onClick={(e)=>toggleOrder(e)} >menor</strong> a <strong>mayor</strong>  precio
            </li>
            <li 
              className='order-text'
            >
              De <strong onClick={(e)=>toggleOrder(e)} >mayor</strong> a <strong> menor </strong> precio
            </li>
            <li 
              
              className='order-text'
            >
              Más <strong onClick={(e)=>toggleOrder(e)} >nuevos</strong> primero
            </li>
            <li 
              className='order-text'
            >
              Más <strong  onClick={(e)=>toggleOrder(e)} >viejos</strong> primero </li>
          </ul>
      </div>
     
    </div>
  )
};




export default OrderComponent;