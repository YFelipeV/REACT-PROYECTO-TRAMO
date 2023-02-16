{
  /* CONDUCTORES  DISPONIBLE*/
}
export const getConductoresDisponibles = async () => {
  const response = await fetch(
    "http://tramo-server.ddns.net:3001/admin/conductoresDis"
  );
  const data = response.json();
  return data;
};
{
  /* CONDUCTORES  SERVICIO*/
}

export const getConductoresServicio = async () => {
  const response = await fetch(
    "http://tramo-server.ddns.net:3001/admin/conductoresEnServicio"
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
    "http://tramo-server.ddns.net:3001/admin/solicitudesPendiente"
  );
  const data = response.json();
  return data;
};

export const getSolicitudesPendientesid = async (id) => {
  const response = await fetch(
    `http://tramo-server.ddns.net:3001/admin/solicitudesPendiente/${id}`
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
  const url = `http://tramo-server.ddns.net:3001/admin/aceptarSoli/${user.idConductor}`;
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
  const url = `http://tramo-server.ddns.net:3001/admin/rechazarSolicitud/${user.idConductor}`;
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
    "http://tramo-server.ddns.net:3001/admin/solicitudesRechazadas"
  );
  const data = response.json();
  return data;
};

{
  /* SOLICITUDES  RECHAZADAS ID */
}
export const getSolicitudesRechazadasid = async (id) => {
  const response = await fetch(
    `http://tramo-server.ddns.net:3001/admin/solicitudesRechazadas/${id}`
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
    "http://tramo-server.ddns.net:3001/admin/datosConductoresHabilitados"
  );
  const data = response.json();
  return data;
};

{
  /* DATOS CONDUCTOR HABILITADOS ID */
}
export const getDatosConductorHabilitadosId = async (id) => {
  const response = await fetch(
    `http://tramo-server.ddns.net:3001/admin/datosConductoresHabilitados/${id}`
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
    "http://tramo-server.ddns.net:3001/admin/datosConductoresInhabilitados"
  );
  const data = response.json();
  return data;
};
{
  /* DATOS CONDUCTOR INHABILITAR */
}
export const putInhabilitarDatosConductor = (user) => {
  const url = `http://tramo-server.ddns.net:3001/admin/datosInhabilitarConductor/${user.idConductor}`;
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
  const url = `http://tramo-server.ddns.net:3001/admin/datosHabilitarConductor/${id}`;
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
    `http://tramo-server.ddns.net:3001/admin/datosConductoresInhabilitados/${id}`
  );
  const data = response.json();
  return data;
};

{
  /* DATOS CLINTE HABILITADOS */
}

export const getDatosClientesHabilitadosNatural = async () => {
  const response = await fetch(
    "http://tramo-server.ddns.net:3001/admin/datosClientesNaturalHB "
  );
  const data = response.json();
  return data;
};

{
  /* DATOS CLINTE INHABILITADOS */
}

export const getDatosClientesInhabilitadosNatural = async () => {
  const response = await fetch(
    " http://tramo-server.ddns.net:3001/admin/datosClientesNaturalIN "
  );
  const data = response.json();
  return data;
};

// export const putInhabilitarDatosConductor = (user) => {
//   console.log(user);
//   const url = `http://tramo-server.ddns.net:3001/admin/datosInhabilitarConductor/${user.idConductor}`;
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
