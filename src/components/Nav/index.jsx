import React from 'react';
import './style.css';

import Fill from '../../assets/fill-2.svg';

const NavComponent =({isTogle , isToggleMenu})=>{
 
    return(
        <div className={isTogle[1]}>
            <nav style={{display:isTogle[0]}}>
                <ul  
                    className='nav-ul-close'
                 >
                    <li 
                        className='nav-close'
                    >   
                            Cerrar
                    </li>
                    <li>
                        <img 
                            onClick={isToggleMenu}
                            src={Fill} 
                            alt='close-button'
                        />
                    </li>
                </ul>
                    <BlockNav>
                        <ul className='nav-ul' >
                            <li className='nav-text'>Modelos</li>
                            <li className='nav-text'>Servicios y accesorios</li>
                            <li className='nav-text'>Financiacion</li>
                            <li className='nav-text'>Reviews y Comunidad</li>
                        </ul>
                    </BlockNav>
                    <hr style={{marginLeft:"30px", marginRight:"30px"}}/>
                    <BlockNav>
                         <ul className='nav-ul'>
                            <li className='nav-text'>Toyota Mobility Service</li>
                            <li className='nav-text'>Toyota Gazoo Racing</li>
                            <li className='nav-text'>Toyota Hibridos</li> 
                         </ul>
                    </BlockNav>    
                    <hr style={{marginLeft:"30px", marginRight:"30px"}}/>
                    <BlockNav>
                        <ul className='nav-ul'>
                            <li className='nav-text'>Concecionarios</li>
                            <li className='nav-text'>Test Drive</li>
                            <li className='nav-text'>Contacto</li>
                            
                        </ul>
                    </BlockNav>
                    <BlockNav>
                        <ul className='nav-ul' style={{backgroundColor:"#efeeef"}}>
                            <li className='nav-text'>Actividades</li>
                            <li className='nav-text'>Servicios al Cliente</li>
                            <li className='nav-text'>Ventas Especiales</li>
                            <li className='nav-text'>Innovacion</li>
                            <li className='nav-text'>Prensa</li>
                            <li className='nav-text'>Acerca de ...</li> 
                        </ul>
                    </BlockNav>
            </nav>
        </div>
        
    )
};



const BlockNav = ({children })=>{
    return(
        <div style={{marginTop:"10px"}}>
            {children}
        </div>
    )
}


export default NavComponent;