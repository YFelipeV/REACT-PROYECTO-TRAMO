
import SolicitudesRechazadas from '../dashboard/Solicitudes/SolicitudesRechazadas'
import SolicitudesPendientes from "../dashboard/Solicitudes/SolicitudesPendientes";



function Solicitudes() {
  
  return (
    <>
      
      
      <main id="main" className="main">
        <SolicitudesPendientes />
       <SolicitudesRechazadas />
      </main>
    </>
  );
}

export default Solicitudes;
