import { useConductores } from "../Context/Context";

function DatosClienteHabilitadosCards() {
  const { DatosClienteHabilitados } = useConductores();
  

  return (
    <>
      <tbody>
        {DatosClienteHabilitados.map(
          ({
            idPerNatural,
            nombrePNA,
            apellidoPNA,
            nroTelefonoPNA,
            correoElectronicoPNA,
            DireccionPNA,
            calificacionPNA,
          }) => (
            <>
              <tr key={idPerNatural}>
                <td>
                  <p className="font-weight-bold text-xs font-weight-bold m-0 text-danger">
                    <b>Cliente Natural</b>
                  </p>

                  <div>
                    <img
                      src={`https://robohash.org/user${idPerNatural}`}
                      alt="Profile"
                      className="rounded-circle w-75"
                    />
                  </div>
                </td>
                <td className="text-center align-middle text-sm">
                  <p className="font-weight-bold text-xs font-weight-bold m-0">
                    <b>Nombre</b>
                  </p>
                  <p className="font-weight-bold text-xs font-weight-bold m-0">
                    {nombrePNA} {apellidoPNA}
                  </p>
                  <p className="font-weight-bold text-xs font-weight-bold m-0">
                    <b>N° Telefono</b>
                  </p>
                  <p className="font-weight-bold text-xs font-weight-bold m-0">
                    {nroTelefonoPNA}
                  </p>
                </td>
                <td className="text-center align-middle text-sm">
                  <p className="font-weight-bold text-xs font-weight-bold m-0">
                    <b>Correo</b>
                  </p>
                  <p className="font-weight-bold text-xs font-weight-bold m-0">
                    {correoElectronicoPNA}
                  </p>
                  <p className="font-weight-bold text-xs font-weight-bold m-0">
                    <b>Direccion</b>
                  </p>
                  <p className="font-weight-bold text-xs font-weight-bold m-0">
                    {DireccionPNA}
                  </p>
                </td>
                <td className="text-center align-middle">
                  <p className="font-weight-bold text-xs font-weight-bold m-0">
                    <b>Calificacion {calificacionPNA}</b>
                  </p>
                  <p className="font-weight-bold text-xs font-weight-bold m-0">
                    ⭐⭐⭐⭐⭐
                  </p>
                </td>
                <td>
                  <div className="text-center">
                    <div className="mt-5">
                      <button
                        className="btn btn-secondary mb-2"
                        data-bs-toggle="modal"
                        data-bs-target="#escribir-motivo-inhabilitacion"
                      >
                        Inhabilitar
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            </>
          )
        )}
      </tbody>
    </>
  );
}

export default DatosClienteHabilitadosCards;
