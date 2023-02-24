
import DatosClienteHabilitados from "../dashboard/datosCliente/DatosClienteHabilitados";
import DatosClienteInhabilitados from "../dashboard/datosCliente/DatosClienteInhabilitados";
import {useNavigate} from 'react-router-dom'
function DatosCliente() {
  const navigate=useNavigate()

  return (
    <>
      
      <main className="main" id="main">
         <div className="d-flex justify-content-center">
          <button className="btn btn-success mx-2" type="submit"
          
          onClick={()=>{
            navigate("/dashboard/datoscliente")
          }}>
            Ver Cliente Natural
          </button>
          <button className="btn btn-success mx-2" type="submit"
          onClick={()=>{
            navigate("/dashboard/datosclienteEmpresa")
          }}>
            Ver Cliente Empresa
          </button>
        </div> 

        <DatosClienteHabilitados />
        <DatosClienteInhabilitados/>
      </main>
    </>
  );
}

export default DatosCliente;
