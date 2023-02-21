
import {useConductores} from "../../Context/Context"
function DatosClienteEmpresaHab() {
    const {DatosClientehabilitadosEmpresa}=useConductores()
 console.log(DatosClientehabilitadosEmpresa)
  return (
    <>
    {

        DatosClientehabilitadosEmpresa.map(({
            
            nombreEmpresa,
            nroTelefonoPJU,
            correoElectronicoPJU,
            DireccionEmpresa,
            calificacionPJU,
            NITempresa

        })=>(
            <tr>
            <td>
              <p className="font-weight-bold text-xs font-weight-bold m-0 text-danger">
                <b>Cliente Empresa</b>
              </p>

              <div>
                <img
                  src={`
                  https://robohash.org/user${1}`}
                  alt="Profile"
                  className="rounded-circle w-75"
                />
              </div>
            </td>
            <td className="text-center align-middle text-sm">
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                <b>Nombre Empresa</b>
              </p>
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                {nombreEmpresa} 
              </p>
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                <b>N° Telefono</b>
              </p>
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                {nroTelefonoPJU}
              </p>
            </td>
            <td className="text-center align-middle text-sm">
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                <b>Correo</b>
              </p>
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                {correoElectronicoPJU}
              </p>
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                <b>Direccion</b>
              </p>
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                {DireccionEmpresa}
              </p>
            </td>
            <td className="text-center align-middle">
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                <b>Calificacion {calificacionPJU}</b>
              </p>
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                ⭐⭐⭐⭐⭐
              </p>
              <p>
                nit 
                {NITempresa}
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

        ))
    }
    </>
  )
}

export default DatosClienteEmpresaHab