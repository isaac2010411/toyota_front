import React, { useState } from 'react';
import OrderComponent from '../OrderComponent';
import './style.css';


const SeconFilter = ({setFilter , setOrder})=>{

    const toggleFilter = (e) => {
        let actulFilter = e.target.innerHTML;
        setFilter(actulFilter)
    }
    return (
        <div className="secontContainer">
            <ToggleComponent name="Filtrar por" left='10px'>
               <div className="first-container">
                    <ul style={{listStyle:"none"}}>
                        <li 
                         onClick={(e)=>toggleFilter(e)}
                            className='order-text'>Todos</li>
                        <li 
                         onClick={(e)=>toggleFilter(e)}
                            className='order-text'>
                            Autos</li>
                        <li 
                         onClick={(e)=>toggleFilter(e)}
                            className='order-text'>
                            Pickups y Comerciales</li>
                        <li 
                         onClick={(e)=>toggleFilter(e)}
                            className='order-text'>
                            SUVs y Crossovers</li>
                    </ul>
               </div>
            </ToggleComponent>
            <ToggleComponent name="Ordenar por" right='10px'>
               <OrderComponent setOrder={setOrder}/>
            </ToggleComponent>
        </div>
    )
}



const ToggleComponent =({children , name , right , left})=>{

    let [ isHiden , setIsHiden ] = useState(true);
    let handleHidden =()=>{
        if(!isHiden){
           return setIsHiden(true)
        }
       return setIsHiden( false )
    }
    return(
        <div style={{alignItems:"center" , padding:"10px"}}>
            <h2 onClick={handleHidden} className="filter-text-title">{name}</h2>
            <div hidden={isHiden} style={{position:"absolute" , left:left , right:right}}>
                {children}
            </div>
        </div>
    )
}


export default SeconFilter;