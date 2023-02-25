import { useState } from "react";
import Swal from "sweetalert2";




export const handleSubmit = async ({ correoAdmin, passwordAdmin }) => {
  
  const response = await fetch('https://rest-api-tramo-production.up.railway.app/auth', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ correoAdmin, passwordAdmin }),
  })
  const { alert, alertTitle, alertMessage, alertIcon, showConfirmButton, timer, ruta, token,login } = await response.json();
  if (alert) {
    Swal.fire({
      title: alertTitle,
      text: alertMessage,
      icon: alertIcon,
      showConfirmButton: showConfirmButton,
      timer: timer
    }).then(() => {
      
      // Almacenar el token en una variable o estado
      const authToken = token;
      localStorage.setItem("token",authToken);

      console.log(authToken)
      // Llamar la función para obtener los datos protegidos usando el token como argumento
      
      // Redireccionar a la ruta
      window.location = ruta;
      
    });
    
  }
};




// export const handleSubmit = async ({correoAdmin,passwordAdmin}) => {
 
  
 
 
//   const response = await fetch('https://rest-api-tramo-production.up.railway.app/auth', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ correoAdmin,passwordAdmin  }),
//   })
  
  
//   const { alert, alertTitle, alertMessage, alertIcon, showConfirmButton, timer, ruta} = await response.json();
//   if(alert){
//     Swal.fire({
//       title:alertTitle,
//       text: alertMessage,
//       icon: alertIcon ,
//       showConfirmButton: showConfirmButton,
//       timer:  timer
//     }).then(()=>{
//       window.location=ruta
//     })
//   }
//   const auth=token;

//   getDatosClientesHabilitadosEmpresa(auth)
//   getDatosClientesinhabilitadoEmpresa(auth)
  
  
//   // Aquí puedes usar los valores de la respuesta para mostrar una alerta con SweetAlert2
// };




{
  /* CONDUCTORES  DISPONIBLE*/
}
export const getConductoresDisponibles = async () => {
  
  const response = await fetch(
    "https://rest-api-tramo-production.up.railway.app/admin/conductoresDis",
    
    {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}`
      }
    },
      
     
  );
  const data = response.json();
  
  
    return data
    
  
  
  
  
};



{
  /* CONDUCTORES  SERVICIO*/
}

export const getConductoresServicio = async () => {
  const response = await fetch(
    "https://rest-api-tramo-production.up.railway.app/admin/conductoresEnServicio",
    {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}`
      }
    }
  );
  const data = response.json();
  
      return data
    
};
{
  /* SOLICITUDES */
}

{
  /* SOLICITUDES PENDIENTES */
}

export const getSolicitudesPendientes = async () => {
  const response = await fetch(
    "https://rest-api-tramo-production.up.railway.app/admin/solicitudesPendiente",
    {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}`
      }
    }
  );
  const data = response.json();
  return data;
};

export const getSolicitudesPendientesid = async (id) => {
  const response = await fetch(
    `https://rest-api-tramo-production.up.railway.app/admin/solicitudesPendiente/${id}`,
    {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}`
      }
    }
  );
  const data = response.json();
  return data;
};

{
  /* SOLICITUDES  ACTUALIZAR */
}

export const updateSolicitudesPendientes = async (id) => {
  const user = {
    idConductor: id,
  };
  const url = `https://rest-api-tramo-production.up.railway.app/admin/aceptarSoli/${user.idConductor}`;
  const data = { idConductor: user.idConductor };

  await fetch(url, {
    method: "PUT",
    body: JSON.stringify(data),
    
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}`
      }
    
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
  return data;
};

{
  /* SOLICITUDES  ACTUALIZAR RECHAZAR */
}
export const putSolicitudesRechazar = (user) => {
  const url = `https://rest-api-tramo-production.up.railway.app/admin/rechazarSolicitud/${user.idConductor}`;
  const data2 = { motivoRechazoCON: user.motivoRechazoCON };

  fetch(url, {
    method: "PUT",
    body: JSON.stringify(data2),
    
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}`
      
    }
  })
    .then((res) => res.json())
    .then((data2) => {
      console.log(data2);
    })
    .catch((error) => {
      console.log(error);
    });
};

{
  /* SOLICITUDES  RECHAZADAS */
}

export const getSolicitudesRechazadas = async () => {
  const response = await fetch(
    "https://rest-api-tramo-production.up.railway.app/admin/solicitudesRechazadas",
    {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}`
      }
    }
  );
  const data = response.json();
  return data;
};

{
  /* SOLICITUDES  RECHAZADAS ID */
}
export const getSolicitudesRechazadasid = async (id) => {
  const response = await fetch(
    `https://rest-api-tramo-production.up.railway.app/admin/solicitudesRechazadas/${id}`,
    {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}`
      }
    }
  );
  const data = response.json();
  return data;
};

{
  /* DATOS CONDUCTOR */
}

{
  /* DATOS CONDUCTOR HABILITADOS */
}

export const getDatosConductorHabilitados = async () => {
  const response = await fetch(
    "https://rest-api-tramo-production.up.railway.app/admin/datosConductoresHabilitados",
    {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}`
      }
    }
  );
  const data = response.json();
  return data;
};

{
  /* DATOS CONDUCTOR HABILITADOS ID */
}
export const getDatosConductorHabilitadosId = async (id) => {
  const response = await fetch(
    `https://rest-api-tramo-production.up.railway.app/admin/datosConductoresHabilitados/${id}`,
    {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}`
      }
    }
  );
  const data = response.json();
  return data;
};

{
  /* DATOS CONDUCTOR INHABILITAR */
}

{
  /* DATOS CONDUCTOR INHABILITADOS */
}
export const getDatosConductoresInhabilitados = async () => {
  const response = await fetch(
    "https://rest-api-tramo-production.up.railway.app/admin/datosConductoresInhabilitados",
    {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}`
      }
    }
  );
  const data = response.json();
  return data;
};
{
  /* DATOS CONDUCTOR INHABILITAR */
}
export const putInhabilitarDatosConductor = (user) => {
  const url = `https://rest-api-tramo-production.up.railway.app/admin/datosInhabilitarConductor/${user.idConductor}`;
  const data2 = { motivoInhabilitadoCON: user.motivoInhabilitadoCON };
  console.log(data2);

  fetch(url, {
    method: "PUT",
    body: JSON.stringify(data2),
    
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}`
      }
    
  })
    .then((res) => res.json())
    .then((data2) => {
      console.log(data2);
    })
    .catch((error) => {
      console.log(error);
    });
};

{
  /* DATOS CONDUCTOR HABILITAR */
}

export const putHabilitarDatosConductor = (id) => {
  const url = `https://rest-api-tramo-production.up.railway.app/admin/datosHabilitarConductor/${id}`;
  const data2 = { idConductor: id };

  fetch(url, {
    method: "PUT",
    body: JSON.stringify(data2),
    
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}`
      }
    
  })
    .then((res) => res.json())
    .then((data2) => {
      console.log(data2);
    })
    .catch((error) => {
      console.log(error);
    });
};

{
  /* DATOS CONDUCTOR INHABILITADOS ID */
}

export const getDatosConductoresInhabilitadosId = async (id) => {
  const response = await fetch(
    `https://rest-api-tramo-production.up.railway.app/admin/datosConductoresInhabilitados/${id}`,
    {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}`
      }
    }
  );
  const data = response.json();
  return data;
};

{
  /* DATOS CLINTE HABILITADOS */
}

export const getDatosClientesHabilitadosNatural = async () => {
  const response = await fetch(
    "https://rest-api-tramo-production.up.railway.app/admin/datosClientesNaturalHB ",
    {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}`
      }
    }
  );
  const data = response.json();
  return data;
};
{
  /* DATOS CLINTE UPDATE  CLIENTE NATURAL */
}

export const putinhabilitarDatosClienteNatural = (user) => {
  const url = `https://rest-api-tramo-production.up.railway.app/admin/datosClientesNaturalHB/${user.idPerNatural}`;
  const data2 = { motivoInhabilitadoPNA:user.motivoInhabilitadoPNA };

  fetch(url, {
    method: "PUT",
    body: JSON.stringify(data2),
    
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}`
      }
    
  })
    .then((res) => res.json())
    .then((data2) => {
      console.log(data2);
    })
    .catch((error) => {
      console.log(error);
    });
};


{
  /* DATOS CLINTE INHABILITADOS */
}

export const getDatosClientesInhabilitadosNatural = async () => {
  const response = await fetch(
    " https://rest-api-tramo-production.up.railway.app/admin/datosClientesNaturalIN ",
    {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}`
      }
    }
  );
  const data = response.json();
  return data;
};

export const puthabilitarDatosClienteNatural = (idPerNatural) => {
  const url = `https://rest-api-tramo-production.up.railway.app/admin/datosClientesNaturalIN/${idPerNatural}`;
  const data2 = { idPerNatural:idPerNatural };

  fetch(url, {
    method: "PUT",
    body: JSON.stringify(data2),
    
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}`
      }
    
  })
    .then((res) => res.json())
    .then((data2) => {
      console.log(data2);
    })
    .catch((error) => {
      console.log(error);
    });
};

{
  /* DATOS CLINTE NATURAL ID */
}
export const getDatosClienteNaturalInhabilitadoId = async (id) => {
  const response = await fetch(
    `https://rest-api-tramo-production.up.railway.app/admin/datosClientesNaturalIN/${id}`,
    {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}`
      }
    }
  );
  const data = response.json();
  return data;
};

{
  /* DATOS CLINTE EMPRESA HABILITADOS */

}

// export const getDatosClientesHabilitadosEmpresa = async () => {
//   const response = await fetch(
//     "https://rest-api-tramo-production.up.railway.app/admin/datosClientesEmpresaHB "
//   );
//   const data = response.json();
//   return data;
// };

export const getDatosClientesHabilitadosEmpresa = async () => {
  
  // const token = localStorage.getItem("token");
  const response = await fetch(
    "https://rest-api-tramo-production.up.railway.app/admin/datosClientesEmpresaHB ",
    {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}`
      }
    }
  );
  const data = await response.json();
  return data;
};
{
  /* DATOS CLINTE EMPRESA INHABILITAR */

}

export const putInabilitarDatosClienteEmpresa = ({idPerJuridica,motivoInhabilitadoPJU}) => {
  const url = `https://rest-api-tramo-production.up.railway.app/admin/datosClientesEmpresaHB/${idPerJuridica}`;
  const data = { motivoInhabilitadoPJU:motivoInhabilitadoPJU };

  fetch(url, {
    method: "PUT",
    body: JSON.stringify(data),
    
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}`
      
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
};



{
  /* DATOS CLINTE EMPRESA INHABILITADO */

}
export const getDatosClientesinhabilitadoEmpresa = async () => {
  const Auth=localStorage.getItem("token")
  // const token = localStorage.getItem("token");
  const response = await fetch(
    "https://rest-api-tramo-production.up.railway.app/admin/datosClientesEmpresaIN ",
    {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}`
      }
    }
  );
  const data = response.json();
  return data;
};


export const putHabilitarDatosClienteEmpresa = (idPerJuridica) => {
  const url = `https://rest-api-tramo-production.up.railway.app/admin/datosClientesEmpresaIN/${idPerJuridica}`;
  const data = { idPerJuridica:idPerJuridica };

  fetch(url, {
    method: "PUT",
    body: JSON.stringify(data),
    
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}`
      }
    
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getDatosClientesinhabilitadoEmpresaId = async (id) => {
  const response = await fetch(
    `https://rest-api-tramo-production.up.railway.app/admin/datosClientesEmpresaIN/${id} `,
    {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}`
      }
    }
  );
  const data = response.json();
  return data;
};

{
  /* HISTORIAL */

}

export const getHistorial= async()=>{
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data=response .json();
  return data;
}

{
  /*PQRS*/
}

export const getPqrs= async()=>{
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data=response .json();
  return data;
}




export const validarAdmin= async()=>{
  const response = await fetch("https://rest-api-tramo-production.up.railway.app/adminPrinci");
  const data=response .json();
 
  return data;
  
}

export const Loguot= async()=>{
  const response = await fetch("https://rest-api-tramo-production.up.railway.app/logout");
  const data=response .json();
  localStorage.removeItem('token')
  return data;
  
}