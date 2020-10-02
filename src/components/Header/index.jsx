import React, { useState , useEffect} from "react";

import { Link, useHistory , withRouter} from 'react-router-dom';

import './style.css';

import Gray from '../../assets/gray.svg';
import Logo from '../../assets/logo.svg';
import NavComponent from "../Nav";

const Header = () => {
  let history = useHistory().location.pathname;
  let [isTogle , setIsToggle] = useState(["none" , null ]);

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
  
  }, [history]);

  let isToggleMenu = () =>{
    if(isTogle[0]==='none'){

      if(history ==='/'){
        document
          .getElementById("home-container")
          .style.display="none";
      }
      else{
        document
          .getElementById("detail-container")
          .style.display="none";
      }

     return setIsToggle(["block" , "dark"]);

    }
    else{
      if(history ==='/'){
        document
          .getElementById("home-container")
          .style.display="block";
      }
      else{
        document
          .getElementById("detail-container")
          .style.display="block";
      }
     return setIsToggle(["none",null]);
    }
  }

  return (
    <>
    <header>
      <div className="header-logo-container">
        <Link to='/'>
          <img
            src={Logo}
            alt="LogoImage"
            style={{marginLeft:"10px"}}
          />
        </Link>
        <div>
          <div style={{borderBottom:`${history === '/' ?  ' solid 4px #eb0a1e' : ''}`,padding:"20px"}}>
            <Link 
              to='/' 
              className="header-text" 
              style={{color:`${history === '/' ? colors.isActive : colors.isInact}`}}
            >
              Modelos
            </Link>
          </div>
          <div style={{borderBottom:`${history === '/' ?  '' : 'solid 4px #eb0a1e'}`,padding:"20px"}}>
            <Link 
              className="header-text"
              style={{color:`${history !== '/'? colors.isActive :colors.isInact}`}}
            >
              Ficha de modelo
            </Link>
          </div>
        </div>
      </div>
     
      <div style={{display:"flex", alignItems:"center"}}>
          <h6 
            style={{marginRight:"10px"}} 
            className="header-text-menu">
              Menú 
          </h6>
          <img 
            onClick={isToggleMenu} 
            src={Gray} 
            alt='Button menu'
          />
      </div>
    </header>
      <NavComponent 
        isTogle={isTogle} 
        isToggleMenu={isToggleMenu}
      />
    </>
  );
};

export default withRouter(Header);
