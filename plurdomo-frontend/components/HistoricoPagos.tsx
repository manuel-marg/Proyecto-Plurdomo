import React, { ReactNode } from 'react'

const HistoricoPagos = ({ pagos }) => (
    <div>
        <div className="container-xl">
            <div>
                <div className="table-wrapper">
                    <div className="table-title">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1">
                                            <i className="fas fa-search"></i>
                                        </span>
                                    </div>
                                    <input type="text" id="myInput" onKeyUp={Buscar} className="form-control" placeholder="Buscar por concepto..." />
                                </div>
                            </div>
                            <div className="col-sm-6 text-right vertical-center">
                            <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1">
                                            <i className="fas fa-calendar"></i>
                                        </span>
                                    </div>
                                    <input type="text" id="myInputFecha" onKeyUp={BuscarFecha} className="form-control" placeholder="Buscar por fecha (1-12-2021)..." />
                                </div>
                            </div>
                        </div>
                    </div>
                    <table className="table table-striped table-hover table-sm" id="myTable">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Monto</th>
                                <th>Fecha</th>
                                <th>Estado</th>
                                <th className="text-center">Desaprobar</th>
                            </tr>
                        </thead>
                        <tbody>
                        {pagos && pagos.map(pago =>
                            <tr key={pago.id}>
                                    <td>{pago.id}</td>
                                    <td>{pago.monto}</td>
                                    <td>{pago.dia}-{pago.mes}-{pago.anio}</td>
                                    <td>Confirmado</td>
                                    <td className="text-center">
                                <a href={"#delete" + pago.id} className="text-danger" data-toggle="modal"><i className="fas fa-minus-circle"></i></a>
                            </td>
                            </tr>
                                                        )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        {pagos && pagos.map(pago =>
    <div key={pago.id} id={"delete" + pago.id} className="modal fade">
        <div className="modal-dialog">
            <div className="modal-content">
                <form>
                    <div className="modal-header">
                        <h4 className="modal-title">Alerta de confirmación</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                    </div>
                    <div className="modal-body">
                        <p className="text-center">¿Estas seguro que desea confirmar este pago?</p>
                        <p className="text-center"><small>Id:{pago.id}</small></p>
                        <p className="text-center"><small>Monto:{pago.monto}</small></p>
                    </div>
                    <div className="modal-footer">
                    <input type="button" className="btn btn-default" data-dismiss="modal" defaultValue="Cancel" />
                        <input type="button" onClick={(e) => Uncheckear( pago.id )} data-dismiss="modal" className="btn btn-primary" value="Confirmar" />
                    </div>
                </form>
            </div>
        </div>
    </div>
)}    
    </div>
    
    )
    
    function Buscar() { // Esta funcion funciona como una especie de filtro en la tabla y simulamos una busqueda por nombre
      // Declare variables
      var input, filter, table, tr, td, i, txtValue;
      input = document.getElementById("myInput");
      filter = input.value.toUpperCase();
      table = document.getElementById("myTable");
      tr = table.getElementsByTagName("tr");
    
      // Loop through all table rows, and hide those who don't match the search query
      for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[3]; // Establecemos que columna buscara y inicia en 0
        if (td) {
          txtValue = td.textContent || td.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
    }
    
    function BuscarFecha() { // Esta funcion funciona como una especie de filtro en la tabla y simulamos una busqueda por nombre
        // Declare variables
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("myInputFecha");
        filter = input.value.toUpperCase();
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");
      
        // Loop through all table rows, and hide those who don't match the search query
        for (i = 0; i < tr.length; i++) {
          td = tr[i].getElementsByTagName("td")[2]; // Establecemos que columna buscara y inicia en 0
          if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
            } else {
              tr[i].style.display = "none";
            }
          }
        }
      }
      function Uncheckear(id){
        fetch('http://localhost:4000/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: `
        mutation{
            uncheckPago(id:${id}){
                id
                monto
                dia
                mes
                anio
                id_factura
                pendiente
                pagado
                active
              }
          }
        ` }),
        }) 
        .then(res => res.json())
        .then(res => console.log(res))
        .then(res => location.reload())
    }
export default HistoricoPagos