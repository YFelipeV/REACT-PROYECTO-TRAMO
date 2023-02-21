import { useNavigate } from "react-router-dom";
import { useConductores } from "../../Context/Context";
import { putSolicitudesRechazar } from "../../api/api";

import { useState } from "react";
import Swal from "sweetalert2";

function ModalSolicitudesRechazo() {
  const { SolicitudesPendientesId } = useConductores();
  const [datos, setData] = useState({});

  const user = {
    motivoRechazoCON: datos,
    idConductor: SolicitudesPendientesId.idConductor,
  };
  const navigate = useNavigate();

  return (
    <>
      <tr>
        <td>
          <div
            className="modal fade"
            id="escribir-motivo-rechazo"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex={-1}
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="staticBackdropLabel">
                    Escriba el motivo del rechazo
                  </h1>
                  <button
                    onClick={() => {
                      navigate("/dashboard/solicitudes");
                    }}
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <textarea
                    className="w-100"
                    name="respuesta-pqrs"
                    id="respuesta-pqrs"
                    rows="10"
                    onChange={(e) => setData(e.target.value)}
                  ></textarea>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    onClick={() => {
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
                            title: "Aceptado Correctamente",
                          });
                          button: putSolicitudesRechazar(user);
                        }
                      });
                    }}
                    className="btn btn-primary"
                  >
                    Confirmar Rechazo y enviar motivo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </td>
      </tr>
    </>
  );
}

export default ModalSolicitudesRechazo;
