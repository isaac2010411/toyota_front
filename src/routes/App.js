import React from 'react';
import { BrowserRouter , Switch , Route  } from 'react-router-dom'



import Home from '../containers/Home';
import ModelDetaill from '../containers/Detaill';
import Layout from '../components/Layout';


const Routes =()=>{
  return(
    <BrowserRouter>
      <Layout>
        <Switch>
            <Route exact path='/' component={ Home }/>
            <Route exact path='/:id' component={ModelDetaill}/>
       </Switch>
      </Layout>
    </BrowserRouter>
  )
}


export default Routes;