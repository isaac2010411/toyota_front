import React from 'react';



const DescriptionSection =({ image , description , title , name , upsideDown })=> {
  
  return(
    <section style={{display:"flex"}}>
      {
        upsideDown
        ?
          <>
          <TextSection description ={description} title={title} name={name} />
          <ImageSection image ={image}/>
          </>
        :
          <>
            <ImageSection image ={image}/>
            <TextSection description ={description} title={title} name={name} />
          </>
      }
      
    </section>
  )
};



const ImageSection =({image})=>{
  return(
    <section>
        <img src={`https://challenge.agenciaego.tech${image}`} alt=""/>
    </section>
  )
}

const TextSection =({description , title , name })=>{
  return(
    <section>
      <p>{name}</p>
      <p>{title}</p>
      <p>{description}</p>
    </section>
  )
}


export default DescriptionSection;