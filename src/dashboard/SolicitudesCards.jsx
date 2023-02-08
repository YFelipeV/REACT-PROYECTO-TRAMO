import {Link ,useParams} from "react-router-dom";
import Modal from "./Modal";

function SolicitudesCards({ data }) {


  
  
 


  
  const updateData = (id) => {
    console.log(id)
    const user={
      idConductor:id
    }

   const url = (`http://10.185.80.151:3000/admin/aceptarSoli/${user.idConductor}`);
   const data2 = { idConductor: user.idConductor };
   
  
  
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
   if(data.length === 0){

    return <h5 className="text-center"> ❌ No hay solicitudes pendientes</h5>
  }
  

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
                  <button className="btn btn-primary mb-2 px-4" onClick={()=>updateData(lista.idConductor)}>Aceptar</button>
                  <button >
                  <Link
                    className="btn btn-secondary mb-2 px-3 "
                    data-bs-toggle="modal"
                    data-bs-target="#escribir-motivo-rechazo"
                   
                    to={`/admin/rechazarSolicitud/${lista.idConductor}`}
                   
                    
                  
                    
                  >
                    Rechazar
                  </Link>
                  </button>
                  
                </div>
              </div>
            </td>
          </tr>
          <tr></tr>
          <Modal identificacion={lista.idConductor}/>
        </>
      ))}
    </>
  );
}

export default SolicitudesCards;
