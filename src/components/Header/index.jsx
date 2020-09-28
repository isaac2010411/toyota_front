import React, { useState , useEffect} from "react";

import { Link, useHistory , withRouter} from 'react-router-dom';

import './style.css';

import Gray from '../../assets/gray.svg';
import Logo from '../../assets/logo.svg';
import NavComponent from "../Nav";

const Header = () => {
  let history = useHistory().location.pathname;
  let [isTogle , setIsToggle] =useState("none")
  let [text , setText]= useState("Menú")

  let colors ={
    isActive :'#eb0a1e',
    isInact:'#191919'
  }

  useEffect(() => {
    let isMounted = true;

    function returnHistory (){
      return history;
    }

    if(isMounted){
      returnHistory()
    }
    
    return () => {
      isMounted=false
    }
  
  }, [history])


  let isToggleMenu = () =>{
    // setIsToggle("block")
    // document.body.classList.add("isOpen")
    setText("Cerrar")
  }

  return (
    <>
    <header>
      <div className="header-logo-container">
        <img
          src={Logo}
          alt="LogoImage"
       />
        <ul>
          <li >
            <Link 
              to='/' 
              className="header-text" 
              style={{color:`${history === '/' ? colors.isActive : colors.isInact}`}}
              >
                Modelos
              </Link>
          </li>
          <li 
            className="header-text"
            style={{marginLeft:"70px" , color:`${history !== '/'? colors.isActive :colors.isInact}`}}
          >
            Ficha de modelo
          </li> 
        </ul>
      </div>
     
      <div style={{display:"flex", alignItems:"center"}}>
        <h6 style={{marginRight:"10px"}} className="Text-Style-5">{text}</h6>
        <img onClick = {isToggleMenu} src={Gray} alt='Button menu'/>
      </div>
    </header>
      <NavComponent display={isTogle} />
    </>
  );
};

export default withRouter(Header);
