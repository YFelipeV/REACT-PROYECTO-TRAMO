import { getConductoresDisponibles,getConductoresServicio } from "../api/api";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "../css/styleAdmin.css";
import Sidebar from "./Sidebar";
import ConductoresCards from "./ConductoresCards";
import ConductoresHead from "./ConductoresHead";

function Conductores() {
  const head = {
    titulo: "Conductores Disponibles",
    todo: ["perfil", "nombre", "telefono", "calificacion", "estado"],
    clas: "bg-success shadow-primary border-radius-lg pt-4 pb-3",
  };
  
  const head2 = { ...head };
  head2.clas = "bg-primary shadow-primary border-radius-lg pt-4 pb-3";
  head2.titulo = "Conductores Servicio";

  const [servicio, setServicio] = useState([]);
  const [disponible, setdisponible] = useState([]);
  useEffect(() => {
    async function load() {
      let response = await getConductoresServicio();
      setServicio(response);
      console.log(response);
    }
    async function load2() {
      let response = await getConductoresDisponibles();
      setdisponible(response);
      console.log(response);
    }

    load();
    load2();
  }, []);

  return (
    <>
      <Navbar />
      <Sidebar />

      <main className="main" id="main">
        <div className="row">
          <div className="col-12">
            <div className="card my-4">
              <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                <div className={head.clas}>
                  <h4 className="text-light ps-3">{head.titulo}</h4>
                </div>
              </div>
              <div className="card-body px-0 pb-2">
                <div className="table-responsive p-0">
                  <table className="table align-items-center mb-0">
                    <ConductoresHead head={head} />
                    <tbody>
                      <ConductoresCards data={disponible} />
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div class="card-body px-0 pb-2">
              <div className="card my-4">
                <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                  <div className={head2.clas}>
                    <h4 className="text-light ps-3">{head2.titulo}</h4>
                  </div>
                </div>
                <div className="card-body px-0 pb-2">
                  <div className="table-responsive p-0">
                    <table className="table align-items-center mb-0">
                      <ConductoresHead head={head2} />
                      <tbody>
                        <ConductoresCards data={servicio} />
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Conductores;
