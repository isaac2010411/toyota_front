import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import ModelButton from '../../assets/negro-fill.svg';
import './style.css';

const Card = ({ data , filter , order }) => {
  let  [initialState , setInitialState ] = useState(data)
  //Filter 
  useEffect(()=>{
    if(filter !== "Todos"){
      let actual = data.filter(element => element.segment === filter);
      return setInitialState(actual)
    }
    return setInitialState(data);

  },[filter , order])

  let orderB =(orderBy , dataOrder )=>{

    switch (orderBy) {
      case "nada":
        let nothing = dataOrder.sort((a, b) => a.id - b.id);
      return nothing;
      case "mayor":
         let big = dataOrder.sort((a, b) => b.price - a.price );
      return big;
      case "menor":
        let small = dataOrder.sort((a, b) =>  a.price - b.price );
      return small
      case "nuevos":
        let neww = dataOrder.sort((a, b) =>  b.year - a.year );
      return neww;
      case "viejos":  
       let old = dataOrder.sort((a, b) => a.year -  b.year );
        return old;
        default:
      break;
    }
  }


  return (
    <>
      {
        orderB(order ,initialState).map((d) => (
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
