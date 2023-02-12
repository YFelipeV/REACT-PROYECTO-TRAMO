import { createContext, useContext, useState } from "react";
import {
  getConductoresServicio,
  getConductoresDisponibles,
  getSolicitudesPendientes,
  getSolicitudesRechazadas,
  updateSolicitudesPendientes,
  getSolicitudesRechazadasid,
  getDatosConductorHabilitados,
  getDatosConductoresInhabilitados,
 getDatosConductoresInhabilitadosId,
 getDatosClientesHabilitados,
 getDatosClientesInhabilitados

} from "../api/api";

export const ServicesContext = createContext();

export const useConductores = () => {
  const context = useContext(ServicesContext);
  if (!context) {
    throw new Error("use task");
  }
  return context;
};
export const ServicesContextProvider = ({ children }) => {
  const [ConductorServicio, setConductorServicio] = useState([]);
  const [ConductorDisponible, setCondutorDisponible] = useState([]);
  const [SolicitudesPendientes, setSolicitudesPendientes] = useState([]);
  const [SolicitudesRechazadas, setSolicitudesRechazadas] = useState([]);
  const [SoliReMotivoRechazo, setSoliReMotivoRechazo] = useState([]);
  const [DatosSoliciHabilitados, setDatosSoliciHabilitados] = useState([]);
  const [DatosConductorInhabilitados, setDatosConductorInhabilitados] = useState([]);
  const [DatosConductorId, setDatosConductorId] = useState([])
  const [DatosClienteHabilitados, setDatosClienteHabilitados] = useState([])
  const [DatosClienteInhabilitados, setDatosClienteInhabilitados] = useState([])

  async function loadConductoresServicio() {
    let response = await getConductoresServicio();
    setConductorServicio(response);
    console.log(response);
  }
  async function loadConductoresDisponibles() {
    let response = await getConductoresDisponibles();
    setCondutorDisponible(response);
    console.log(response);
  }
  async function loadSolicitudesPendientes() {
    let response = await getSolicitudesPendientes();
    setSolicitudesPendientes(response);
    console.log(response);
  }

  async function loadSolicitudesRechazadas() {
    let response = await getSolicitudesRechazadas();
    setSolicitudesRechazadas(response);
    console.log(response);
  }

  async function Update() {
    let response = await updateSolicitudesPendientes();
    setSolicitudesPendientes(response);
    console.log(response);
  }

  async function loadSoliReMotivoRechazo(id) {
    let response = await getSolicitudesRechazadasid(id);
    setSoliReMotivoRechazo(response);
    console.table(response);
  }

  //datos conductores
  //habilitados
  async function loadDatosConductorHabilitado() {
    let response = await getDatosConductorHabilitados();
    setDatosSoliciHabilitados(response);
    console.log(response);
  }
  async function loadDatosConductorInhabilitados() {
    let response = await  getDatosConductoresInhabilitados();
    setDatosConductorInhabilitados(response);
    console.log(response);
  }

  async function  loadDatosConductorId (id) {
    let response = await getDatosConductoresInhabilitadosId(id);
    setDatosConductorId(response);
   console.log(response)
     } 

      {/*DATOS CLIENTE*/}

     async function loadDatosClientesHabilitados() {
      let response = await getDatosClientesHabilitados();
      setDatosClienteHabilitados(response);
      console.log(response);
    }

    async function loadDatosClientesinhabilitados() {
      let response = await getDatosClientesInhabilitados();
      setDatosClienteInhabilitados(response);
      console.log(response);
    }

  return (
    <ServicesContext.Provider
      value={{
        ConductorServicio,
        loadConductoresServicio,
        loadConductoresDisponibles,
        ConductorDisponible,
        SolicitudesPendientes,
        loadSolicitudesPendientes,
        SolicitudesRechazadas,
        loadSolicitudesRechazadas,
        SoliReMotivoRechazo,
        loadSoliReMotivoRechazo,
        DatosSoliciHabilitados,
        loadDatosConductorHabilitado,
        DatosConductorInhabilitados,
        loadDatosConductorInhabilitados,
        DatosConductorId,
        loadDatosConductorId,
        DatosClienteHabilitados,
        loadDatosClientesHabilitados,
        DatosClienteInhabilitados,
        loadDatosClientesinhabilitados
        



      }}
    >
      {children}
    </ServicesContext.Provider>
  );
};
