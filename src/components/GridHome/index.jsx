import React from "react";

const GridHome = ({ children }) => {
  console.log(children);
  return (
    <div
      style={{
        display: "inline-grid",
        gridTemplateColumns: "repeat( 4 , 268px )",
        gridColumGap: "50px",
        gridRowGap:"50px",
      }}
    >
      {children}
    </div>
  );
};

export default GridHome;
