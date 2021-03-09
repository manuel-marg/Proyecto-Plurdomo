import React, { ReactNode } from 'react'
import { getStaticProps } from '../pages/users/[id]';

const CrudPagar = ({ pagos}) =>(
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
                            <a href="historicopagados" className="btn btn-outline-secondary m-1">
                                <i className="fas fa-history"></i>
                                <span> Historico</span>
                            </a>
                            
                        </div>
                    </div>
                </div>
                <table className="table table-striped table-hover table-sm" id="myTable">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Monto</th>
                            <th>Dia</th>
                            <th>Mes</th>
                            <th>Año</th>
                            <th>Estado</th>
                            <th className="text-center">Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                    {pagos && pagos.map(pago =>
                        <tr key={pago.id}>
                                <td>{pago.id}</td>
                                <td>{pago.monto}</td>
                                <td>{pago.dia}</td>
                                <td>{pago.mes}</td>
                                <td>{pago.anio}</td>
                                <td>Pendiente</td>
                            <td className="text-center">
                               
                            <a href={"#pagar" + pago.id} className="text-success" data-toggle="modal">Pagar</a> 
                            </td>
                        </tr>
                                                    )}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
{/* CREAR --> Creación de un Modal con un Formulario para agregar llama a funcion Agregar() CRUD */}
{pagos && pagos.map(pago =>
    <div key={pago.id} id={"pagar" + pago.id} className="modal fade">
        <div className="modal-dialog">
            <div className="modal-content">
                <form>
                    <div className="modal-header">
                        <h4 className="modal-title">Pagar</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                    </div>
                    <div className="modal-body">
                    <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" style={{width: '150px'}}>Forma de pago</span>
                                </div>
                                <select className="custom-select" id="AddTipoPago">
                                    <option value="null" selected>Efectivo</option>
                                    <option value="null">Zelle</option>
                                        
                                </select>
                    </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" style={{width: '100px'}}>Monto</span>
                            </div>
                            <input id="monto" type="number" min="0" step="0.1" className="form-control" required/>
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" style={{width: '100px'}}>Fecha</span>
                            </div>
                            <input id="fecha" type="date" className="form-control" required/>
                        </div>  
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" style={{width: '180px'}}>Número Referencia</span>
                            </div>
                            <input id="referencia" type="number" min="0" step="0.1" className="form-control" required/>
                        </div>         
                           
                    </div>
                    <div className="modal-footer">
                        <input type="button" className="btn btn-default" data-dismiss="modal" defaultValue="Cancel" />
                        <input type="button" onClick={(e) => irPagando( pago.id, pago.monto )} data-dismiss="modal" className="btn btn-success" value="Hacer Pago" />
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

async function Agregar() { // Funcion para agregar
    var pago = {monto: "", fecha: "", dia: 0, mes: 0, año: 0, id_factura:0, pendiente:true, pagado:false, active: true}; 
    pago.monto = (document.getElementById("monto") as HTMLInputElement).value;
    pago.fecha = (document.getElementById("fecha") as HTMLInputElement).value;
    var fechaArray = pago.fecha.split("-");
    pago.dia = parseInt(fechaArray[2]);
    pago.mes = parseInt(fechaArray[1]);;
    pago.año = parseInt(fechaArray[0]);;
    pago.id_factura=1
    const createPago = await fetch('http://localhost:4000/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: `
        mutation{
            createPago(monto: ${pago.monto}, dia: ${pago.dia}, mes: ${pago.mes}, anio: ${pago.año}, id_factura: ${pago.id_factura},  pendiente: true, pagado:false, active: true){
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
        const respuestaPago = await createPago.json()
        const pagoCreado = await respuestaPago.data.createPago
        console.log(pagoCreado)

        location.reload();
}

function Pagar(id){
    fetch('http://localhost:4000/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: `
    mutation{
        Pagar(id:${id}){
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

async function irPagando(id, monto) { // Funcion para agregar
    var instrumento_pago = {tipo:"", monto: "", fecha: "", dia: 0, mes: 0, año: 0, id_pago:0, referencia:"", active: true}; 
    instrumento_pago.tipo = (document.getElementById("AddTipoPago") as HTMLInputElement).value;
    instrumento_pago.monto = (document.getElementById("monto") as HTMLInputElement).value;
    instrumento_pago.fecha = (document.getElementById("fecha") as HTMLInputElement).value;
    var fechaArray = instrumento_pago.fecha.split("-");
    instrumento_pago.dia = parseInt(fechaArray[2]);
    instrumento_pago.mes = parseInt(fechaArray[1]);;
    instrumento_pago.año = parseInt(fechaArray[0]);;
    instrumento_pago.referencia = (document.getElementById("referencia") as HTMLInputElement).value;

    const createInstrumento = await fetch('http://localhost:4000/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: `
        mutation{
            createInstrumento(tipo:"${instrumento_pago.tipo}", monto: ${instrumento_pago.monto}, dia: ${instrumento_pago.dia}, mes: ${instrumento_pago.mes}, anio: ${instrumento_pago.año}, id_pago: ${id}, referencia:"${instrumento_pago.referencia}", active: true){
                id
                tipo
                referencia
                monto
                dia
                mes
                anio
                id_pago
                active
            }
          }
        ` }),
        }) 
        const respuestaPago = await createInstrumento.json()
        const pagoCreado = await respuestaPago.data.createInstrumento
        console.log(pagoCreado.id)
        
        if(instrumento_pago.monto == monto){
            Pagar(id)
        }else if(instrumento_pago.monto < monto){
            monto = monto - parseInt(instrumento_pago.monto)

        const updatePago = await fetch('http://localhost:4000/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: `
        mutation{
            updatePago(id: ${id}, monto:${monto}){
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
        }).then(res => res.json())
        .then(res => console.log(res))
        .then(res => location.reload()) 
        }

        location.reload();
}


export default CrudPagar