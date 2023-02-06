function DatosCard({ lista }) {
  return (
    <>
      {lista.map((lista,index) => (
        <>
          <div className="col-sm-6" key={lista.id}>
            <div className="card" >
              <div className="card-body">
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <b>Empresa</b>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div>
                          <img
                            src={lista.image}
                            className="rounded-circle"
                            width="60px"
                            alt=""
                          />
                        </div>
                      </td>
                      <td>
                        {lista.name}
                        <br />
                        {lista.id}
                      </td>
                      <td>
                        <b>correo Electronico</b>
                        <br />
                        {lista.status}@gmail.com
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={2} className="text-center">
                        <b>Calificación</b>
                        <br />
                        <i className="bi bi-star me-1 fs-5"></i>
                        <i className="bi bi-star me-1 fs-5"></i>
                        <i className="bi bi-star me-1 fs-5"></i>
                        <i className="bi bi-star me-1 fs-5"></i>
                        <i className="bi bi-star me-1 fs-5"></i>
                      </td>
                      <td>
                        <b>Dirección</b>
                        <br />
                        {lista.species} 76-82 Popayan
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={4}>
                        <span className="d-flex justify-content-center gap-1">
                          <button
                            type="button"
                            className="btn btn-primary btn-sm mt-3"
                          >
                            Habilitar
                          </button>
                          <button
                            type="button"
                            className="btn btn-secondary btn-sm mr1 mt-3"
                            
                          >
                            Inhabilitar
                          </button>
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
      ))}
    </>
  );
}

export default DatosCard;
