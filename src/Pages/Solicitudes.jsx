import Navbar from "../dashboard/Menus/Navbar";
import Sidebar from "../dashboard/Menus/Sidebar";
import SolicitudesRechazadas from '../dashboard/Solicitudes/SolicitudesRechazadas'
import SolicitudesPendientes from "../dashboard/Solicitudes/SolicitudesPendientes";



function Solicitudes() {
  
  return (
    <>
      <Navbar />
      
      <main id="main" className="main">
        <SolicitudesPendientes />
       <SolicitudesRechazadas />
      </main>
    </>
  );
}

export default Solicitudes;
