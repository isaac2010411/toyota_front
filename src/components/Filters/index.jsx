import React from 'react';



const Filters =()=>{
  return(
    <div style={{display:'flex', alignItems:"center",justifyContent:"space-around"}}>
      <div style={{display:'flex', alignItems:"center"}}>
        Filtrar por
        <>
          <ul style={{display:'flex',listStyle:"none"}}>
            <li>Todos</li>
            <li style={{marginLeft:"17px"}}>Autos</li>
            <li style={{marginLeft:"17px"}}>Pickups y Comerciales</li>
            <li style={{marginLeft:"17px"}}>SUVs y Crossovers</li>
          </ul>
        </>
      </div>
      <div>
        Ordenar por
      </div>
    </div>
  )
}



export default Filters;