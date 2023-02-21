import React from "react";

import MySidebarLink from "./MySidebarLink";

function Sidebar() {
    
  return (
    <>
    
      <aside id="sidebar" className="sidebar">
      
        <ul className="sidebar-nav" id="sidebar-nav">
          <MySidebarLink
            goingTo={"/dashboard/conductores"}
            children={"conductores"}
          />
          <MySidebarLink
            goingTo={"/dashboard/solicitudes"}
            children={"Solicitudes"}
          />
          <MySidebarLink
            goingTo={"/dashboard/datosconductores"}
            children={"Datos Conductores"}
          />
          <MySidebarLink
            goingTo={"/dashboard/datoscliente"}
            children={"Datos cliente"}
          />
          <MySidebarLink
            goingTo={"/dashboard/historial"}
            children={"Historial"}
          />
          <MySidebarLink
           goingTo={"/dashboard/pqrs"} 
           children={"P.Q.R.S"} 
          />
        </ul>

        <span >
         
       <div className="cerrar">
    <i class="bi bi-arrow-bar-left  fs-2 dark"></i>
    
    <div className="dark font" style={{marginBottom:"10px", fontSize:"19px",marginLeft:"20px ",fontWeight:"600" }}>Cerrar sesion</div>
    </div>
    
    </span>
    
        
      </aside>
    
    </>
  );
}

export default Sidebar;
