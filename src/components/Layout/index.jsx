import React from 'react';
import FooterComponent from '../Footer';
import Header from '../Header';




const Layout = ({children})=>{
return(
  <>
    <Header/>
    <hr style={{marginTop:"-5px"}}/>
    {children}
    <FooterComponent/>
  </>
  )
}


export default Layout;