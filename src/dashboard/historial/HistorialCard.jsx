function HistorialCard({ lista }) {
  return (
    <>
      {lista.map((lista) => (
        <>
          <div className="historial rounded mb-3" key={lista.id}>
            <table id="tablas-historal">
              <tbody>
                <tr>
                  <td>
                    <table>
                      <tbody>
                        <tr>
                          <td>
                            <b>Conductor</b>
                          </td>
                        </tr>
                        <tr>
                          <td rowSpan={2}>
                            <img
                              src={lista.image}
                              className="rounded-circle"
                              width="60px"
                            />
                          </td>
                          <td>{lista.name}</td>
                        </tr>
                        <tr>
                          <td>{lista.id}227699910</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td>
                    <table>
                      <tbody>
                        <tr>
                          <td>
                            <b>Pasajero</b>
                          </td>
                        </tr>
                        <tr>
                          <td rowSpan={2}>
                            <img
                              src={lista.image}
                              className="rounded-circle"
                              width="60px"
                            />
                          </td>
                          <td>{lista.name}</td>
                        </tr>
                        <tr>
                          <td>{lista.id}227699910</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td>
                    <hr />
                    <b>Cantidad de carga</b>
                    <br />
                    {lista.id}Toneladas
                  </td>
                  <td>
                    <hr />
                    <b>Especificaciones de cargar</b>
                    <br />
                    {lista.status}
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>Valor</b>
                    <br></br>$ {lista.id}20.000
                    <hr />
                  </td>
                  <td>
                    <b>Calificación</b>
                    <br></br>
                    <i className="bi bi-star me-1 fs-6"></i>
                    <i className="bi bi-star me-1 fs-6"></i>
                    <i className="bi bi-star me-1 fs-6"></i>
                    <i className="bi bi-star me-1 fs-6"></i>
                    <i className="bi bi-star me-1 fs-6"></i>
                    <hr />
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <a href="manifiesto.html" target="_blank">
                      Ver manifiesto de viaje
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      ))}
    </>
  );
}

export default HistorialCard;
