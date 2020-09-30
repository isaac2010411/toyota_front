import React from "react";
import './style.css';
const GridHome = ({ children }) => {
  return (
    <div className='grid-container'>
      {children}
    </div>
  );
};

export default GridHome;
