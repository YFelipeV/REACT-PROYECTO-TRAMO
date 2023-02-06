import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

import { useEffect, useState } from "react";
import "../css/styleAdmin.css";
import profile from "../assets/icons/profile.jpg";
import DatosCard from "./DatosCard";
function DatosCliente() {
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
      <main className="main" id="main">
      <div className="titulo3 text-white bg-primary pt-2 pb-2 mb-2 border-radius rounded">DATOS CLIENTES</div>
        <div className="row">
          <DatosCard lista={listas} />
        </div>
      </main>
    </>
  );
}

export default DatosCliente;
