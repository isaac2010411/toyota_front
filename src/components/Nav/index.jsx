import React from 'react';



const NavComponent =()=>{
    return(
        <nav style={{width:"25%", height:"90vh",float:"right",marginTop:"-90px" , textAlign:"right" ,borderLeft:"solid 1px black" , backgroundColor:"white", display:"none"}}>
            <ul style={{listStyle:"none"}}>
                <li >Cerrar X </li>
                <li style={{marginRight:"54px",padding:"5px"}}>Modelos</li>
                <li style={{marginRight:"54px",padding:"5px"}}>Servicios y accesorios</li>
                <li style={{marginRight:"54px",padding:"5px"}}>Financiacion</li>
                <li style={{marginRight:"54px",padding:"5px"}}>Reviews y Comunidad</li>
                <hr style={{marginTop:"40px", marginBottom:"40px"}}/>
                <li style={{marginRight:"54px",padding:"5px"}}>Toyota Mobility Service</li>
                <li style={{marginRight:"54px",padding:"5px"}}>Toyota Gazoo Racing</li>
                <li style={{marginRight:"54px",padding:"5px"}}>Toyota Hibridos</li>
                <hr style={{marginTop:"40px", marginBottom:"40px"}}/>
                <li style={{marginRight:"54px",padding:"5px"}}>Concecionarios</li>
                <li style={{marginRight:"54px",padding:"5px"}}>Test Drive</li>
                <li style={{marginRight:"54px",padding:"5px"}}>Contacto</li>
                <li style={{marginRight:"54px",padding:"5px"}}>Actividades</li>
                <hr style={{marginTop:"40px", marginBottom:"40px"}}/>
                <li style={{marginRight:"54px",padding:"5px"}}>Servicios al Cliente</li>
                <li style={{marginRight:"54px",padding:"5px"}}>Ventas Especiales</li>
                <li style={{marginRight:"54px",padding:"5px"}}>Innovacion</li>
                <li style={{marginRight:"54px",padding:"5px"}}>Prensa</li>
                <li style={{marginRight:"54px",padding:"5px"}}>Acerca de ...</li>
            </ul>
        </nav>
    )
};




export default NavComponent;