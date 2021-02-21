import React, { ReactNode } from 'react'
import Link from 'next/link'

const InmuebleCRUD = ({ edificios , aptos ,  casas }) => (
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
                            <th className="text-center">ID_Inmueble</th>
                            <th className="text-center">Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                    {casas && casas.map(casa =>
                        <tr key={casa.id}>
                            <td className="text-center">{casa.id}</td>
                            <td className="text-center">{casa.nombre}</td>
                            <td className="text-center">{casa.nro}</td>
                            <td className="text-center">{casa.id_inmueble}</td>
                            <td className="text-center">
                                <a href={"#edit" + casa.id} className="text-primary" data-toggle="modal"><i className="fas fa-edit"></i></a>
                                      |  
                                <a href={"#delete" + casa.id} className="text-danger" data-toggle="modal"><i className="fas fa-trash-alt"></i></a>
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
            <th className="text-center">N°</th>
            <th className="text-center">Piso</th>
            <th className="text-center">ID_Edificio</th>
            <th className="text-center">ID_Inmueble</th>
            <th className="text-center">Opciones</th>
        </tr>
    </thead>
    <tbody>
    {aptos && aptos.map(apto =>
        <tr key={apto.id}>
            <td className="text-center">{apto.id}</td>
            <td className="text-center">{apto.nro}</td>
            <td className="text-center">{apto.piso}</td>
            <td className="text-center">{apto.id_edf}</td>
            <td className="text-center">{apto.id_inmueble}</td>
            <td className="text-center">
                <a href={"#info" + apto.id} onClick={(ID) => getDatos(apto.id_inmueble)} className="text-primary" data-toggle="modal"><i className="fas fa-eye"></i></a>
                      |   
                <a href={"#edit" + apto.id} className="text-primary" data-toggle="modal"><i className="fas fa-edit"></i></a>
                      |  
                <a href={"#delete" + apto.id} className="text-danger" data-toggle="modal"><i className="fas fa-trash-alt"></i></a>
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
                                <select className="custom-select" id="AddEdificio">
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
                                <input id="AddPiso" type="number" className="form-control" required/>
                            </div>        
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" style={{width: '100px'}}>N° Apto</span>
                                </div>
                                <input id="AddApto" type="number" className="form-control" required/>
                            </div> 
                        </div>

                        <div id="Casa" style={{display: 'none'}}>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" style={{width: '100px'}}>Nombre</span>
                                </div>
                                <input id="AddNombreCa" type="text" className="form-control" required/>
                            </div> 
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" style={{width: '100px'}}>N° Casa</span>
                                </div>
                                <input id="AddCasa" type="number" className="form-control" required/>
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
{/* EDITAR --> Creación de un Modal con un Formulario por cada registro del CRUD */}    
{/*   EXPLICACION:  Entonces, como se crea un modal por cada item en total seran un monton de input text 
               por eso para saber cual input es cual se concatena el id del propietario con el nombre 
               del campo para que luego se envie a la funcion editar el cual recibe el propietario y de ahi
               se extrae el id y con ese id se puede saber cuales input le corresponden. Es decir, 
                id={propietario.id + "nombre"} es lo mismo que por ejemplo id="1nombre"  */}  
{aptos && aptos.map(propietario =>
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
{aptos && aptos.map(propietario =>
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

{/* VER INFORMACION --> Ver informacion del inmueble */}
{aptos && aptos.map(apto =>
    <div key={apto.id} id={"info" + apto.id} className="modal fade">
        <div className="modal-dialog">
            <div className="modal-content">
                <form>
                    <div className="modal-header">
                        <h4 className="modal-title">Datos del Inmueble</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                    </div>
                    <div className="modal-body">
                        

                    <div className="row">
  <div className="col">
  <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" style={{width: '100px'}}>ID</span>
                            </div>
                            <input value={apto.id} type="number" step="any" className="form-control" required disabled/>
                        </div>
  </div>
  <div className="col">
  <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" style={{width: '100px'}}>N°</span>
                            </div>
                            <input value={apto.nro} type="number" step="any" className="form-control" required disabled/>
                        </div>
  </div>
</div>
<div className="row">
  <div className="col">
  <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" style={{width: '100px'}}>Piso</span>
                            </div>
                            <input value={apto.piso} type="number" step="any" className="form-control" required disabled/>
                        </div>
  </div>
  <div className="col">
  <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" style={{width: '100px'}}>ID Edif</span>
                            </div>
                            <input value={apto.id_edf} type="number" step="any" className="form-control" required disabled/>
                        </div>
  </div>
</div>
<div className="row">
  <div className="col">
  <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" style={{width: '100px'}}>Alicuota</span>
                            </div>
                            <input id={apto.id_inmueble + 'Alicuota'} type="number" step="any" className="form-control" required disabled/>
                        </div>
  </div>
  <div className="col">
  <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" style={{width: '100px'}}>Saldo</span>
                            </div>
                            <input id={apto.id_inmueble + 'Saldo'} type="number" step="any" className="form-control" required disabled/>
                        </div>
  </div>
</div>



                    </div>
                    <div className="modal-footer">
                    <input type="button" className="btn btn-default" data-dismiss="modal" defaultValue="Cancel" />
                        <input type="button" onClick={(e) => Eliminar(e, apto)} data-dismiss="modal" className="btn btn-danger" value="Eliminar" />
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

async function getDatos(ID) { // Esta funcion funciona para mostrar la tabla de casas o aptos
    console.log("Ejecutando funcion getDatos()" + ID)
    // Obtener los datos del inmuble que selecciono
    const getInmueble = await fetch('http://localhost:4000/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: `
      query{
        getInmueble(id: ${ID}){
          id
          alicuota
          saldo
          id_propietario
        }
      }
      ` }),
      }) 
      const respuestaInmueble = await getInmueble.json()
      const inmueble = await respuestaInmueble.data.getInmueble
      document.getElementById(ID + 'Alicuota').setAttribute('value',`${inmueble.alicuota}`);
      document.getElementById(ID + 'Saldo').setAttribute('value',`${inmueble.alicuota}`);

}

async function Agregar() { // Funcion para agregar
    var inmueble = {alicuota: "", saldo:"", id_propietario:"",active: true};  // Creo un Objeto propietario
    inmueble.alicuota = (document.getElementById("AddAlicuota") as HTMLInputElement).value; // Defino su nombre
    inmueble.saldo = (document.getElementById("AddSaldo") as HTMLInputElement).value; // Defino su apellido
    inmueble.id_propietario = null;
    console.log(inmueble);
    const res = await fetch('http://localhost:4000/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: `
        mutation{
            createInmueble(alicuota:${inmueble.alicuota}, saldo:${inmueble.saldo}, id_propietario:${inmueble.id_propietario}, active: true){
                id
                saldo
                alicuota
                id_propietario
              }
            }
        ` }),
        }) 
        const respuesta = await res.json()

        var tipo = (document.querySelector("#AddTipo")as HTMLInputElement).value;
        if(tipo == "Casa"){
            var casa = {nombre: "", nro:"",active: true};
            casa.nombre = (document.getElementById("AddNombreCa") as HTMLInputElement).value;
            casa.nro = (document.getElementById("AddCasa") as HTMLInputElement).value;
            const resp = await fetch('http://localhost:4000/graphql', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query: `
            mutation{
                createCasa(nombre: "${casa.nombre}" , nro:${casa.nro} , id_inmueble:${respuesta.data.createInmueble.id}, active:true){
                  id
                  nombre
                  nro
                  id_inmueble
                  active
                }
              }
            ` }),
            }) 
            const respu = await resp.json()
            .then(res => location.reload())

        } else if(tipo == "Apto"){
            var apto = { nro: "" , piso:"" , id_edf:"" , active: true };
            apto.piso = (document.getElementById("AddPiso") as HTMLInputElement).value;
            apto.nro = (document.getElementById("AddApto") as HTMLInputElement).value;
            apto.id_edf = (document.getElementById("AddEdificio") as HTMLInputElement).value;
            const resp = await fetch('http://localhost:4000/graphql', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query: `
            mutation{
                createApto(nro: ${apto.nro},piso: ${apto.piso}, id_edf:${apto.id_edf}, id_inmueble: ${respuesta.data.createInmueble.id}, active:true){
                  id
                  nro
                  piso
                  id_edf
                  id_inmueble
                  active
                }
              }
            ` }),
            }) 
            const respu = await resp.json()
            .then(res => location.reload())
        }

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
        updatePropietario(id: ${propietario.id} , nombre: "${propietario.nombre}" , apellido: "${propietario.apellido}" , email: "${propietario.email}" , cedula: "${propietario.cedula}", telefono: "${propietario.telefono}", clave: "${propietario.clave}", active: true){
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
        updatePropietario(id: ${propietario.id} , nombre: "${propietario.nombre}" , apellido: "${propietario.apellido}" , email: "${propietario.email}" , cedula: "${propietario.cedula}", telefono: "${propietario.telefono}", clave: "${propietario.clave}",  active: false){
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