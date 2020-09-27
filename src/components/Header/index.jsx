import React from "react";
import { Link } from 'react-router-dom';

import './style.css';

import Gray from '../../assets/gray.svg';
import Logo from '../../assets/logo.svg';
import NavComponent from "../Nav";

const Header = () => {
  return (
    <>
    <header>
      <div className="header-logo-container">
        <img
          src={Logo}
          alt="LogoImage"
       />
        <ul>
          <li className="header-text"><Link to='/'>Modelos</Link></li>
          <li className="header-text" style={{marginLeft:"70px"}}>Ficha de modelo</li> 
        </ul>
      </div>
     
      <div style={{display:"flex", alignItems:"center"}}>
        <h6 style={{marginRight:"10px"}} className="Text-Style-5"> Menú</h6>
        <img src={Gray} alt='Button menu'/>
      </div>
    </header>
    <NavComponent/>
    </>
  );
};

export default Header;
