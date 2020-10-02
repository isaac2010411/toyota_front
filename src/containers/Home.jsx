import React, { useState } from "react";

import "../styles.css";

import useModels from "../hooks/useModels";
import GridHome from "../components/GridHome";
import Card from "../components/Card/Index";
import OrderComponent from "../components/OrderComponent";
import SeconFilter from "../components/SeconFilter";



export default function Home() {
  let data = useModels.useModel();
  let [ filter , setFilter ]= useState("Todos");
  let [order , setOrder]= useState("nada");

  return (
    <div id="home-container" style={{width:"100%", padding:"3px"}}>
      <h1 className='Text-Style-6' 
      style={{marginLeft:"5%" , marginTop:"50px", marginBottom:"50px", padding:"5px"}}
      >
        Descubrí todos los modelos
      </h1>
      <SeconFilter 
        setOrder={setOrder}
        setFilter={setFilter}
      />
      <hr style={{marginTop:"-7px"}}/>
      {
        data 
        ? 
        <div style={{display:"flex" , justifyContent:"center"}}>
          <GridHome>
            <Card data={data} filter={filter} order={order}/>
          </GridHome>
        </div>
       : 
        <h2>Cargando</h2>
      }
    </div>
  );
}
