

import DatosConduInhabili from "../dashboard/datosConductor/DatosConduInhabili";
import DatosConduHabilitados from "../dashboard/datosConductor/DatosConduHabilitados";

function DatosConductores() {
  return (
    <>
      <main className="main" id="main">
        
        <DatosConduHabilitados />

        {/* {tabla dos} */}
        <DatosConduInhabili />
      </main>
    </>
  );
}

export default DatosConductores;
