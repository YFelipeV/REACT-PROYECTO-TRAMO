import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import "../css/styleAdmin.css";

import { useEffect, useState } from "react";
import PqrsCards from "./PqrsCards";


function Pqrs() {
  // const [listas, setLista] = useState([]);
  // useEffect(() => {
  //   async function load() {
  //     let response = await getPost();
  //     setLista(response.results);
  //     console.log(response.results);
  //   }
  //   load();
  // }, []);
  return (
    <>
      <Navbar />
      <Sidebar />
      <main id="main" className="main">
        <div className="contenedor_principal_PQR">
          <div className="titulo5 text-white bg-primary pt-2 pb-2 mb-2 border-radius rounded">
            P - Q - R - S
          </div>
          <div className="contenedor_PQR">
            <PqrsCards data={listas} />
            
          </div>
        </div>
        
      </main>
    </>
  );
}

export default Pqrs;
