import { useEffect } from "react";
import ConductoresCards from "./ConductoresCards";
import ConductoresHead from "./ConductoresHead";
import { useConductores } from "../../Context/Context";

function ConductoresServicio() {
  const { ConductorServicio, loadConductoresServicio } = useConductores();

  const subTitulos = ["perfil", "nombre", "telefono", "calificacion", "estado"];

  useEffect(() => {
    loadConductoresServicio();
  }, []);
  
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="card-body px-0 pb-2">
            <div className="card my-4">
              <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                <div className="bg-primary shadow-primary border-radius-lg pt-4 pb-3">
                  <h4 className="text-light ps-3">Conductores en Servicio</h4>
                </div>
              </div>
              <div className="card-body px-0 pb-2">
                <div className="table-responsive p-0">
                  <table className="table align-items-center mb-0">
                    <thead>
                      <tr>
                        <ConductoresHead subTitulos={subTitulos} />
                      </tr>
                    </thead>
                    <tbody>
                      <ConductoresCards data={ConductorServicio} />
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ConductoresServicio;
