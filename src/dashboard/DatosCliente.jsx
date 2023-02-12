import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import DatosClienteHabilitados from "./DatosClienteHabilitados";
import DatosClienteInhabilitados from "./DatosClienteInhabilitados";
function DatosCliente() {
  

  return (
    <>
      <Navbar />
      <Sidebar />
      <main className="main" id="main">
        <div className="d-flex justify-content-center">
          <button className="btn btn-success mx-2" type="submit">
            Ver Cliente Natural
          </button>
          <button className="btn btn-success mx-2" type="submit">
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
