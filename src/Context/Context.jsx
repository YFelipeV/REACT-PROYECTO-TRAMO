import { createContext, useContext, useState } from "react";
import {
  getConductoresServicio,
  getConductoresDisponibles,
  getSolicitudesPendientes,
  getSolicitudesRechazadas,
  getSolicitudesPendientesid,
  updateSolicitudesPendientes,
  getSolicitudesRechazadasid,
  getDatosConductorHabilitados,
  getDatosConductoresInhabilitados,
  getDatosConductoresInhabilitadosId,
  getDatosClientesHabilitadosNatural,
  getDatosClientesInhabilitadosNatural,
  getDatosConductorHabilitadosId,
  getDatosClienteNaturalInhabilitadoId,
  getDatosClientesHabilitadosEmpresa,

  getDatosClientesinhabilitadoEmpresa,
  getDatosClientesinhabilitadoEmpresaId,
  getHistorial,
  getPqrs

  

  
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
  const [SolicitudesPendientesId, setSolicitudesPendientesId] = useState([]);
  const [SolicitudesRechazadas, setSolicitudesRechazadas] = useState([]);
  const [SoliReMotivoRechazo, setSoliReMotivoRechazo] = useState([]);
  const [DatosConductorHabilitados, setDatosConductorHabilitados] = useState([]);
  const [DatosConductorHabilitadoId, setDatosConductorHabilitadoId] = useState([]);
  const [DatosConductorInhabilitados, setDatosConductorInhabilitados] = useState([]);
  const [DatosConductorId, setDatosConductorId] = useState([]);
  const [DatosClienteHabilitados, setDatosClienteHabilitados] = useState([]);
  const [DatosClienteInhabilitados, setDatosClienteInhabilitados] = useState([]);
  const [DatosClientehabilitadosEmpresa, setDatosClientehabilitadosEmpresa] = useState([]);
  const [id, setid] = useState([]);
  const [DatosCLienteNaturalId, setDatosCLienteNaturalId] = useState([]);
  const [DatosclienteInhabilitadosEmpresa,setDatosclienteInhabilitadosEmpresa]=useState([])
  const [DatosClienteEmpresaId, setDatosCLienteEmpresaId] = useState([]);
 
  const [openMenu,setOpenSidebar]=useState(false)
  const [Historial,setHistorial]=useState([])
  const [Pqrs,setPqrs]=useState([])
  

  
 
   function openSidebar(){
    setOpenSidebar(true)
   if(openMenu== true){
    document.querySelector("body").classList.toggle("toggle-sidebar");
   }
  }
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
    setDatosConductorHabilitados(response);
    console.log(response);
  }

  async function loadDatosConductorHabilitadosId(id) {
    let response = await getDatosConductorHabilitadosId(id);
    setDatosConductorHabilitadoId(response);
    console.log(response);
  }

  async function loadDatosConductorInhabilitados() {
    let response = await getDatosConductoresInhabilitados();
    setDatosConductorInhabilitados(response);
    console.log(response);
  }

  async function loadDatosConductorId(id) {
    let response = await getDatosConductoresInhabilitadosId(id);
    setDatosConductorId(response);
    console.log(response);
  }

  async function loading(id) {
    let response = await getSolicitudesPendientesid(id);
    setSolicitudesPendientesId(response);
    console.log(response);
  }
  // function updateDatosConductorInhabilitado(user) {
  // let response = putInhabilitarDatosConductor(user);

  {
    /*DATOS CLIENTE*/
  }

  async function loadDatosClientesHabilitados() {
    let response = await getDatosClientesHabilitadosNatural();
    setDatosClienteHabilitados(response);
    console.log(response);
  }

  async function loadDatosClientesinhabilitados() {
    let response = await getDatosClientesInhabilitadosNatural();
    setDatosClienteInhabilitados(response);
    console.log(response);
  }
  
  async function loadDatosClienteNaturalId(id) {
    let response = await getDatosClienteNaturalInhabilitadoId(id);
    setDatosCLienteNaturalId(response);
    console.table(response);
  }

  async function loadDatosClientesEmpresaHabilitados() {
    let response = await getDatosClientesHabilitadosEmpresa();
    setDatosClientehabilitadosEmpresa(response);
    console.log(response);
  }

  async function loadDatosClientesEmpresaInhabilitados(){
    let response=await getDatosClientesinhabilitadoEmpresa()
    setDatosclienteInhabilitadosEmpresa(response)
  }
  async function loadDatosClienteEmpresalId(id) {
    let response = await getDatosClientesinhabilitadoEmpresaId(id);
    setDatosCLienteEmpresaId(response);
    console.table(response);
  }

  function idPersonal(id){
    setid(id)
    console.log(id)
    return id
  }
  {/* HISTORIAL */}
  async function loadHistorial(){
    const response=await getHistorial()
    setHistorial(response)
    console.log(response)
  }
  {/* PQRS */}
  async function loadPqrs(){
    const response=await getPqrs()
    setPqrs(response)
    console.log(response)
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
        DatosConductorHabilitados,
        loadDatosConductorHabilitado,
        DatosConductorInhabilitados,
        loadDatosConductorInhabilitados,
        DatosConductorId,
        loadDatosConductorId,
        DatosClienteHabilitados,
        loadDatosClientesHabilitados,
        DatosClienteInhabilitados,
        loadDatosClientesinhabilitados,
        SolicitudesPendientesId,
        loading,
        loadDatosConductorHabilitadosId,
        DatosConductorHabilitadoId,
        loadDatosClientesEmpresaHabilitados,
        DatosClientehabilitadosEmpresa,
        idPersonal,
        id,
        loadDatosClienteNaturalId,
        DatosCLienteNaturalId,
        openSidebar,
        loadHistorial,
        Historial,
        loadPqrs,
        Pqrs,
        loadDatosClientesEmpresaInhabilitados,
        DatosclienteInhabilitadosEmpresa,

        DatosClienteEmpresaId,loadDatosClienteEmpresalId


      }}
    >
      {children}
    </ServicesContext.Provider>
  );
};
