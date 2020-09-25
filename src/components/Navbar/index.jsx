import React from "react";
import { Link } from 'react-router-dom'
import Gray from '../../assets/gray.svg';
import Logo from '../../assets/logo.svg';
const NavBar = () => {
  return (
    <nav style={{ display: "flex", alignItems: "center", justifyContent:"space-between"}}>
      <div style={{display:"flex"}}>
        <img
          src={Logo}
          alt="LogoImage"
       />

        <ul
          style={{
            padding: "2px",
            listStyle: "none",
            display:"flex"

          }}
        >
          <li style={{ marginLeft: "7px" }}>Modelos</li>
          <Link to='/model' style={{ marginLeft: "7px" }}>Ficha de modelo</Link>
        </ul>

      </div>
     
      <div style={{alignItems:"center"}}>
        Menú
        <img src={Gray} alt='Button menu'/>
      </div>

    </nav>
  );
};

export default NavBar;
