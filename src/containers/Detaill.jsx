import React from 'react';
import { useHistory } from 'react-router-dom';

import DescriptionSection from '../components/DescriptionSection';
import Slider from '../components/Slider';

import useModels from "../hooks/useModels";

const ModelPage =()=>{

  let id = useHistory().location.pathname.slice(1);
  let data = useModels.useModel(id);
  
  return(
    
    <>
    {
      data 
      ?
      <>

        <DescriptionSection 
          image ={data.photo} 
          title ={data.title} 
          description={data.description} 
          name={data.name}
        />

        <Slider features={data.model_features}/>

        <DescriptionSection 
          upsideDown
          image ={data.model_highlights[1].image} 
          title ={data.model_highlights[1].title} 
          description={data.model_highlights[1].content} 
        />

        <DescriptionSection 
          image ={data.model_highlights[0].image} 
          title ={data.model_highlights[0].title} 
          description={data.model_highlights[0].content} 
        />
      </>
      :
      <h5>Cargando</h5>
    }
      
    </>
  )
};



export default ModelPage;