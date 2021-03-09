import React, { ReactNode } from 'react'
import { getStaticProps } from '../pages/users/[id]';

const Crud = ({ pagos}) =>(
    <div>
    <div className="container-xl">
        <div>
            <div className="table-wrapper">
                <div className="table-title">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="input-group mb-3">
                            </div>
                        </div>
                        <div className="col-sm-6 text-right vertical-center">
                            <a href="historicopagos" className="btn btn-outline-secondary m-1 mb-3">
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
                            <th className="text-center">Confirmar</th>
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
                                <a href={"#delete" + pago.id} className="text-success" data-toggle="modal"><i className="fas fa-check-circle"></i></a>
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
                           
                    </div>
                    <div className="modal-footer">
                        <input type="button" className="btn btn-default" data-dismiss="modal" defaultValue="Cancel" />
                    </div>
                </form>
            </div>
        </div>
    </div>
{/* ELIMINAR --> Creación de un Modal con un Formulario por cada registro del CRUD */}
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
                        <input type="button" onClick={(e) => Checkear( pago.id )} data-dismiss="modal" className="btn btn-primary" value="Confirmar" />
                    </div>
                </form>
            </div>
        </div>
    </div>
)}    
</div>
)


function Checkear(id){
    fetch('http://localhost:4000/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: `
    mutation{
        checkPago(id:${id}){
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

export default Crud