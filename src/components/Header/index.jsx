import React, { useState , useEffect} from "react";

import { Link, useHistory , withRouter} from 'react-router-dom';

import './style.css';

import Gray from '../../assets/gray.svg';
import Logo from '../../assets/logo.svg';
import NavComponent from "../Nav";

const Header = () => {
  let history = useHistory().location.pathname;
  let [isTogle , setIsToggle] = useState(["none" , null ])

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
    if(isTogle[0]==='none'){
      document.body.classList.add("nav-selected-body")
     return setIsToggle(["block" , "dark"])
    }else{
      document.body.classList.remove("nav-selected-body")
      setIsToggle(["none",null])
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
        />
       </Link>
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
 
          <h6 style={{marginRight:"10px"}} className="Text-Style-5">Menú <img onClick={isToggleMenu} src={Gray} alt='Button menu'/></h6>
      
      </div>
    </header>
   
      <NavComponent isTogle={isTogle} isToggleMenu={isToggleMenu}/>
 
    </>
  );
};

export default withRouter(Header);
