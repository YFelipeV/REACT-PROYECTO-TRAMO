import ModalRechazoSolicitudesRe from "./ModalRechazoSolicitudesRe"
 import {getSolicitudesRechazadasid} from "../api/api"
import {useState} from "react"

 


function SolicitudesRechCard({ data }) {
  const motivo = {
    motivo: "motivoRechazoCON"
  }

   const [datos, setListas] = useState([])
   
         async function  load (id) {
        let response = await getSolicitudesRechazadasid(id);
       setListas(response);
        console.table(response);
         } 
        load()
    
    

  return (
    <>
    {data.map((lista, index) => (
        <>
          <tr key={index}>
            <td >
              <div className="d-flex justify-content-center">
                <img src={`https://robohash.org/user${index}`} alt="" className="rounded-circle" width="80%"></img>
              </div>
            </td>
            <td className="text-center align-middle text-sm">
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                <b>Nombre</b>
              </p>
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                {lista.nombreCON}
              </p>
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                <b>N° Telefono</b>
              </p>
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                {lista.nroTelefonoCON}
              </p>
            </td>
            <td className="text-center align-middle text-sm">
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                <b>Cedula</b>
              </p>
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                {lista.nroDocumentoCON}
              </p>
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                <b>Correo</b>
              </p>
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                {lista.correoElectronicoCON}
              </p>
            </td>
            <td className="text-center align-middle">
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                <b>Direccion de residencia</b>
              </p>
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                {lista.DireccionResidenciaCON}
              </p>
            </td>
            <td>
              <div className="text-center" style={{ marginTop: "10%" }}>
                <a
                  href=""
                  className="m-0 p-0 text-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#mas-datos"
                >
                  Mostrar mas datos
                </a>
                <div className="mt-2">
                <button
               
                  
                  className="m-0 p-0 text-danger"
                  data-bs-toggle="modal"
                  data-bs-target="#motivo-rechazo"
                  onClick={()=> load(lista.idConductor)}
                >
                  
                 Motivo de rechazo
                </button>
                </div>
              </div>
            </td>
          </tr>
        <tr></tr>
        <ModalRechazoSolicitudesRe identificacion={datos} motivo={motivo} />
        </>
      ))}
    
    
    </>
  )
}

export default SolicitudesRechCard