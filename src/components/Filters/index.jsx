import React from 'react';
import Fill from '../../assets/fill-1.svg';


import ToggleList from '../ToggleList';

import './style.css';

const Filters =()=>{

  const toggleFilter = (e) => {

    let elementCurrent = e.target.classList[1];

    if( elementCurrent !== "filter-active" ){

      let actualCurrent = e.target.innerHTML;
      let isCative = document.getElementsByClassName('filter-text');

      for(let i = 0 ; i< isCative.length ; i++){
        isCative[i].classList.remove('filter-active')
        if(actualCurrent === isCative[i].innerHTML){
          isCative[i].classList.add("filter-active")
        }
       
      }
        
    }
  }


  return(
    <>
    <div className="filter-container">
      <div className="filter-toggle-fil">

        <h6 className="filter-text-title">Filtrar por </h6>
        <>
          <ul>
            <li onClick={(e)=>toggleFilter(e)} className='filter-text filter-active'>Todos</li>
            <li onClick={(e)=>toggleFilter(e)} className='filter-text'>Autos</li>
            <li onClick={(e)=>toggleFilter(e)} className='filter-text'>Pickups y Comerciales</li>
            <li onClick={(e)=>toggleFilter(e)} className='filter-text'>SUVs y Crossovers</li>
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