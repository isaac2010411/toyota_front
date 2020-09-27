import React from 'react';
import './style.css';



const Slider =({features})=>{

    return(
        <div className="slide-container">
            {
                features &&
                features.map( (fe , i) => (
                    <figure key={i}>
                        <img 
                            src={`https://challenge.agenciaego.tech${fe.photo}`} 
                            alt={fe.name} 
                            style={{borderRadius:"5px"}}
                        />
                        <h6 className='slide-card-title'>{fe.name}</h6>
                        <p className='slide-card-text'>{fe.description}</p>
                    </figure>
                ))
            } 
        </div>
        
    )
};




export default Slider;