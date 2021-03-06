import React, { ReactNode } from 'react'
import { getStaticProps } from '../pages/users/[id]';


const Crud = ({ propietarios }) => (
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
                                <input type="text" id="myInput" onKeyUp={Buscar} className="form-control" placeholder="Buscar por nombre..." />
                            </div>
                        </div>
                        <div className="col-sm-6 text-right vertical-center">
                            <a href="#AddPropietario" className="btn btn-success mt-1" data-toggle="modal">
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
                            <th>Nombre</th>
                            <th>Dia</th>
                            <th>Mes</th>
                            <th>Año</th>
                            <th>Concepto</th>
                            <th>Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                    {propietarios && propietarios.map(propietario =>
                        <tr key={propietario.id}>
                                <td>{propietario.id}</td>
                                <td>{propietario.nombre}</td>
                                <td>{propietario.apellido}</td>
                                <td>{propietario.email}</td>
                                <td>{propietario.cedula}</td>
                                <td>{propietario.telefono}</td>
                            <td>
                                <a href={"#edit" + propietario.id} className="text-primary" data-toggle="modal"><i className="fas fa-edit"></i></a>
                                      |  
                                <a href={"#delete" + propietario.id} className="text-danger" data-toggle="modal"><i className="fas fa-trash-alt"></i></a>
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
                            <input id="monto" type="text" className="form-control" required/>
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" style={{width: '100px'}}>Fecha</span>
                            </div>
                            <input id="fecha" type="date" className="form-control" required/>
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Concepto</span>
                            </div>
                            <input id="concepto" type="text" className="form-control" required/>
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
{/* EDITAR --> Creación de un Modal con un Formulario por cada registro del CRUD */}    
{/*   EXPLICACION:  Entonces, como se crea un modal por cada item en total seran un monton de input text 
               por eso para saber cual input es cual se concatena el id del propietario con el nombre 
               del campo para que luego se envie a la funcion editar el cual recibe el propietario y de ahi
               se extrae el id y con ese id se puede saber cuales input le corresponden. Es decir, 
                id={propietario.id + "nombre"} es lo mismo que por ejemplo id="1nombre"  */}  
{propietarios && propietarios.map(propietario =>
    <div key={propietario.id} id={"edit" + propietario.id} className="modal fade">
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
                                <span className="input-group-text" style={{width: '100px'}}>Nombre</span>
                            </div>
                            <input id={propietario.id + "nombre"} defaultValue={propietario.nombre} type="text" className="form-control" required/>
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" style={{width: '100px'}}>Apellido</span>
                            </div>
                            <input id={propietario.id + "apellido"} defaultValue={propietario.apellido} type="text" className="form-control" required/>
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Correo electronico</span>
                            </div>
                            <input id={propietario.id + "email"} defaultValue={propietario.email} type="email" className="form-control" required/>
                        </div> 
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" style={{width: '100px'}}>Cedula</span>
                            </div>
                            <input id={propietario.id + "cedula"} defaultValue={propietario.cedula} type="text" className="form-control" required/>
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" style={{width: '100px'}}>Telefono</span>
                            </div>
                            <input id={propietario.id + "telefono"} defaultValue={propietario.telefono} type="text" className="form-control" required/>
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" style={{width: '100px'}}>Clave</span>
                            </div>
                            <input id={propietario.id + "clave"} defaultValue={propietario.clave} type="password" className="form-control" required/>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <input type="button" className="btn btn-default" data-dismiss="modal" defaultValue="Cancel" />
                        <input type="button" onClick={(e) => Modificar(e, propietario)} data-dismiss="modal" className="btn btn-primary" value="Modificar" />
                    </div>
                </form>
            </div>
        </div>
    </div>
)}
{/* ELIMINAR --> Creación de un Modal con un Formulario por cada registro del CRUD */}
{propietarios && propietarios.map(propietario =>
    <div key={propietario.id} id={"delete" + propietario.id} className="modal fade">
        <div className="modal-dialog">
            <div className="modal-content">
                <form>
                    <div className="modal-header">
                        <h4 className="modal-title">Alerta de confirmación</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                    </div>
                    <div className="modal-body">
                        <p className="text-center">¿Estas seguro que desea eliminar este propietario?</p>
                        <p className="text-danger text-center"><small>{propietario.nombre}</small></p>
                        <p className="text-danger text-center"><small>{propietario.email}</small></p>
                    </div>
                    <div className="modal-footer">
                    <input type="button" className="btn btn-default" data-dismiss="modal" defaultValue="Cancel" />
                        <input type="button" onClick={(e) => Eliminar(e, propietario)} data-dismiss="modal" className="btn btn-danger" value="Eliminar" />
                    </div>
                </form>
            </div>
        </div>
    </div>
)}    
</div>

)


function Agregar() { // Funcion para agregar
    var gasto = {monto: "", fecha: "", dia: 0, mes: 0, año: 0, concepto:"", active: true}; 
    gasto.monto = (document.getElementById("monto") as HTMLInputElement).value;
    gasto.fecha = (document.getElementById("fecha") as HTMLInputElement).value;
    var fechaArray = gasto.fecha.split("-");
    gasto.dia = parseInt(fechaArray[2]);
    gasto.mes = parseInt(fechaArray[1]);;
    gasto.año = parseInt(fechaArray[0]);;
    gasto.concepto = (document.getElementById("concepto") as HTMLInputElement).value;
    console.log(gasto);
    /*
    fetch('http://localhost:4000/graphql', { // Envio POST al backend con el query para Crear Propietario
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: `
        mutation{
            createPropietario(nombre: "${propietario.nombre}", apellido: "${propietario.apellido}", email: "${propietario.email}", cedula: "${propietario.cedula}", telefono: "${propietario.telefono}", clave: "${propietario.clave}", administrador: false, active: true){
                id
                nombre
                apellido
                email
                cedula
                telefono
                clave
                active
                }
            }
        ` }),
    })
    .then(res => res.json())
    .then(res => console.log(res))
    .then(res => location.reload()) 
    */
}


function Modificar(e, propietario) { // Funcion para modificar
    // Recibiendo el objeto completo entonces sabemos el id y con eso redefinimos el objeto pero con los input que les corresponden para poder editarlo
    propietario.nombre = (document.getElementById(`${propietario.id + "nombre"}`) as HTMLInputElement).value; // Tomo los nombre de input correspondiente al propietario
    propietario.apellido = (document.getElementById(`${propietario.id + "apellido"}`) as HTMLInputElement).value; // Tomo los apellido de input correspondiente al propietario
    propietario.email = (document.getElementById(`${propietario.id + "email"}`) as HTMLInputElement).value; // Tomo los email de input correspondiente al propietario
    propietario.cedula = (document.getElementById(`${propietario.id + "cedula"}`) as HTMLInputElement).value; // Tomo los cedula de input correspondiente al propietario
    propietario.telefono = (document.getElementById(`${propietario.id + "telefono"}`) as HTMLInputElement).value; // Tomo los telefono de input correspondiente al propietario
    propietario.clave = (document.getElementById(`${propietario.id + "clave"}`) as HTMLInputElement).value; // Tomo los clave de input correspondiente al propietario
    fetch('http://localhost:4000/graphql', { // Envio POST al backend con el query para Editar Propietario
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: `
    mutation{
        updatePropietario(id: ${propietario.id} , nombre: "${propietario.nombre}" , apellido: "${propietario.apellido}" , email: "${propietario.email}" , cedula: "${propietario.cedula}", telefono: "${propietario.telefono}", clave: "${propietario.clave}", administrador: false, active: true){
          id
          nombre
          apellido
          email
          cedula
          telefono
          clave
          active
        }
      }
    ` }),
    })
    .then(res => res.json())
    .then(res => console.log(res))
    .then(res => location.reload()) // Refresco para que se vean los cambios en la Tabla
}

function Eliminar(e, propietario) { // Funcion para editar
    // Recibiendo el objeto completo entonces sabemos el id y como que lo modificamos completo pero realmente sera solo el atributi active
    fetch('http://localhost:4000/graphql', { // Envio POST al backend con el query para Editar Propietario
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: `
    mutation{
        updatePropietario(id: ${propietario.id} , nombre: "${propietario.nombre}" , apellido: "${propietario.apellido}" , email: "${propietario.email}" , cedula: "${propietario.cedula}", telefono: "${propietario.telefono}", clave: "${propietario.clave}", administrador: false, active: false){
          id
          nombre
          apellido
          email
          cedula
          telefono
          clave
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



export default Crud