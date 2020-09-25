import React from "react";

const Card = ({ data }) => {
  console.log(data);
  return (
    <>
      {data.map((d) => (
        <div key={d.id} style={{textAlign:"center" , padding:"3px"}}>
          <p
            style={{
              fontSize: "25px",
              fontWeight: "bold",
              fontStretch: "normal",
              fontStyle: "normal",
              lineHeight: "1.0",
              letterSpacing: "-0.7px",
              color: "#191919"
            }}
          >
            {d.name}
          </p>
          <div style={{display:"flex",justifyContent:"center"}}>
            <p>{d.year}|</p>
            <p>${d.price}</p>
          </div>
            
  
          <img
            src={`https://challenge.agenciaego.tech${d.photo}`}
            style={{ height: "auto", width: "100%" }}
            alt={`${d.name}`}
          />
        </div>
      ))}
    </>
  );
};

export default Card;
