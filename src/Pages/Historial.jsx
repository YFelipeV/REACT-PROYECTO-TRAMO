import Navbar from "../dashboard/Menus/Navbar";
import Sidebar from "../dashboard/Menus/Sidebar";
import "../../css/styleAdmin.css";

import { useEffect, useState } from "react";


import HistorialCard from "../dashboard/historial/HistorialCard";

function Historial() {
  const [listas, setLista] = useState([]);
  useEffect(() => {
    async function load() {
      let response = await getPost();
      setLista(response.results);
      console.log(response.results);
    }
    load();
  }, []);

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="main" id="main">
        <div className="contenedor_principal_hotorial">
          <div className="titulo4 text-white bg-primary pt-2 pb-2 mb-2 border-radius rounded">
            HISTORIAL DE VIAJES
          </div>
          <div className="contenedor_historial ">
            <HistorialCard lista={listas} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Historial;
