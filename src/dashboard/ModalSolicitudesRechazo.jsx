import { useNavigate } from "react-router-dom"

import {useState} from 'react';



 
function ModalSolicitudesRechazo({identificacion}) {



  
  
    const [datos, setData] = useState({});
    
     const user={
      motivoRechazoCON:datos,
      idConductor:identificacion

    }
      const updateData = () => {
        console.log(identificacion)
       const url = (`http://192.168.241.202:3000/admin/rechazarSolicitud/${user.idConductor}`);
       const data2 = { motivoRechazoCON: user.motivoRechazoCON };
       
      
      
      fetch(url, {
         method: 'PUT',
         body: JSON.stringify(data2),
         headers: {
          'Content-Type': 'application/json'
        }
       })
       .then(res => res.json())
       .then(data2 => {
         console.log(data2);
       })
       .catch(error => {
         console.log(error);
      });
       }
   
  

    
      
    
   
   
    
    const navigate = useNavigate()
    
        

  return (
      <>
      <div className="modal fade" id="escribir-motivo-rechazo" data-bs-backdrop="static" data-bs-keyboard="false" tabindex={-1}
    aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="staticBackdropLabel">Escriba el motivo del rechazo</h1>
                          <button onClick={() => {
                      navigate("/dashboard/solicitudes")
                     
                    }}
                             
          className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
                <textarea className="w-100" name="respuesta-pqrs" id="respuesta-pqrs" rows="10" onChange={(e)=> setData(e.target.value) } ></textarea>
        </div>
        <div className="modal-footer">
                          <button type="button" 
                          onClick={()=>{
                            Swal.fire({
                              title: "¿Seguro que desea Aceptar la solicitud?",
                              icon: "question",
                              showDenyButton: true,
                              denyButtonText: "No",
                              confirmButtonText: "Si",
                            }).then((response) => {
                              if (response.isConfirmed) {
                                Swal.fire({
                                  icon: "success",
                                  title:"Aceptado Correctamente",
                                });
                                button: updateData();
                              }
                            });
                            
                            
                            
                            
                            }}
                     className="btn btn-primary">Confirmar Rechazo y enviar motivo</button>
        </div>
      </div>
    </div>
  </div>
      
      
      </>
  )
}

export default ModalSolicitudesRechazo;