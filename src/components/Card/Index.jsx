import React from "react";
import { Link } from "react-router-dom";

import ModelButton from '../../assets/negro-fill.svg';
import './style.css'
const Card = ({ data }) => {

  return (
    <>
      {data.map((d) => (
        <article className='Card-Container'key={d.id}>
          <p className="Text-Style-Title-Card">{d.name}</p>
          <p className="Text-Style-Price" style={{marginTop:"-20px"}}>{d.year} | ${d.price}</p>
          <img
            src={`https://challenge.agenciaego.tech${d.photo}`}
            style={{ height: "auto", width: "90%" }}
            alt={`${d.name}`}
          />
          <div style={{display:"flex" ,justifyContent:"center" ,alignItems:"center",marginTop:"15px"}}> 
            <Link to={`/${d.id}`}  
              style={{textDecoration:"none"}}
            >
            <img 
              className='card-model-button' 
              src={ModelButton} 
              alt='model-button'
            />
            </Link> 
          </div>
          
        </article>
      ))}
    </>
  );
};

export default Card;
