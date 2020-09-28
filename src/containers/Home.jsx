import React, { useState } from "react";

import "../styles.css";

import useModels from "../hooks/useModels";
import GridHome from "../components/GridHome";
import Card from "../components/Card/Index";
import Filters from "../components/Filters";


export default function Home() {
  let data = useModels.useModel();
  let [ filter , setFilter ]= useState("Todos");
  return (
    <div className="App">
      <h1 className='Text-Style-6' style={{marginLeft:"15%" , marginTop:"90px", marginBottom:"50px"}}>
        Descubrí todos los modelos
      </h1>
      <Filters setFilter={setFilter}/>
      {
        data 
        ? 
        <div style={{display:"flex" , justifyContent:"center"}}>
          <GridHome>
            <Card data={data} filter={filter}/>
          </GridHome>
        </div>
       : 
        <h2>Cargando</h2>
      }

    </div>
  );
}
