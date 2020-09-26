import { useEffect, useState } from "react";

export default  {
  
  useModel: (id) => {
    const [model, setModel] = useState(null);

    useEffect(() => {

      let isMounted = true;

      async function getData(id) {
        let modelID;
       
        if (id) {
          modelID = id ? id : "" ;
        };
      
        let response = await fetch(`https://challenge.agenciaego.tech/models/${ modelID ? modelID : ""}`);
        let responseJson = await response.json();

        if (model === null || model === undefined) {
          setModel(responseJson);
        }
      }

      if (!model && isMounted) {
        getData(id);
      }

      return () => (isMounted = false);

    }, [model, id]);

    return model;
  }
};
