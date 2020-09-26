import React from 'react';
import NavBar from '../Navbar';




const Layout = ({children})=>{
return(
  <>
    <NavBar/>
    <hr/>
    {children}
  </>
  )
}


export default Layout;