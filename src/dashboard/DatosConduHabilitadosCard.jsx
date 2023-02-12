import { useConductores } from "../Context/Context";
import ModalDatosConductor from "./ModalDatosConductor";

function DatosConduCard() {
  const { DatosSoliciHabilitados } = useConductores();

 
  return (
    <>
      {DatosSoliciHabilitados.map(
        ({
          idConductor,
          nombreCON,
          apellidoCON,
          nroTelefonoCON,
          nroDocumentoCON,
          correoElectronicoCON,
          DireccionResidenciaCON,
        }) => (
          <>
            <tr key={idConductor}>
              <td>
                <div>
                  <img
                    src={`https://robohash.org/user${idConductor}`}
                    className="rounded-circle w-75"
                    alt=""
                    
                  />
                </div>
              </td>
              <td className="text-center align-middle text-sm">
                <p className="font-weight-bold text-xs font-weight-bold m-0">
                  <b>Nombre</b>
                </p>
                <p className="font-weight-bold text-xs font-weight-bold m-0">
                  {nombreCON} {apellidoCON}
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
                  {DireccionResidenciaCON} 78N - Popayan Cauca
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
                  <div className="mt-2">
                    <div
                      className="btn btn-secondary mb-2 px-3 "
                      data-bs-toggle="modal"
                      data-bs-target="#escribir-motivo-inhabilitacion"
                    >
                      Inhabilitar
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <ModalDatosConductor identificacion={idConductor} />
          </>
        )
      )}
    </>
  );
}

export default DatosConduCard;
