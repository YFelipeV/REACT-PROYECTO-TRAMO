import { Navigate } from "react-router-dom";
import { useConductores } from "../../Context/Context";
import ModalSoliMotivo from "../Modales/ModalSoliMotivo";

function SolicitudesRechCard() {
  const { loadSoliReMotivoRechazo, SolicitudesRechazadas } = useConductores();
  
  

  return (
    <>
      {
      SolicitudesRechazadas.login ===false ? 
      (
       <Navigate to={"/pagina404"}/>
      ):
      ( 
    
      SolicitudesRechazadas.map(
        ({
          idConductor,
          nombreCON,
          nroTelefonoCON,
          nroDocumentoCON,
          correoElectronicoCON,
          DireccionResidenciaCON,
          fotoperfilCON
        }) => (
          <tr key={idConductor}>
            <td>
              <span className="d-flex justify-content-center">
                <img
                  src={fotoperfilCON}
                  alt=""
                  className="rounded-circle"
                  width={"50%"}
                ></img>
              </span>
            </td>
            <td className="text-center align-middle text-sm">
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                <b>Nombre</b>
              </p>
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                {nombreCON}
              </p>
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                <b>N° Telefono</b>
              </p>
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                {nroTelefonoCON}
              </p>
            </td>
            <td className="text-center align-middle text-sm">
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                <b>Cedula</b>
              </p>
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                {nroDocumentoCON}
              </p>
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                <b>Correo</b>
              </p>
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                {correoElectronicoCON}
              </p>
            </td>
            <td className="text-center align-middle">
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                <b>Direccion de residencia</b>
              </p>
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                {DireccionResidenciaCON}
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
                    className="m-0 p-0 text-danger border-0"
                    data-bs-toggle="modal"
                    data-bs-target="#motivo-rechazo"
                    onClick={() => loadSoliReMotivoRechazo(idConductor)}
                  >
                    Motivo de rechazo
                  </button>
                </div>
              </div>
            </td>
          </tr>
        )
      ))}
      <ModalSoliMotivo />
    </>
  );
}

export default SolicitudesRechCard;
