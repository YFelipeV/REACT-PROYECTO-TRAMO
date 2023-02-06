function ConductoresCards({ data }) {

  
 
    
  
  return (
    <>
      {data.map((lista,index) => (
        <>
        
          <tr key={lista.idConductor}>
            <td>
              <div className="d-flex justify-content-center">
                <img
                  src={`https://robohash.org/user${index}`}
                  className="rounded-circle"
                  width="80%"
                ></img>
              </div>
            </td>
            <td className="text-center align-middle text-sm">
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                {lista.nombreCON}
              </p>
            </td>
            <td className="text-center align-middle text-sm">
              <span className="font-weight-bold text-xs font-weight-bold">
                {lista.nroTelefonoCON}
              </span>
            </td>
            <td className="text-center align-middle text-sm">
            
               
                  
                 
                    {/*  <i className="bi bi-star me-1 fs-5 bg-warning">⭐</i>*/}
                  {lista.calificacionCON == 5 ? "⭐⭐⭐⭐⭐": lista.calificacionCON == 4 ? "⭐⭐⭐⭐":lista.calificacionCON == 3 ? "⭐⭐⭐":lista.calificacionCON == 2 ?"⭐⭐":lista.calificacionCON == 1 ?"⭐":"0"}
                  
                 
              
            </td>

            <td className="text-center align-middle">
              <span className={lista.disponibilidadCON == 1  ? "badge badge-sm bg-success" :"badge badge-sm bg-primary" }>
                {lista.disponibilidadCON == 1 ? "Disponible":" En Servicio"}
              </span>
            </td>
          </tr>
          
        </>
      ))}
    </>
  );
}

export default ConductoresCards;
