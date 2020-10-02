import React, { useState , useEffect } from 'react';
import OrderComponent from '../OrderComponent';
import Fill from '../../assets/fill-1.svg'
import './style.css';


const Filter = ({setFilter , setOrder})=>{

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

    let actualFilter = e.target.innerHTML;
    setFilter(actualFilter)

    let elementCurrent = e.target.classList[1];
    if( elementCurrent !== "filter-active" ){
      let actualCurrent = e.target.innerHTML;
      let isCative = document.getElementsByClassName('filter-text');
      for(let i = 0 ; i< isCative.length ; i++){
        isCative[i].classList.remove('filter-active')
        if(actualCurrent === isCative[i].innerHTML){
          isCative[i].classList.add("filter-active");
        }
      }
    }
  }
    return (
        <div className="filter-container">
            {
            width > 600 
                ?
                <div style={{display:"flex", alignItems:"center"}}>
                    <h2 
                        className="filter-text-title"
                    >
                        Filtrar por
                    </h2>  
                    <ul className='filter-list-desk'>
                        <li 
                            onClick={(e)=>toggleFilter(e)}
                            className='filter-text filter-active'>Todos</li>
                        <li 
                            onClick={(e)=>toggleFilter(e)}
                            className='filter-text'>
                            Autos</li>
                        <li 
                            onClick={(e)=>toggleFilter(e)}
                            className='filter-text'>
                            Pickups y Comerciales</li>
                        <li 
                            onClick={(e)=>toggleFilter(e)}
                            className='filter-text'>
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
            
            <ToggleComponent name="Ordenar por" right={width > 650 ? "17%" : "10px"}>
               <OrderComponent setOrder={setOrder}/>
            </ToggleComponent>
        </div>
    )
}



const ToggleComponent =({children , name , right , left})=>{

    let [ isHiden , setIsHiden ] = useState(true);
    let handleHidden =(e)=>{
        if(!isHiden){
           return setIsHiden(true)
        }
       return setIsHiden( false )
    }
    return(
        <div style={{alignItems:"center" , padding:"10px"}}>
            <h2 
                onClick={handleHidden} 
                className="filter-text-title"
            >
                {name}
                <img src={Fill} alt='filter-image' style={{ transform:`${isHiden ? 'rotate(-180deg)' : 'rotate(0deg)'}`}}></img>
            </h2>
            <div 
                hidden={isHiden} 
                style={{position:"absolute" , left:left , right:right}}
            >
                {children}
            </div>
        </div>
    )
}


export default Filter;