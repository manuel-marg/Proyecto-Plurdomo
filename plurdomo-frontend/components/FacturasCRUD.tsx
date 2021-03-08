import React, { ReactNode } from 'react'
import { getStaticProps } from '../pages/users/[id]';


const FacturaCrud = ({ facturas }) => (
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
                            <a href="#AddPropietario" className="btn btn-outline-secondary m-1">
                                <i className="fas fa-history"></i>
                                <span> Historico</span>
                            </a>
                            <a href="#AddPropietario" className="btn btn-success m-1" data-toggle="modal">
                                <i className="fas fa-plus"></i>
                                <span> Agregar</span>
                            </a>
                        </div>
                    </div>
                </div>
                <table className="table table-striped table-hover table-sm" id="myTable">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>N° Factura</th>
                            <th>Nombre</th>
                            <th>Deuda Total</th>
                            <th>Dia</th>
                            <th>Mes</th>
                            <th>Año</th>
                            <th className="text-center">Detalles</th>
                        </tr>
                    </thead>
                    <tbody>
                    {facturas && facturas.map(factura =>
                        <tr key={factura.id}>
                                <td>{factura.id}</td>
                                <td>{factura.n_factura}</td>
                                <td>{factura.nombre}</td>
                                <td>{factura.deuda_total}</td>
                                <td>{factura.dia}</td>
                                <td>{factura.mes}</td>
                                <td>{factura.anio}</td>
                            <td className="text-center">
                                <a href={"#delete" + factura.id} className="text-danger" data-toggle="modal"><i className="fas fa-trash-alt"></i></a>
                            </td>
                        </tr>
                                                    )}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
{/* CREAR --> Creación de un Modal con un Formulario para agregar llama a funcion Agregar() CRUD */}
    <div id="AddPropietario" className="modal fade">
        <div className="modal-dialog">
            <div className="modal-content">
                <form>
                    <div className="modal-header">
                        <h4 className="modal-title">Agregar</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                    </div>
                    <div className="modal-body">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" style={{width: '100px'}}>N° Factura</span>
                            </div>
                            <input id="n_factura" type="number" className="form-control" required/>
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" style={{width: '100px'}}>Nombre</span>
                            </div>
                            <input id="nombre" type="text" className="form-control" required/>
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Deuda Total</span>
                            </div>
                            <input id="deuda_total" type="number" className="form-control" required/>
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" style={{width: '100px'}}>Fecha</span>
                            </div>
                            <input id="fecha" type="date" className="form-control" required/>
                        </div>
                           
                    </div>
                    <div className="modal-footer">
                        <input type="button" className="btn btn-default" data-dismiss="modal" defaultValue="Cancel" />
                        <input type="button" onClick={Agregar} data-dismiss="modal" className="btn btn-success" value="Agregar" />
                    </div>
                </form>
            </div>
        </div>
    </div>


</div>
)

async function Agregar() { // Funcion para agregar
    var factura = {n_factura: "", nombre: "", fecha: "", dia: 0, mes: 0, año: 0, deuda_total: "", active: true}; 
    factura.n_factura = (document.getElementById("n_factura") as HTMLInputElement).value;
    factura.nombre = (document.getElementById("nombre") as HTMLInputElement).value;
    factura.fecha = (document.getElementById("fecha") as HTMLInputElement).value;
    var fechaArray = factura.fecha.split("-");
    factura.dia = parseInt(fechaArray[2]);
    factura.mes = parseInt(fechaArray[1]);;
    factura.año = parseInt(fechaArray[0]);;
    factura.deuda_total = (document.getElementById("deuda_total") as HTMLInputElement).value;
    
    const createFactura = await fetch('http://localhost:4000/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: `
        mutation{
            createFactura(n_factura: ${factura.n_factura}, nombre: "${factura.nombre}", dia_em: ${factura.dia}, mes_em: ${factura.mes}, anio_em: ${factura.año},alicuota:12 , saldo:11, id_inmueble:10, gastos_comunes: "PRUEBA COMUNES", gastos_nocomunes: "PRUEBA NO COMUNES", deuda_total: ${factura.deuda_total}, historico: false, active: true){
                id
                nombre 
                gastos_comunes
                gastos_nocomunes
                deuda_total
                alicuota 
                saldo
                id_inmueble
                dia_em
                mes_em
                anio_em
                n_factura
                historico
                active
            }
          }
        ` }),
        }) 
        const respuestaFactura = await createFactura.json()
        const facturaCreado = await respuestaFactura.data.createFactura
        console.log(facturaCreado)

    location.reload();
}



function Buscar() { // Esta funcion funciona como una especie de filtro en la tabla y simulamos una busqueda por nombre
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1]; // Establecemos que columna buscara y inicia en 0
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



export default FacturaCrud