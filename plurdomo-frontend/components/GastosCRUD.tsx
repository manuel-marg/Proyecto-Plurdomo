import React, { ReactNode } from 'react'
import { getStaticProps } from '../pages/users/[id]';


const Crud = ({ gastos , casas , aptos , edificios , aptosDelEdificio}) => (
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
                            <a href="historicogastos" className="btn btn-outline-secondary m-1">
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
                            <th>Concepto</th>
                            <th>Tipo</th>
                            <th>Dia</th>
                            <th>Mes</th>
                            <th>Año</th>
                            <th>Monto</th>
                            <th className="text-center">Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                    {gastos && gastos.map(gasto =>
                        <tr key={gasto.id}>
                                <td>{gasto.id}</td>
                                <td>{gasto.concepto}</td>
                                <td>{gasto.tipo}</td>
                                <td>{gasto.dia}</td>
                                <td>{gasto.mes}</td>
                                <td>{gasto.anio}</td>
                                <td>{gasto.monto}</td>
                            <td className="text-center">
                                <a href={"#delete" + gasto.id} className="text-danger" data-toggle="modal"><i className="fas fa-trash-alt"></i></a>
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
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Concepto</span>
                            </div>
                            <input id="concepto" type="text" className="form-control" required/>
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" style={{width: '100px'}}>Tipo</span>
                            </div>
                            <select className="custom-select" onChange={TipoGasto} id="tipo">
                                <option value="Null" selected>Seleccione...</option>
                                <option value="Comun">Comun</option>
                                <option value="No Comun">No comun</option>
                            </select>
                        </div> 
                        <div id="Comun" style={{display: 'none'}} className="text-center fs-6">
                            <p className="text-muted">
                             Se cargara a todos los inmuebles del condominio.
                            </p>
                        </div>
                        <div id="NoComun" style={{display: 'none'}}>
                        <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" style={{width: '100px'}}>Forma</span>
                                </div>
                                <select className="custom-select" onChange={TipoInmueble} id="tipoInmueble">
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
                                <select className="custom-select" onChange={AptosEdificio} id="edificio">
                                    <option value="null" selected>Seleccione...</option>
                                        {/* Imprimiendo los edificios que hay en la tabla de edificios*/}  
                                        {edificios && edificios.map(edificio =>
                                            <option value={edificio.id}>{edificio.nombre}</option>
                                        )}
                                </select>
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" style={{width: '100px'}}>Apto</span>
                                </div>
                                <select className="custom-select" id="apto">
                                    <option selected>Seleccione...</option>
                                        {aptosDelEdificio && aptosDelEdificio.map(apto =>
                                            <option value={apto.id}>Piso: {apto.piso} - N°: {apto.numero}</option>
                                        )}
                                </select>
                            </div>
                            </div>
                            </div>
                            <div id="Casa" style={{display: 'none'}}>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" style={{width: '100px'}}>Casa</span>
                                </div>
                                <select className="custom-select" id="casa">
                                    <option selected>Seleccione...</option>
                                        {/* Imprimiendo los edificios que hay en la tabla de edificios*/}  
                                        {casas && casas.map(casa =>
                                            <option value={casa.id}>Nombre de la casa: {casa.nombre} - N°: {casa.numero}</option>
                                        )}
                                </select>
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
               por eso para saber cual input es cual se concatena el id del gasto con el nombre 
               del campo para que luego se envie a la funcion editar el cual recibe el gasto y de ahi
               se extrae el id y con ese id se puede saber cuales input le corresponden. Es decir, 
                id={gasto.id + "nombre"} es lo mismo que por ejemplo id="1nombre"  */}  
{gastos && gastos.map(gasto =>
    <div key={gasto.id} id={"edit" + gasto.id} className="modal fade">
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
                                <span className="input-group-text" style={{width: '100px'}}>Monto</span>
                            </div>
                            <input id={gasto.id + "monto"} defaultValue={gasto.monto} type="text" className="form-control" required/>
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" style={{width: '100px'}}>Fecha</span>
                            </div>
                            <input id={gasto.id + "fecha"} defaultValue={gasto.fecha} type="date" className="form-control" required/>
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Concepto</span>
                            </div>
                            <input id={gasto.id + "concepto"} defaultValue={gasto.concepto} type="text" className="form-control" required/>
                        </div> 
                    </div>
                    <div className="modal-footer">
                        <input type="button" className="btn btn-default" data-dismiss="modal" defaultValue="Cancel" />
                        <input type="button" data-dismiss="modal" className="btn btn-primary" value="Modificar" />
                    </div>
                </form>
            </div>
        </div>
    </div>
)}
{/* ELIMINAR --> Creación de un Modal con un Formulario por cada registro del CRUD */}
{gastos && gastos.map(gasto =>
    <div key={gasto.id} id={"delete" + gasto.id} className="modal fade">
        <div className="modal-dialog">
            <div className="modal-content">
                <form>
                    <div className="modal-header">
                        <h4 className="modal-title">Alerta de confirmación</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                    </div>
                    <div className="modal-body">
                        <p className="text-center">¿Estas seguro que desea eliminar este gasto?</p>
                        <p className="text-danger text-center"><small>{gasto.concepto}</small></p>
                    </div>
                    <div className="modal-footer">
                    <input type="button" className="btn btn-default" data-dismiss="modal" defaultValue="Cancel" />
                        <input type="button" onClick={(e) => Eliminar( gasto )} data-dismiss="modal" className="btn btn-danger" value="Eliminar" />
                    </div>
                </form>
            </div>
        </div>
    </div>
)}    
</div>

)

function TipoGasto() {
    var tipo = (document.querySelector("#tipo")as HTMLInputElement).value;

    (document.querySelector("#Comun")as HTMLInputElement).style.display = 'none';
    (document.querySelector("#NoComun")as HTMLInputElement).style.display = 'none';
   
    if (tipo == "Comun"){
        (document.querySelector("#Comun")as HTMLInputElement).style.display = 'block';
    }else if (tipo == "No Comun"){
        (document.querySelector("#NoComun")as HTMLInputElement).style.display = 'block';
    }
}

function TipoInmueble() {
    var tipo = (document.querySelector("#tipoInmueble")as HTMLInputElement).value;

    (document.querySelector("#Apto")as HTMLInputElement).style.display = 'none';
    (document.querySelector("#Casa")as HTMLInputElement).style.display = 'none';
   
    if (tipo == "Apto"){
        (document.querySelector("#Apto")as HTMLInputElement).style.display = 'block';
    }else if (tipo == "Casa"){
        (document.querySelector("#Casa")as HTMLInputElement).style.display = 'block';
    }
}

async function AptosEdificio() {
    var id_inmueble = (document.querySelector("#edificio")as HTMLInputElement).value;
    if(id_inmueble != "null"){
    const res = await fetch('http://localhost:4000/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: `
        query{
            getAptosEdificio(id_inmueble: ${id_inmueble}){
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
        const respuesta = await res.json()
        //console.log(respuesta.data.getAptosEdificio)
        var aptos = respuesta.data.getAptosEdificio;
        
        aptos.forEach(function(apto) {
            var x = document.getElementById("apto");
            var option = document.createElement("option");
            option.value = `${apto.id}`;
            option.text = `${"N°: " + apto.numero + " -  Piso: " + apto.piso }`;
            x.add(option);
        });  

      
    }
}

async function Agregar() { // Funcion para agregar
    var gasto = {monto: "", fecha: "", dia: 0, mes: 0, año: 0, tipo: "", concepto:"", active: true}; 
    gasto.monto = (document.getElementById("monto") as HTMLInputElement).value;
    gasto.fecha = (document.getElementById("fecha") as HTMLInputElement).value;
    var fechaArray = gasto.fecha.split("-");
    gasto.dia = parseInt(fechaArray[2]);
    gasto.mes = parseInt(fechaArray[1]);;
    gasto.año = parseInt(fechaArray[0]);;
    gasto.tipo = (document.getElementById("tipo") as HTMLInputElement).value;
    gasto.concepto = (document.getElementById("concepto") as HTMLInputElement).value;
    
    const createGasto = await fetch('http://localhost:4000/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: `
        mutation{
            createGasto(monto: ${gasto.monto}, tipo: "${gasto.tipo}", dia: ${gasto.dia}, mes: ${gasto.mes}, anio: ${gasto.año}, concepto: "${gasto.concepto}",  historico: false, active: true){
              id
              monto
              dia
              mes
              anio
              concepto
              active
            }
          }
        ` }),
        }) 
        const respuestaGasto = await createGasto.json()
        const gastoCreado = await respuestaGasto.data.createGasto
        console.log(gastoCreado)
    
    if (gasto.tipo == "Comun"){
        console.log("Gasto Comun")
        const getInmuebles = await fetch('http://localhost:4000/graphql', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query: `
            query{
                getInmuebles{
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
            const respuestaInmuebles = await getInmuebles.json()
            const inmuebles = await respuestaInmuebles.data.getInmuebles
            inmuebles.forEach(function(inmueble) {
                fetch('http://localhost:4000/graphql', { 
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ query: `
                mutation{
                    generarGasto(id_gasto: ${gastoCreado.id}, id_inmueble: ${inmueble.id}, active: true){
                      id_gasto
                      id_inmueble
                      active
                    }
                  }
                    ` }),
                })
                .then(res => res.json())
                .then(res => console.log(res))
                //.then(res => location.reload()) 
            }); 
    }else if (gasto.tipo == "No Comun"){
        var id_inmueble = "";
        if( (document.getElementById("tipoInmueble") as HTMLInputElement).value == "Apto"){
            id_inmueble = (document.getElementById("apto") as HTMLInputElement).value;
        }else if( (document.getElementById("tipoInmueble") as HTMLInputElement).value == "Casa"){
            id_inmueble = (document.getElementById("casa") as HTMLInputElement).value;
        }
        fetch('http://localhost:4000/graphql', { // Envio POST al backend con el query para Editar Propietario
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: `
        mutation{
            generarGasto(id_gasto: ${gastoCreado.id}, id_inmueble: ${id_inmueble}, active: true){
              id_gasto
              id_inmueble
              active
            }
          }
        ` }),
        })
        .then(res => res.json())
        .then(res => console.log(res))
        //.then(res => location.reload()) // Refresco para que se vean los cambios en la Tabla
    }
    location.reload();
}



function Eliminar(gasto) { 
    console.log(gasto)
    // Recibiendo el objeto completo entonces sabemos el id y como que lo modificamos completo pero realmente sera solo el atributi active
    fetch('http://localhost:4000/graphql', { // Envio POST al backend con el query para Editar Propietario
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: `
    mutation{
        updateGasto(id:  ${gasto.id} , monto:  ${gasto.monto} , dia:  ${gasto.dia} , mes:  ${gasto.mes} , anio:  ${gasto.anio} , concepto:   "${gasto.concepto}" , tipo: "${gasto.tipo}", historico: false, active: false){
          id
          monto
          dia
          mes
          anio
          concepto
          active
        }
      }
    ` }),
    })
    .then(res => res.json())
    .then(res => console.log(res))

    fetch('http://localhost:4000/graphql', { // Envio POST al backend con el query para Editar Propietario
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: `
    mutation{
        deleteGenerar_Gasto(id: ${gasto.id}){
         id_gasto
         id_inmueble
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