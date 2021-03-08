import React, { ReactNode } from 'react'


const HistoricoGastos = ({ gastos }) => (
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
                            <th>Concepto</th>
                            <th>Tipo</th>
                        </tr>
                    </thead>
                    <tbody>
                    {gastos && gastos.map(gasto =>
                        <tr key={gasto.id}>
                                <td>{gasto.id}</td>
                                <td>{gasto.monto}</td>
                                <td>{gasto.dia}-{gasto.mes}-{gasto.anio}</td>
                                <td>{gasto.concepto}</td>
                                <td>{gasto.tipo}</td>
                        </tr>
                                                    )}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
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



export default HistoricoGastos