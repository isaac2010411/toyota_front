import React from 'react';
import './style.css';


const NavComponent =({display})=>{
    return(
        <nav style={{display:`${display}`}}>
            <ul style={{listStyle:"none"}}>
               
                <li>Modelos</li>
                <li>Servicios y accesorios</li>
                <li>Financiacion</li>
                <li>Reviews y Comunidad</li>
                <hr style={{marginTop:"40px", marginBottom:"40px"}}/>
                <li>Toyota Mobility Service</li>
                <li>Toyota Gazoo Racing</li>
                <li>Toyota Hibridos</li>
                <hr style={{marginTop:"40px", marginBottom:"40px"}}/>
                <li>Concecionarios</li>
                <li>Test Drive</li>
                <li>Contacto</li>
                <li>Actividades</li>
                <hr style={{marginTop:"40px", marginBottom:"40px"}}/>
                <li>Servicios al Cliente</li>
                <li>Ventas Especiales</li>
                <li>Innovacion</li>
                <li>Prensa</li>
                <li>Acerca de ...</li>
            </ul>
        </nav>
    )
};




export default NavComponent;