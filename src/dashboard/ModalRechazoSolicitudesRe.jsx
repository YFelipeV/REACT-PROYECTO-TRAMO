import { useConductores } from "../Context/Context";

function ModalRechazoSolicitudesRe() {
  const { SoliReMotivoRechazo } = useConductores();

  return (
    <>
      <>
        <div
          className="modal fade"
          id="motivo-rechazo"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="mas-datosLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="mas-datosLabel">
                  Motivo de rechazo{" "}
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                {/* {data.motivoRechazoCON} */}
                {SoliReMotivoRechazo.motivoRechazoCON}
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export default ModalRechazoSolicitudesRe;
