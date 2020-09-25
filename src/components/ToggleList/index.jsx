import React from 'react';




const ToggleList =(list)=>{
  return(
    <div>
      
          {
          list.map(data => (
            <>
              <div>Nada</div>
              <div>De menor a mayor precio</div>
              <div>De mayor a menor precio</div>
              <div>Más nuevos primero</div>
              <div>Más viejos primero</div>
             </>
            ))
          }
       
        
      
    </div>
  )
};




export default ToggleList;