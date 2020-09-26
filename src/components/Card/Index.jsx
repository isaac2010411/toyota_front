import React from "react";
import { Link } from "react-router-dom";

import '../../styles.css';

const Card = ({ data }) => {

  return (
    <>
      {data.map((d) => (
        <Link to={`/${d.id}`}key={d.id}>
          <div style={{textAlign:"center" , padding:"3px"}}>
            <h6 style={{fontFamily:'Montserrat Bold, arial'}}>{d.name}</h6>
            <p>{d.year}|${d.price}</p>
            <img
              src={`https://challenge.agenciaego.tech${d.photo}`}
              style={{ height: "auto", width: "100%" }}
              alt={`${d.name}`}
            />
          </div>
        </Link>
      ))}
    </>
  );
};

export default Card;
