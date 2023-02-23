import Navbar from "../dashboard/Menus/Navbar";
import Sidebar from "../dashboard/Menus/Sidebar";
import {useConductores} from '../Context/Context'
// import { useEffect, useState } from "react";
import PqrsCards from "../dashboard/Pqrs/PqrsCards";
import { useEffect } from "react"; 
import Historial from "../dashboard/historial/Historial";


function Pqrs() {
  const{loadPqrs}=useConductores()
  useEffect(() => {
    loadPqrs()
   }, []);
  return (
    <>
      <Navbar />
      <Sidebar />
      <main id="main" className="main">
        <div className="contenedor_principal_PQR">
          {/* <div className="titulo5 text-white bg-primary p-4 border-radius rounded">
           <h4 className="text-start font">P - Q - R - S</h4> 
          </div> */}
          <div className="card my-4">
          <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
            <div className="bg-primary shadow-primary border-radius-lg pt-4 pb-3">
              <h4 className="text-light ps-3 ">
                P-Q-R-S
              </h4>
            </div>
          </div>
          <div className="card-body px-0 pb-2">
            <div className="table-responsive p-0"></div>
          <div className="contenedor_PQR">
            <PqrsCards  />
            
          </div>
        </div>
        </div>
        </div>
        {/* tabla 2 */}
        <div className="card my-4">
          <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
            <div className="bg-primary shadow-primary border-radius-lg pt-4 pb-3">
              <h4 className="text-light ps-3 ">
                P-Q-R-S
              </h4>
            </div>
          </div>
          <div className="card-body px-0 pb-2">
            <div className="table-responsive p-0">
              <table className="table align-items-center mb-0">
                <thead>
                  <tr className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                    <th>NOMBRE</th>
                    <th>CALIFICACION</th>
                    <th>N.CELULAR </th>
                    <th>RESPONDER </th>
                    
                  </tr>
                </thead>
                <tbody className="text-center">
                 <Historial/>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Pqrs;
