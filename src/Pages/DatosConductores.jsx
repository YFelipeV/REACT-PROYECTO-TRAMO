import Navbar from "../dashboard/Menus/Navbar";
import Sidebar from "../dashboard/Menus/Sidebar";

import DatosConduInhabili from "../dashboard/datosConductor/DatosConduInhabili";
import DatosConduHabilitados from "../dashboard/datosConductor/DatosConduHabilitados";

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
