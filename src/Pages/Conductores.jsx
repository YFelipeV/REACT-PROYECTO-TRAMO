import Navbar from "../dashboard/Menus/Navbar";
import Sidebar from "../dashboard/Menus/Sidebar";

import ConductoresServicio from "../dashboard/Conductores/ConductoresServicio";
import ConductoresDisponibles from "../dashboard/Conductores/ConductoresDisponibles";
function Conductores() {
  return (
    <>
      <Navbar />
      <Sidebar />

      <main className="main" id="main">
        <ConductoresDisponibles />
        <ConductoresServicio />
      </main>
    </>
  );
}

export default Conductores;
