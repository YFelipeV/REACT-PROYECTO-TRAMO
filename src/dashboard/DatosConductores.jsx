import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useEffect } from "react";
import DatosConduInhabili from "./DatosConduInhabili";
import DatosConduHabilitados from "./DatosConduHabilitados";

function DatosConductores() {
  return (
    <>
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <main className="main" id="main">
        <DatosConduHabilitados />

        {/* {tabla dos} */}
        <DatosConduInhabili />
      </main>
    </>
  );
}

export default DatosConductores;
