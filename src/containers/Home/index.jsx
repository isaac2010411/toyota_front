import React, { useState } from "react";

import "../../styles.css";
import "./style.css";

import useModels from "../../hooks/useModels";
import GridHome from "../../components/GridHome";
import Card from "../../components/Card/Index";
import Filter from "../../components/Filter";


export default function Home() {
  
  let data = useModels.useModel();
  let [ filter , setFilter ]= useState("Todos");
  let [order , setOrder]= useState("nada");

  return (
    <div id="home-container" style={{width:"100%", padding:"3px"}}>
      <h1 className='home-title' 
      >
        Descubrí todos los modelos
      </h1>
      <div>
         <Filter 
            setOrder={setOrder}
            setFilter={setFilter}
          />
          <hr style={{marginTop:"-7px" , marginLeft:"10%",marginRight:"10%"}}/>
          {
            data 
            ? 
            <div className='home-grid-container'>
              <GridHome>
                <Card 
                  data={data} 
                  filter={filter} 
                  order={order}
                />
              </GridHome>
            </div>
          : 
            <h2>Cargando</h2>
          }
        </div>
      </div>
     
  );
}
