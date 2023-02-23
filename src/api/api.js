{
  /* CONDUCTORES  DISPONIBLE*/
}
export const getConductoresDisponibles = async () => {
  const response = await fetch(
    "https://rest-api-tramo-production.up.railway.app/admin/conductoresDis"
  );
  const data = response.json();
  return data;
};
{
  /* CONDUCTORES  SERVICIO*/
}

export const getConductoresServicio = async () => {
  const response = await fetch(
    "https://rest-api-tramo-production.up.railway.app/admin/conductoresEnServicio"
  );
  const data = response.json();
  return data;
};
{
  /* SOLICITUDES */
}

{
  /* SOLICITUDES PENDIENTES */
}

export const getSolicitudesPendientes = async () => {
  const response = await fetch(
    "https://rest-api-tramo-production.up.railway.app/admin/solicitudesPendiente"
  );
  const data = response.json();
  return data;
};

export const getSolicitudesPendientesid = async (id) => {
  const response = await fetch(
    `https://rest-api-tramo-production.up.railway.app/admin/solicitudesPendiente/${id}`
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
      "Content-Type": "application/json",
    },
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
      "Content-Type": "application/json",
    },
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
    "https://rest-api-tramo-production.up.railway.app/admin/solicitudesRechazadas"
  );
  const data = response.json();
  return data;
};

{
  /* SOLICITUDES  RECHAZADAS ID */
}
export const getSolicitudesRechazadasid = async (id) => {
  const response = await fetch(
    `https://rest-api-tramo-production.up.railway.app/admin/solicitudesRechazadas/${id}`
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
    "https://rest-api-tramo-production.up.railway.app/admin/datosConductoresHabilitados"
  );
  const data = response.json();
  return data;
};

{
  /* DATOS CONDUCTOR HABILITADOS ID */
}
export const getDatosConductorHabilitadosId = async (id) => {
  const response = await fetch(
    `https://rest-api-tramo-production.up.railway.app/admin/datosConductoresHabilitados/${id}`
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
    "https://rest-api-tramo-production.up.railway.app/admin/datosConductoresInhabilitados"
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
      "Content-Type": "application/json",
    },
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
      "Content-Type": "application/json",
    },
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
    `https://rest-api-tramo-production.up.railway.app/admin/datosConductoresInhabilitados/${id}`
  );
  const data = response.json();
  return data;
};

{
  /* DATOS CLINTE HABILITADOS */
}

export const getDatosClientesHabilitadosNatural = async () => {
  const response = await fetch(
    "https://rest-api-tramo-production.up.railway.app/admin/datosClientesNaturalHB "
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
      "Content-Type": "application/json",
    },
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
    " https://rest-api-tramo-production.up.railway.app/admin/datosClientesNaturalIN "
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
      "Content-Type": "application/json",
    },
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
    `https://rest-api-tramo-production.up.railway.app/admin/datosClientesNaturalIN/${id}`
  );
  const data = response.json();
  return data;
};

{
  /* DATOS CLINTE EMPRESA HABILITADOS */

}

export const getDatosClientesHabilitadosEmpresa = async () => {
  const response = await fetch(
    "https://rest-api-tramo-production.up.railway.app/admin/datosClientesEmpresaHB "
  );
  const data = response.json();
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
      "Content-Type": "application/json",
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
  const response = await fetch(
    "https://rest-api-tramo-production.up.railway.app/admin/datosClientesEmpresaIN "
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
      "Content-Type": "application/json",
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

export const getDatosClientesinhabilitadoEmpresaId = async (id) => {
  const response = await fetch(
    `https://rest-api-tramo-production.up.railway.app/admin/datosClientesEmpresaIN/${id} `
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


// export const putInhabilitarDatosConductor = (user) => {
//   console.log(user);
//   const url = `https://rest-api-tramo-production.up.railway.app/admin/datosInhabilitarConductor/${user.idConductor}`;
//   const data = {
//     motivoInhabilitadoCON: user.motivoInhabilitadoCON,
//   };
//   fetch(url, {
//     method: "PUT",
//     body: JSON.stringify(data),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   })
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((error) => {});
// };
