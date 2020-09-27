import React from 'react';
import Fill from '../../assets/fill-1.svg';


import ToggleList from '../ToggleList';

import './style.css';

const Filters =()=>{

  let toggleLis =() => {
    
  }

  return(
    <>
    <div className="filter-container">
      <div className="filter-toggle-fil">

        <h6 className="filter-text-title">Filtrar por </h6>
        <>
          <ul>
            <li className='filter-text'>Todos</li>
            <li className='filter-text'>Autos</li>
            <li className='filter-text'>Pickups y Comerciales</li>
            <li className='filter-text'>SUVs y Crossovers</li>
          </ul>
        </>
      </div>

      <div className="filter-toggle-ord">
        <h6 className="filter-text-title"> 
          Ordenar por 
          <img src={Fill} alt="toggle-image"/> 
        </h6>
        <div className="filter-order-toggle">
          <ToggleList/>
        </div>
      </div>
      
    </div>
    <hr style={{marginTop:"-20px", marginLeft:"15%", marginRight:"15%"}}/>
    </>
  )
}



export default Filters;