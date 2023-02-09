import { getDatosConductoresInhabilitados ,putHabilitarDatosConductor} from "../api/api";
import {useState} from 'react';

import Swal from "sweetalert2";
import ModalRechazoSolicitudesRe from "./ModalRechazoSolicitudesRe";

function DatosConInCards({ data }) {

 

   const [datos, setListas] = useState([])
   
         async function  load (id) {
        let response = await getDatosConductoresInhabilitados(id);
       setListas(response);
       console.log(response)
         }  
        
  return (
    <>
      {data.map((lista, index) => (
        <>
          <tr key={index}>
            <td>
              <div>
                <img
                  src={`https://robohash.org/user${index}`}
                  className="rounded-circle"
                  alt=""
                  width="50%"
                />
              </div>
            </td>
            <td className="text-center align-middle text-sm">
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                <b>Nombre</b>
              </p>
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                {lista.nombreCON} {lista.apellidoCON}
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
                {lista.DireccionResidenciaCON} 78N - Popayan Cauca
              </p>
            </td>
            <td>
              <div className="text-center" style={{ marginTop: "10%" }}>
                <a
                  href=""
                  className="m-0 p-0 text-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  Mostrar mas datos
                </a>
                <br />
                <button
                 
                  className="m-0 p-0 text-danger"
                  data-bs-toggle="modal"
                  data-bs-target="#motivo-rechazo"
                    onClick={()=> load(lista.idConductor)}
                >
                  Ver motivo inhabilitacion
                </button>
                <div className="mt-2">
                  <button className="btn btn-primary mb-2"
                    onClick={() => {
                      Swal.fire({
                        title: "¿Seguro que desea habilitar el Conductor?",
                        icon: "question",
                        html: `<p>${lista.nombreCON} ${lista.apellidoCON}</p>`,
                        showDenyButton: true,
                        denyButtonText: "No",
                        confirmButtonText: "Si",
                      }).then((response) => {
                        if (response.isConfirmed) {
                          Swal.fire({
                            icon: "success",
                            title:"Habilitado Correctamente",
                          });
                          button: putHabilitarDatosConductor(lista.idConductor);
                        }
                      });
                    }}
                  >
                    
                      
                     
                    
                      Habilitar
                      
                    
                  </button>
                </div>
              </div>
            </td>
          </tr>
          <ModalRechazoSolicitudesRe identificacion={datos} />
        </>
      ))}
    </>
  );
}

export default DatosConInCards;
