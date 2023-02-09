import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import ConductoresServicio from "./ConductoresServicio";
import ConductoresDisponibles from "./ConductoresDisponibles";
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
