import React, { ReactNode } from 'react'
import { getStaticProps } from '../pages/users/[id]';


const HistoricoFacturaCrud = ({ facturas,condominios }) => (
<div>
    <div className="container-xl">
        <div>
            <div className="table-wrapper">
                <div className="table-title">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 text-right vertical-center">
                            <a href="facturas" className="btn btn-outline-secondary m-1">
                                
                                <span> Volver</span>
                            </a>
                        </div>
                    </div>
                </div>
                <table className="table table-striped table-hover table-sm" id="myTable">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>N° Factura</th>
                            <th>ID Inmueble</th>
                            <th>Deuda Total</th>
                            <th>Dia</th>
                            <th>Mes</th>
                            <th>Año</th>
                            <th className="text-center">Detalles</th>
                            <th className="text-center">Ocultar</th>
                        </tr>
                    </thead>
                    <tbody>
                    {facturas && facturas.map(factura =>
                        <tr key={factura.id}>
                                <td>{factura.id}</td>
                                <td>{factura.n_factura}</td>
                                <td>{factura.id_inmueble}</td>
                                <td>{factura.deuda_total}</td>
                                <td>{factura.dia_em}</td>
                                <td>{factura.mes_em}</td>
                                <td>{factura.anio_em}</td>
                                <td className="text-center">
                                    <a href={"#detalles" + factura.id} className="text-primary" data-toggle="modal"><i className="fas fa-eye"></i></a>
                                </td>
                                <td className="text-center">
                                    <input type="button" onClick={(e) => DesocultarFactura( factura.id )} data-dismiss="modal" className="btn btn-primary" value="Desocultar" />
                                </td>
                        </tr>
                                                    )}
                    </tbody>
                </table>
            </div>
        </div>
    </div>


{/* DETALLES --> Creación de un Modal con los detalles por cada factura del CRUD */}
{facturas && facturas.map(factura =>
    <div key={factura.id} id={"detalles" + factura.id} className="modal fade">
        <div className="modal-dialog modal-xl">
            <div className="modal-content">
                <form>
                    <div className="modal-header">
                        <h4 className="modal-title">Factura N° {factura.n_factura}</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                    </div>

                    <div className="modal-body">
                        <div className="col-xs-5 col-xs-offset-2 text-left">
                            <div className="panel panel-default font-weight-bold">
                                <div>
                                    <div key={condominios.id}>
                                        <div>{condominios.nombre}</div>
                                        <div>{condominios.municipio}, {condominios.estado}</div>
                                    </div>
                                </div>
                                <div>Fecha: {factura.dia_em}/{factura.mes_em}/{factura.anio_em}</div>
                                <div>ID Inmueble: {factura.id_inmueble}</div>
                            </div>
                        </div>

                        <div className="col-xs-5 col-xs-offset-2 text-left mt-3">
                            <div className="mb-3 font-weight-bold">{factura.nombre}</div>
                            <div className="font-weight-bold">Gastos Comunes</div>
                            <div>{factura.gastos_comunes}</div>
                            <div className="font-weight-bold">Gastos No Comunes</div>
                            <div>{factura.gastos_nocomunes}</div>
                        </div>


                        <div className="panel panel-default mr-1 mt-5 text-right">
                            <div className="row">
                                <div className="font-weight-bold col">Saldo:</div>
                                <div className="col col-lg-2">{factura.saldo}</div>
                            </div>
                            <div className="row">
                                <div className="font-weight-bold col">Alícuota:</div>
                                <div className="col col-lg-2">{factura.alicuota}</div>
                            </div>
                            <div className="row">
                                <div className="font-weight-bold col">Deuda total:</div>
                                <div className="col col-lg-2">{factura.deuda_total}</div>
                            </div>
                        </div>

                    </div>



                    <div className="modal-footer">
                    <input type="button" className="btn btn-outline-primary" data-dismiss="modal" defaultValue="Salir" />
                    </div>
                </form>
            </div>
        </div>
    </div>
)}    
</div>

)

function DesocultarFactura(id){
    fetch('http://localhost:4000/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: `
    mutation{
        desocultarFactura(id:${id}){
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
    .then(res => res.json())
    .then(res => console.log(res))
    .then(res => location.reload())
}


export default HistoricoFacturaCrud