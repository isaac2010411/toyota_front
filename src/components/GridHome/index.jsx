import React from "react";

const GridHome = ({ children }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat( 4 , 268px )",
        gridColumGap: "70px",
        gridRowGap:"70px",
      }}
    >
      {children}
    </div>
  );
};

export default GridHome;
