import Navbar from "../dashboard/Menus/Navbar";
import Sidebar from "../dashboard/Menus/Sidebar";
import SolicitudesPendientes from "../dashboard/Solicitudes/SolicitudesPendientes";

import SolicitudesRechazadas from "../dashboard/Solicitudes/SolicitudesRechazadas";

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
