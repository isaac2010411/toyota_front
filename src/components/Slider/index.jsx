import React from 'react';





const Slider =({features})=>{

    return(
        <div style={{display:"flex"}}>
            {
                features &&
                features.map( (fe , i) => (
                    <section key={i}>
                        <img src={`https://challenge.agenciaego.tech${fe.photo}`} alt={fe.name}/>
                        <h6>{fe.name}</h6>
                        <p>{fe.description}</p>
                    </section>
                ))
            } 
        </div>
        
    )
};




export default Slider;