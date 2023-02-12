export const getConductoresDisponibles = async () => {
  const response = await fetch(
    "https://tramo-res-api-production.up.railway.app/admin/conductoresDis"
  );
  const data = response.json();
  return data;
};

export const getConductoresServicio = async () => {
  const response = await fetch(
    "https://tramo-res-api-production.up.railway.app/admin/conductoresEnServicio"
  );
  const data = response.json();
  return data;
};

export const getSolicitudesPendientes = async () => {
  const response = await fetch(
    "https://tramo-res-api-production.up.railway.app/admin/solicitudesPendiente"
  );
  const data = response.json();
  return data;
};

export const updateSolicitudesPendientes = async (id) => {
  const user = {
    idConductor: id,
  };
  const url = `https://tramo-res-api-production.up.railway.app/admin/aceptarSoli/${user.idConductor}`;
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

export const getSolicitudesRechazadas = async () => {
  const response = await fetch(
    "https://tramo-res-api-production.up.railway.app/admin/solicitudesRechazadas"
  );
  const data = response.json();
  return data;
};

export const getDatosConductorHabilitados = async () => {
  const response = await fetch(
    "https://tramo-res-api-production.up.railway.app/admin/datosConductoresHabilitados"
  );
  const data = response.json();
  return data;
};

export const getDatosConductoresIn = async () => {
  const response = await fetch(
    "https://tramo-res-api-production.up.railway.app/admin/datosConductoresInhabilitados"
  );
  const data = response.json();
  return data;
};

export const getDatos = async () => {
  const response = await fetch(
    "https://tramo-res-api-production.up.railway.app/admin/solicitudesPendiente/:id"
  );
  const data = response.json();
  return data;
};

export const updateData = (user) => {
  const url = `https://tramo-res-api-production.up.railway.app/admin/datosInhabilitarConductor/${user.idConductor}`;
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

export const putHabilitarDatosConductor = (id) => {
  const url = `https://tramo-res-api-production.up.railway.app/admin/datosHabilitarConductor/${id}`;
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

export const getSolicitudesRechazadasid = async (id) => {
  const response = await fetch(
    `https://tramo-res-api-production.up.railway.app/admin/solicitudesRechazadas/${id}`
  );
  const data = response.json();
  return data;
};

export const getDatosConductoresInhabilitadosId = async (id) => {
  const response = await fetch(
    `https://tramo-res-api-production.up.railway.app/admin/datosConductoresInhabilitados/${id}`
  );
  const data = response.json();
  return data;
};
export const getDatosConductoresInhabilitados = async () => {
  const response = await fetch("https://tramo-res-api-production.up.railway.app/admin/datosConductoresInhabilitados");
  const data = response.json();
  return data;
};

export const getDatosClientesHabilitados = async () => {
  const response = await fetch("https://tramo-res-api-production.up.railway.app/admin/datosClientesNaturalHB ");
  const data = response.json();
  return data;
};

export const getDatosClientesInhabilitados = async () => {
  const response = await fetch("https://tramo-res-api-production.up.railway.app/admin/datosClientesEmpresaIN ");
  const data = response.json();
  return data;
};
