import React from 'react';
import './style.css';

const DescriptionSection = ({ image , description , title , name , upsideDown })=> {
  
  return(
    <section className="description-container">
      {
        upsideDown
        ?
          <>
            <TextSection 
              description={description} 
              title={title} 
              name={name}
            />
            <ImageSection 
              image={image} 
              name={name}
            />
          </>
        :
          <>
            <ImageSection 
              image ={image} 
              name={name}
            />
            <TextSection 
              description={description}
              title={title} 
              name={name} 
            />
          </>
      }
    </section>
  )
};



const ImageSection = ({image , name})=>{
  return(
    <section className="description-image-container">
        <img 
          src={`https://challenge.agenciaego.tech${image}`} 
          alt={name}
        />
    </section>
  )
}

const TextSection =({description , title , name })=>{
  return(
    <section 
      className="description-text-container">
      <h6 className='description-txt-name'>{name}</h6>
      <p className='description-txt-title'>{title}</p>
      <p className='description-txt'>{description}</p>
    </section>
  )
}


export default DescriptionSection;