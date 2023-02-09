import { useConductores } from "../Context/Context";
import ModalDatosConductor from "./ModalDatosConductor";

function DatosConduCard() {
  const { DatosSoliciHabilitados } = useConductores();
  console.log(DatosSoliciHabilitados);
  return (
    <>
      {DatosSoliciHabilitados.map((lista, index) => (
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
          <ModalDatosConductor identificacion={lista.idConductor} />
        </>
      ))}
    </>
  );
}

export default DatosConduCard;
