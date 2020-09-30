import React from 'react';
import './style.css';

import Fill from '../../assets/fill-2.svg';

const NavComponent =({isTogle , isToggleMenu})=>{
 
    return(
        <div className={isTogle[1]}>
            <nav style={{display:isTogle[0]}}>
                <ul style={{listStyle:"none"}} className='nav-ul'>
                    <li className='nav-close' style={{marginRight:"-20px"}}>Cerrar <img onClick={isToggleMenu} src={Fill} alt='close-button'/></li>
                    <li className='nav-text'>Modelos</li>
                    <li className='nav-text'>Servicios y accesorios</li>
                    <li className='nav-text'>Financiacion</li>
                    <li className='nav-text'>Reviews y Comunidad</li>
                     <hr style={{marginLeft:"25%",marginTop:"20px",marginBottom:"20px"}}/>
                    <li className='nav-text'>Toyota Mobility Service</li>
                    <li className='nav-text'>Toyota Gazoo Racing</li>
                    <li className='nav-text'>Toyota Hibridos</li>
                    <hr style={{marginLeft:"25%",marginTop:"20px",marginBottom:"20px"}}/>
                    <li className='nav-text'>Concecionarios</li>
                    <li className='nav-text'>Test Drive</li>
                    <li className='nav-text'>Contacto</li>
                    <li className='nav-text'>Actividades</li>
                    <hr style={{marginLeft:"25%",marginTop:"20px",marginBottom:"20px"}}/>
                    <li className='nav-text'>Servicios al Cliente</li>
                    <li className='nav-text'>Ventas Especiales</li>
                    <li className='nav-text'>Innovacion</li>
                    <li className='nav-text'>Prensa</li>
                    <li className='nav-text'>Acerca de ...</li>
                </ul>
            </nav>
        </div>
        
    )
};




export default NavComponent;