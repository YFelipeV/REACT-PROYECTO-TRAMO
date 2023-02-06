export const getConductoresDisponibles = async () => {
  const response = await fetch(
    "https://tramo-res-api-production.up.railway.app/admin/conductoresDis"
  );
  const data = response.json()
  return data;
};

export const getConductoresServicio = async () => {
  const response = await fetch(
    "https://tramo-res-api-production.up.railway.app/admin/conductoresEnServicio"
  );
  const data = response.json()
  return data;
};

export const getSolicitudes = async () => {
  const response = await fetch(
    "https://tramo-res-api-production.up.railway.app/admin/solicitudesPendiente"
  );
  const data = response.json()
  return data;
};

export const getSolicitudesRechazadas = async () => {
  const response = await fetch(
    "https://tramo-res-api-production.up.railway.app/admin/solicitudesRechazadas"
  );
  const data = response.json()
  return data;
};


export const getDatosConductores = async () => {
  
    const response = await fetch(
      "https://tramo-res-api-production.up.railway.app/admin/datosConductoresHabilitados"
    );
    const data = response.json()
    return data;
  
};

export const getDatosConductoresIn = async () => {
 
    const response = await fetch(
      "https://tramo-res-api-production.up.railway.app/admin/datosConductoresInhabilitados"
    );
    const data = response.json()
    return data;
  
    
  
  
};

export const getDatos = async () => {
 
  const response = await fetch(
    "https://tramo-res-api-production.up.railway.app/admin/solicitudesPendiente/:id"
  );
  const data = response.json()
  return data;

  


};



   export const updateData =  (user) => {
    
   const url = (`https://tramo-res-api-production.up.railway.app/admin/datosInhabilitarConductor/${user.idConductor}`);
   const data2 = { motivoRechazoCON: user.motivoRechazoCON };
   
  
  
  fetch(url, {
     method: 'PUT',
     body: JSON.stringify(data2),
     headers: {
      'Content-Type': 'application/json'
    }
   })
   .then(res => res.json())
   .then(data2 => {
     console.log(data2);
   })
   .catch(error => {
     console.log(error);
  });
   }

   export const putHabilitarDatosConductor=(id)=>{
    const url = (`https://tramo-res-api-production.up.railway.app/admin/datosHabilitarConductor/${id}`);
    const data2 = { idConductor: id };
    
   
   
   fetch(url, {
      method: 'PUT',
      body: JSON.stringify(data2),
      headers: {
       'Content-Type': 'application/json'
     }
    })
    .then(res => res.json())
    .then(data2 => {
      console.log(data2);
    })
    .catch(error => {
      console.log(error);
   });


   }


