import React, { ReactNode } from 'react'
import Link from 'next/link'

const InmuebleCRUD = ({ edificios , aptos ,  casas , propietarios}) => (
<div>
    <div className="container-xl">
        <div>
            <div className="table-wrapper">
                <div className="table-title">
                    <div className="row">
                        <div className="col-sm-6">
                            
                        <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">Tipo</span>
                                </div>
                                <select className="custom-select" onChange={TipoTabla} id="TipoDeTabla">
                                    <option selected>Seleccione...</option>
                                    <option value="aptos">Aptos</option>
                                    <option value="casas">Casas</option>
                                </select>
                            </div>


                        </div>
                        <div className="col-sm text-right vertical-center">
                        <Link href="/edfs">
                            <button type="button" className="btn btn-light mt-1 mr-4" data-toggle="modal">
                            <i className="far fa-building"></i>
                                <span> Edificios</span>
                            </button>
                            </Link>

                            <a href="#AddInmueble" className="btn btn-success mt-1" data-toggle="modal">
                                <i className="fas fa-plus"></i>
                                <span> Agregar</span>
                            </a>
                        </div>
                    </div>
                </div>


<div id="TablaCasas"  style={{display: 'none'}}> {/* Tabla Casas inicio <div> */}


                <table className="table table-striped table-hover table-sm" id="myTable">
                    <thead>
                        <tr>
                            <th className="text-center">ID</th>
                            <th className="text-center">Nombre</th>
                            <th className="text-center">N°</th>
                            <th className="text-center">Alicuota</th>
                            <th className="text-center">Saldo</th>
                            <th className="text-center">Propietario</th>
                            <th className="text-center">Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                    {casas && casas.map(casa =>
                        <tr key={casa.id}>
                            <td className="text-center">{casa.id}</td>
                            <td className="text-center">{casa.nombre}</td>
                            <td className="text-center">{casa.numero}</td>
                            <td className="text-center">{casa.alicuota}</td>
                            <td className="text-center">{casa.saldo}</td>
                            <td className="text-center">{casa.id_propietario}</td>
                            <td className="text-center">
                                <a href={"#EditarCasa" + casa.id} className="text-primary" data-toggle="modal"><i className="fas fa-edit"></i></a>
                                      |  
                                <a href={"#Eliminar" + casa.id} className="text-danger" data-toggle="modal"><i className="fas fa-trash-alt"></i></a>
                            </td>
                        </tr>
                        )}
                    </tbody>
                </table>
                </div> {/* Tabla Casas fin <div> */}

<div id="TablaAptos"  style={{display: 'none'}}> {/* Tabla Aptos inicio <div> */}
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" style={{width: '100px'}}>Edificio</span>
                                </div>
                                <select className="custom-select" id="FiltrarPorEdificio" onChange={BuscarPorEdificio}>
                                    <option value="" selected>Seleccione...</option>
                                        {/* Imprimiendo los edificios que hay en la tabla de edificios*/}  
                                        {edificios && edificios.map(edificio =>
                                            <option value={edificio.id}>{edificio.nombre}</option>
                                        )}
                                </select>
                            </div>

<table className="table table-striped table-hover table-sm" id="myTableAptos">
    <thead>
        <tr>
            <th className="text-center">ID</th>
            <th className="text-center">N° Apto</th>
            <th className="text-center">Piso</th>
            <th className="text-center">ID_Edificio</th>
            <th className="text-center">Alicuota</th>
            <th className="text-center">Saldo</th>
            <th className="text-center">Propietario</th>
            <th className="text-center">Opciones</th>
        </tr>
    </thead>
    <tbody>
    {aptos && aptos.map(apto =>
        <tr key={apto.id}>
            <td className="text-center">{apto.id}</td>
            <td className="text-center">{apto.numero}</td>
            <td className="text-center">{apto.piso}</td>
            <td className="text-center">{apto.id_inmueble}</td>
            <td className="text-center">{apto.alicuota}</td>
            <td className="text-center">{apto.saldo}</td>
            <td className="text-center">{apto.id_propietario}</td>
            <td className="text-center">
                <a href={"#EditarApto" + apto.id} className="text-primary" data-toggle="modal"><i className="fas fa-edit"></i></a>
                      |  
                <a href={"#Eliminar" + apto.id} className="text-danger" data-toggle="modal"><i className="fas fa-trash-alt"></i></a>
            </td>
        </tr>
        )}
    </tbody>
</table>
</div> {/* Tabla Aptos fin <div> */}                

            </div>
        </div>
    </div>
{/* CREAR --> Creación de un Modal con un Formulario para agregar llama a funcion Agregar() CRUD */}
    <div id="AddInmueble" className="modal fade">
        <div className="modal-dialog">
            <div className="modal-content">
                <form>
                    <div className="modal-header">
                        <h4 className="modal-title">Agregar un Inmueble</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                    </div>
                    <div className="modal-body">
                        <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" style={{width: '120px'}}>Propietario</span>
                                </div>
                                <select className="custom-select" id="AddPropietario">
                                    <option value="null" selected>Ninguno</option>
                                        {/* Imprimiendo los los propiertarios */}  
                                        {propietarios && propietarios.map(propietario =>
                                            <option value={propietario.id}>{propietario.cedula} - {propietario.nombre} {propietario.apellido}</option>
                                        )}
                                </select>
                            </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" style={{width: '100px'}}>Alicuota</span>
                            </div>
                            <input id="AddAlicuota" type="number" step="any" className="form-control" required/>
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" style={{width: '100px'}}>Saldo</span>
                            </div>
                            <input id="AddSaldo" type="number" className="form-control" required/>
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" style={{width: '100px'}}>Tipo</span>
                            </div>
                            <select className="custom-select" onChange={Tipo} id="AddTipo">
                                <option selected>Seleccione...</option>
                                <option value="Apto">Apto</option>
                                <option value="Casa">Casa</option>
                            </select>
                        </div>

                        <div id="Apto" style={{display: 'none'}}>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" style={{width: '100px'}}>Edificio</span>
                                </div>
                                <select className="custom-select" id="AddEdificioApto">
                                    <option selected>Seleccione...</option>
                                        {/* Imprimiendo los edificios que hay en la tabla de edificios*/}  
                                        {edificios && edificios.map(edificio =>
                                            <option value={edificio.id}>{edificio.nombre}</option>
                                        )}
                                </select>
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" style={{width: '100px'}}>Piso</span>
                                </div>
                                <input id="AddPisoApto" type="number" className="form-control" required/>
                            </div>        
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" style={{width: '100px'}}>N° Apto</span>
                                </div>
                                <input id="AddNumeroApto" type="number" className="form-control" required/>
                            </div> 
                        </div>

                        <div id="Casa" style={{display: 'none'}}>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" style={{width: '100px'}}>Nombre</span>
                                </div>
                                <input id="AddNombreCasa" type="text" className="form-control" required/>
                            </div> 
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" style={{width: '100px'}}>N° Casa</span>
                                </div>
                                <input id="AddNumeroCasa" type="number" className="form-control" required/>
                            </div> 
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
{/*------------------------------------ EDITAR CASAS -----------------------------*/}    
{casas && casas.map(casa =>
    <div key={casa.id} id={"EditarCasa" + casa.id} className="modal fade">
        <div className="modal-dialog">
            <div className="modal-content">
                <form>
                    <div className="modal-header">
                        <h4 className="modal-title">Editar</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                    </div>
                    <div className="modal-body">
                    <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" style={{width: '120px'}}>Propietario</span>
                                </div>
                                <select className="custom-select" id={casa.id + "propietario"}>
                                    <option value="null" selected>Seleccione...</option>
                                        {/* Imprimiendo los los propiertarios */}  
                                        {propietarios && propietarios.map(propietario =>
                                            <option value={propietario.id}>{propietario.cedula} - {propietario.nombre} {propietario.apellido}</option>
                                        )}
                                </select>
                            </div>
                    <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" style={{width: '100px'}}>Nombre</span>
                            </div>
                            <input id={casa.id + "nombre"} defaultValue={casa.nombre} type="text" className="form-control" required/>
                        </div>
                    <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" style={{width: '100px'}}>Alicuota</span>
                            </div>
                            <input id={casa.id + "alicuota"} defaultValue={casa.alicuota} type="text" className="form-control" required/>
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" style={{width: '100px'}}>Saldo</span>
                            </div>
                            <input id={casa.id + "saldo"} defaultValue={casa.saldo} type="text" className="form-control" required/>
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" style={{width: '100px'}}>N° Casa</span>
                            </div>
                            <input id={casa.id + "numero"} defaultValue={casa.numero} type="text" className="form-control" required/>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <input type="button" className="btn btn-default" data-dismiss="modal" defaultValue="Cancel" />
                        <input type="button" onClick={(e) => ModificarCasa(casa.id) } data-dismiss="modal" className="btn btn-primary" value="Modificar" />
                    </div>
                </form>
            </div>
        </div>
    </div>
)}
{/* ---------------------------- EDITAR APTOS  -------------------------------*/}    
{aptos && aptos.map(apto =>
    <div key={apto.id} id={"EditarApto" + apto.id} className="modal fade">
        <div className="modal-dialog">
            <div className="modal-content">
                <form>
                    <div className="modal-header">
                        <h4 className="modal-title">Editar</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                    </div>
                    <div className="modal-body">
                    <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" style={{width: '120px'}}>Propietario</span>
                                </div>
                                <select className="custom-select" id={apto.id + "propietario"}>
                                    <option value="null" selected>Seleccione...</option>
                                        {/* Imprimiendo los los propiertarios */}  
                                        {propietarios && propietarios.map(propietario =>
                                            <option value={propietario.id}>{propietario.cedula} - {propietario.nombre} {propietario.apellido}</option>
                                        )}
                                </select>
                            </div>
                    <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" style={{width: '100px'}}>Alicuota</span>
                            </div>
                            <input id={apto.id + "alicuota"} defaultValue={apto.alicuota} type="text" className="form-control" required/>
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" style={{width: '100px'}}>Saldo</span>
                            </div>
                            <input id={apto.id + "saldo"} defaultValue={apto.saldo} type="text" className="form-control" required/>
                        </div>
                        <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" style={{width: '100px'}}>Edificio</span>
                                </div>
                                <select className="custom-select" id={apto.id + "edificio"}>
                                    <option selected>Seleccione...</option>
                                        {/* Imprimiendo los edificios que hay en la tabla de edificios*/}  
                                        {edificios && edificios.map(edificio =>
                                            <option value={edificio.id}>{edificio.nombre}</option>
                                        )}
                                </select>
                            </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" style={{width: '100px'}}>Piso</span>
                            </div>
                            <input id={apto.id + "piso"} defaultValue={apto.piso} type="text" className="form-control" required/>
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" style={{width: '100px'}}>N° Apto</span>
                            </div>
                            <input id={apto.id + "numero"} defaultValue={apto.numero} type="text" className="form-control" required/>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <input type="button" className="btn btn-default" data-dismiss="modal" defaultValue="Cancel" />
                        <input type="button" onClick={(e) => ModificarApto(apto.id) } data-dismiss="modal" className="btn btn-primary" value="Modificar" />
                    </div>
                </form>
            </div>
        </div>
    </div>
)}
{/*-------------------- ELIMINAR APTOS -----------------------*/}
{aptos && aptos.map(apto =>
    <div key={apto.id} id={"Eliminar" + apto.id} className="modal fade">
        <div className="modal-dialog">
            <div className="modal-content">
                <form>
                    <div className="modal-header">
                        <h4 className="modal-title">Alerta de confirmación</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                    </div>
                    <div className="modal-body">
                        <p className="text-center">¿Estas seguro que desea eliminar?</p>
                    </div>
                    <div className="modal-footer">
                    <input type="button" className="btn btn-default" data-dismiss="modal" defaultValue="Cancel" />
                        <input type="button" onClick={(e) => Eliminar(apto.id)} data-dismiss="modal" className="btn btn-danger" value="Eliminar" />
                    </div>
                </form>
            </div>
        </div>
    </div>
)}

{/* -------------------------- ELIMINAR CASAS --------------------- */}
{casas && casas.map(casa =>
    <div key={casa.id} id={"Eliminar" + casa.id} className="modal fade">
        <div className="modal-dialog">
            <div className="modal-content">
                <form>
                    <div className="modal-header">
                        <h4 className="modal-title">Alerta de confirmación</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                    </div>
                    <div className="modal-body">
                        <p className="text-center">¿Estas seguro que desea eliminar?</p>
                    </div>
                    <div className="modal-footer">
                    <input type="button" className="btn btn-default" data-dismiss="modal" defaultValue="Cancel" />
                        <input type="button" onClick={(e) => Eliminar(casa.id)} data-dismiss="modal" className="btn btn-danger" value="Eliminar" />
                    </div>
                </form>
            </div>
        </div>
    </div>
)}


</div>

)


function Tipo() { // Esta funcion funciona para mostrar el resto de los inputs en agragar deppendiendo del tipo que seleccione
    var tipo = (document.querySelector("#AddTipo")as HTMLInputElement).value;
    // Oculto los div antes de mostrar el que corresponde 
    (document.querySelector("#Apto")as HTMLInputElement).style.display = 'none';
    (document.querySelector("#Casa")as HTMLInputElement).style.display = 'none';
    // Sabiendo que en "tipo" esta el tipo que seleccionaron el formulario entonces muestro el que corresponde
    if (tipo == "Casa"){
        (document.querySelector("#Casa")as HTMLInputElement).style.display = 'block';
    }else if (tipo == "Apto"){
        (document.querySelector("#Apto")as HTMLInputElement).style.display = 'block';
    }
}

function TipoTabla() { // Esta funcion funciona para mostrar la tabla de casas o aptos
    var TipoDeTabla = (document.querySelector("#TipoDeTabla")as HTMLInputElement).value;
    // Oculto los div antes de mostrar el que corresponde 
    (document.querySelector("#TablaCasas")as HTMLInputElement).style.display = 'none';
    (document.querySelector("#TablaAptos")as HTMLInputElement).style.display = 'none';
    // Sabiendo que en "tipo" esta el tipo que seleccionaron el formulario entonces muestro el que corresponde
    if (TipoDeTabla == "aptos"){
        (document.querySelector("#TablaAptos")as HTMLInputElement).style.display = 'block';
    }else if (TipoDeTabla == "casas"){
        (document.querySelector("#TablaCasas")as HTMLInputElement).style.display = 'block';
    }
}


async function Agregar() { // Funcion para agregar
    var inmueble = {alicuota: "", saldo:"", id_propietario:"", nombreCasa: "", numeroCasa: "" ,pisoApto: "", numeroApto: "" , id_inmueble: "" , active: true};  // Creo un Objeto propietario
    inmueble.alicuota = (document.getElementById("AddAlicuota") as HTMLInputElement).value; 
    inmueble.saldo = (document.getElementById("AddSaldo") as HTMLInputElement).value;
    inmueble.id_propietario = null;
    inmueble.nombreCasa = (document.getElementById("AddNombreCasa") as HTMLInputElement).value;
    inmueble.numeroCasa = (document.getElementById("AddNumeroCasa") as HTMLInputElement).value;
    inmueble.pisoApto = (document.getElementById("AddPisoApto") as HTMLInputElement).value;
    inmueble.numeroApto = (document.getElementById("AddNumeroApto") as HTMLInputElement).value;
    inmueble.id_inmueble = (document.getElementById("AddEdificioApto") as HTMLInputElement).value;
    inmueble.id_propietario = (document.getElementById("AddPropietario") as HTMLInputElement).value;
    var tipo = (document.querySelector("#AddTipo")as HTMLInputElement).value; // Puede ser Casa o Apto
    if( inmueble.id_propietario == "null"){
        // Sabiendo que en "tipo" esta el tipo que seleccionaron el formulario entonces muestro el que corresponde
        if (tipo == "Casa"){
            fetch('http://localhost:4000/graphql', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ query: `
                    mutation{
                        createInmueble(alicuota: ${inmueble.alicuota}, nombre: "${inmueble.nombreCasa}", numero: ${inmueble.numeroCasa}, tipo: "casa" , saldo: ${inmueble.saldo}, active:true){
                        id
                        alicuota
                        numero
                        nombre
                        piso
                        saldo
                        id_propietario
                        id_inmueble
                        tipo
                        active
                        }
                    }
                    ` }),
                })
                .then(res => res.json())
                .then(res => console.log(res))
                .then(res => location.reload()) // Refrescar para que se vean los cambios en la Tabla
        }else if (tipo == "Apto"){
            fetch('http://localhost:4000/graphql', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ query: `
                    mutation{
                        createInmueble(alicuota: ${inmueble.alicuota}, piso: ${inmueble.pisoApto}, numero: ${inmueble.numeroApto}, tipo: "apto" , saldo: ${inmueble.saldo}, id_inmueble: ${inmueble.id_inmueble}, active:true){
                        id
                        alicuota
                        numero
                        nombre
                        piso
                        saldo
                        id_propietario
                        id_inmueble
                        tipo
                        active
                        }
                    }
                    ` }),
                })
                .then(res => res.json())
                .then(res => console.log(res))
                .then(res => location.reload()) // Refrescar para que se vean los cambios en la Tabla
        }
    }else{
        
    // Sabiendo que en "tipo" esta el tipo que seleccionaron el formulario entonces muestro el que corresponde
    if (tipo == "Casa"){
        fetch('http://localhost:4000/graphql', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query: `
                mutation{
                    createInmueble(alicuota: ${inmueble.alicuota}, nombre: "${inmueble.nombreCasa}", numero: ${inmueble.numeroCasa}, id_propietario: ${inmueble.id_propietario} , tipo: "casa" , saldo: ${inmueble.saldo}, active:true){
                    id
                    alicuota
                    numero
                    nombre
                    piso
                    saldo
                    id_propietario
                    id_inmueble
                    tipo
                    active
                    }
                }
                ` }),
            })
            .then(res => res.json())
            .then(res => console.log(res))
            .then(res => location.reload()) // Refrescar para que se vean los cambios en la Tabla
    }else if (tipo == "Apto"){
        fetch('http://localhost:4000/graphql', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query: `
                mutation{
                    createInmueble(alicuota: ${inmueble.alicuota}, piso: ${inmueble.pisoApto}, numero: ${inmueble.numeroApto}, tipo: "apto" , saldo: ${inmueble.saldo}, id_propietario: ${inmueble.id_propietario}, id_inmueble: ${inmueble.id_inmueble}, active:true){
                    id
                    alicuota
                    numero
                    nombre
                    piso
                    saldo
                    id_propietario
                    id_inmueble
                    tipo
                    active
                    }
                }
                ` }),
            })
            .then(res => res.json())
            .then(res => console.log(res))
            .then(res => location.reload()) // Refrescar para que se vean los cambios en la Tabla
    }
    }
    

}

function ModificarApto(id) { // Funcion para modificar
    var apto = {alicuota:"", saldo:"", edificio:"" , piso: "", numero: "" , id_propietario:""};
    apto.alicuota = (document.getElementById(`${id + "alicuota"}`) as HTMLInputElement).value; 
    apto.saldo = (document.getElementById(`${id + "saldo"}`) as HTMLInputElement).value; 
    apto.edificio = (document.getElementById(`${id + "edificio"}`) as HTMLInputElement).value; 
    apto.piso = (document.getElementById(`${id + "piso"}`) as HTMLInputElement).value; 
    apto.numero = (document.getElementById(`${id + "numero"}`) as HTMLInputElement).value; 
    apto.id_propietario = (document.getElementById(`${id + "propietario"}`) as HTMLInputElement).value; 
    console.log(apto.id_propietario)
    if( apto.id_propietario == "null"){
    fetch('http://localhost:4000/graphql', { 
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: `
    mutation{
        updateInmueble(id: ${id} , alicuota: ${apto.alicuota}, saldo: ${apto.saldo} , id_propietario: null , id_inmueble: ${apto.edificio} , tipo: "apto" , active:true){
        id
        alicuota
        numero
        nombre
        piso
        saldo
        id_propietario
        id_inmueble
        tipo
        active
        }
    }
    ` }),
    })
    .then(res => res.json())
    .then(res => console.log(res))
    .then(res => location.reload()) // Refresco para que se vean los cambios en la Tabla
    }else{
        fetch('http://localhost:4000/graphql', { 
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: `
    mutation{
        updateInmueble(id: ${id} , alicuota: ${apto.alicuota}, saldo: ${apto.saldo} , id_propietario: ${apto.id_propietario} , id_inmueble: ${apto.edificio} , tipo: "apto" , active:true){
        id
        alicuota
        numero
        nombre
        piso
        saldo
        id_propietario
        id_inmueble
        tipo
        active
        }
    }
    ` }),
    })
    .then(res => res.json())
    .then(res => console.log(res))
    .then(res => location.reload()) // Refresco para que se vean los cambios en la Tabla
    }
}

function ModificarCasa(id) { // Funcion para modificar
    var casa = {alicuota:"", saldo:"", nombre: "", numero: "" ,  id_propietario:""};
    casa.alicuota = (document.getElementById(`${id + "alicuota"}`) as HTMLInputElement).value; 
    casa.saldo = (document.getElementById(`${id + "saldo"}`) as HTMLInputElement).value; 
    casa.nombre = (document.getElementById(`${id + "nombre"}`) as HTMLInputElement).value; 
    casa.numero = (document.getElementById(`${id + "numero"}`) as HTMLInputElement).value; 
    casa.id_propietario = (document.getElementById(`${id + "propietario"}`) as HTMLInputElement).value; 
    if( casa.id_propietario == "null"){
    fetch('http://localhost:4000/graphql', { 
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: `
    mutation{
        updateInmueble(id: ${id} , alicuota: ${casa.alicuota}, saldo: ${casa.saldo} , nombre: "${casa.nombre}" , id_propietario: null , tipo: "casa" , active:true){
        id
        alicuota
        numero
        nombre
        piso
        saldo
        id_propietario
        id_inmueble
        tipo
        active
        }
    }
    ` }),
    })
    .then(res => res.json())
    .then(res => console.log(res))
    .then(res => location.reload()) // Refresco para que se vean los cambios en la Tabla
}else{
    fetch('http://localhost:4000/graphql', { 
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: `
    mutation{
        updateInmueble(id: ${id} , alicuota: ${casa.alicuota}, saldo: ${casa.saldo} , nombre: "${casa.nombre}" ,  id_propietario: ${casa.id_propietario} , tipo: "casa" , active:true){
        id
        alicuota
        numero
        nombre
        piso
        saldo
        id_propietario
        id_inmueble
        tipo
        active
        }
    }
    ` }),
    })
    .then(res => res.json())
    .then(res => console.log(res))
    .then(res => location.reload()) // Refresco para que se vean los cambios en la Tabla
}
}

function Eliminar(id) { // Funcion para editar
    fetch('http://localhost:4000/graphql', { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: `
        mutation{
            updateInmueble(id: ${id} , active: false){
            id
            alicuota
            numero
            nombre
            piso
            saldo
            id_propietario
            id_inmueble
            tipo
            active
            }
        }
        ` }),
        })
        .then(res => res.json())
        .then(res => console.log(res))
        .then(res => location.reload()) // Refresco para que se vean los cambios en la Tabla
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

function BuscarPorEdificio() { // Esta funcion funciona como una especie de filtro en la tabla y simulamos una busqueda por nombre
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("FiltrarPorEdificio");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTableAptos");
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



export default InmuebleCRUD