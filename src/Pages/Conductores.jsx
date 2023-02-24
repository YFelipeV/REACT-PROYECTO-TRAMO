

import ConductoresServicio from "../dashboard/Conductores/ConductoresServicio";
import ConductoresDisponibles from "../dashboard/Conductores/ConductoresDisponibles";
function Conductores() {
  return (
    <>
      

      <main className="main" id="main">
        <ConductoresDisponibles />
        <ConductoresServicio />
      </main>
    </>
  );
}

export default Conductores;
