import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import SolicitudesPendientes from "./SolicitudesPendientes";

import SolicitudesRechazadas from "./SolicitudesRechazadas";

function Solicitudes() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <main id="main" className="main">
        <SolicitudesPendientes />

        <SolicitudesRechazadas />
      </main>
    </>
  );
}

export default Solicitudes;
