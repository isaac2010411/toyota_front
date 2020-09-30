import React, { useEffect, useState } from 'react';
import './style.css';
import Fill from '../../assets/fill-1-copy-2.svg';


const Slider =({features})=>{

    let [ actualFeatures , setActualFeatures ] = useState(features); 

    let actualizeNext = ()=>{
        let last = actualFeatures[0];
        actualFeatures.shift();
        let f = [ ...actualFeatures , last ]
        setActualFeatures(f)
    }

    let actualizeAnt =()=>{
        let first= actualFeatures[actualFeatures.length-1];
        actualFeatures.pop();
        let f = [   first , ...actualFeatures ]
        setActualFeatures(f)
    }

    let handleCurrent = (e)=>{
        let action = e.target.name;
        if(action === "nex"){
            return actualizeNext();
        }
        return actualizeAnt();
    }

    return(
        <div className="slide-container">
            <div 
                className="slide-container-buttons"
                style={{right:"95%"}} 
                onClick={(e)=>handleCurrent(e)}
                name='ant' 
            >
               <img 
                    className='slide-buttons' 
                    src={Fill} 
                    alt=''
                />
            </div>
            {
                actualFeatures &&
                actualFeatures.map( (fe , i) => (
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
             <div 
                className="slide-container-buttons"
                style={{left:"97%" }}
                onClick={(e)=>handleCurrent(e)} 
                name='nex' 
                >
               <img 
                    className='slide-buttons'
                    style={{ transform:"rotate(-180deg)"}} 
                    src={Fill} 
                    alt=''
                />
            </div>
        </div>
        
    )
};


export default Slider;