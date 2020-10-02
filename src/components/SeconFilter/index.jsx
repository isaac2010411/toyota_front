import React, { useState , useEffect } from 'react';
import OrderComponent from '../OrderComponent';
import './style.css';


const SeconFilter = ({setFilter , setOrder})=>{
    const [width, setWidth] = useState(0);

    useEffect(() => {
     
      const updateWidth = () => {
        const width = document.body.clientWidth;
        setWidth(width);
      };
      updateWidth();
      window.addEventListener("resize", updateWidth);
    }, []);

    const toggleFilter = (e) => {
        let actulFilter = e.target.innerHTML;
        setFilter(actulFilter)
    }
    return (
        <div className="secontContainer">
            {
            width > 600 
                ?
                <div style={{display:"flex", alignItems:"center"}}>
                    <h2 className="filter-text-title">Filtrar por</h2>  
                    <ul style={{listStyle:"none" , display:"flex",alignItems:"center"}}>
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
                            SUVs y Crossovers
                        </li>
                    </ul>
                </div>
                :
                <ToggleComponent name="Filtrar por" left='10px' >
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
            }
            
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