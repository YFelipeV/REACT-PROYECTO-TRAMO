
import {useConductores} from '../../Context/Context'
function PqrsCards() {
  const{Pqrs}=useConductores()
  return (
    <>
      {Pqrs.map(({
        name,
        id,
        username,
        address,
        
      })=>(
        
          <div  key={id}className="PQR rounded mt-2">
          <div className="card-body">
            <table id="tablas-PQR" className="pt-2">
              <tbody>
                
                <tr >
                  <td>{name}</td>
                  <td>Calificación</td>
                </tr>
                <tr>
                  <td>{address.zipcode}</td>
                  <td>
                  {id>5?"⭐⭐⭐⭐⭐⭐":
                  id == 5
                  ? "⭐⭐⭐⭐⭐"
                  : id == 4
                  ? "⭐⭐⭐⭐"
                  : id == 3
                  ? "⭐⭐⭐"
                  : id == 2
                  ? "⭐⭐"
                  : id == 1
                  ? "⭐"
                  : "0"}
                  </td>
                </tr>
                <tr>
                  <td className="pt-3" colSpan={3}>
                    La aplicación funciona bien pero sería bueno agregarle{" "}
                    vivo...{username}
                  </td>
                </tr>
               
                <tr>
                  
                  <td
                    className="pt-3 text-center align-items-center"
                    colSpan={3}
                  >
                    <div
                      className="d-flex text-center justify-content-center btn btn-primary ms-5 me-5 mb-1"
                      data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                    >
                      <p className="m-0 p-0">Responder...</p>
                      <i className="bi bi-cursor  fs-6"></i>
                    </div>
                  </td>
                </tr>
              </tbody>
              
              
            </table>
            </div>
            
          </div>
          
          


      ))}
      
        </>
      
    
  );
}

export default PqrsCards;
