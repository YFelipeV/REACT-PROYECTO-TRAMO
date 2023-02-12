import { updateSolicitudesPendientes } from "../api/api";
import ModalSolicitudesRechazo from "./ModalSolicitudesRechazo";

function SolicitudesCards({ data }) {
  if (data.length === 0) {
    return <h5 className="text-center"> ❌ No hay solicitudes pendientes</h5>;
  }

  return (
    <>
      {data.map(
        ({
          idConductor,
          nombreCON,
          nroTelefonoCON,
          nroDocumentoCON,
          correoElectronicoCON,
          DireccionResidenciaCON
          
        }) => (
          <>
            <tr key={idConductor}>
              <td>
                <div className="d-flex justify-content-center aling-items-center">
                  <img
                    src={`https://robohash.org/user${idConductor}`}
                    alt=""
                    className="rounded-circle w-75"
                    
                  ></img>
                </div>
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
                      className="btn btn-primary mb-2 px-4 border-0"
                      onClick={() => updateSolicitudesPendientes(idConductor)}
                    >
                      Aceptar
                    </button>
                    <button className="border-0">
                      <a
                        className="btn btn-secondary  px-3  "
                        data-bs-toggle="modal"
                        data-bs-target="#escribir-motivo-rechazo"
                      >
                        Rechazar
                      </a>
                    </button>
                  </div>
                </div>
              </td>
            </tr>
            <tr></tr>
            <ModalSolicitudesRechazo identificacion={idConductor} />
          </>
        )
      )}
    </>
  );
}

export default SolicitudesCards;
