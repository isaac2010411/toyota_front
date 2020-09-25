import React from "react";

import "../styles.css";

import useModels from "../hooks/useModels";
import GridHome from "../components/GridHome";
import Card from "../components/Card/Index";
import Filters from "../components/Filters";

export default function Home() {
  let data = useModels.useModel();
  return (
    <div className="App">
      <h1
        style={{
          fontSize: "50px",
          fontWeight: "bold",
          fontStretch: "normal",
          fontStyle: "normal",
          lineHeight: "1.14",
          letterSpacing: "-1px",
          color: "#373737",
          marginLeft: "150px"
        }}
      >
        Descubrí todos los modelos
      </h1>
      <Filters/>
      {data ? (
        <GridHome>
          <Card data={data} />
        </GridHome>
      ) : (
        <h2>Cargando</h2>
      )}
    </div>
  );
}
