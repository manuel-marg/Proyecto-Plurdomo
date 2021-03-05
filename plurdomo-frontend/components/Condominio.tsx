import React, { ReactNode } from 'react'


const Crud = ({ condominios }) => (

<div>
   <div className="container-xl">
      <div>
         <div className="table-wrapper">
            <div className="table-title">
               <div className="row">
                  <div className="col-sm-6">
                     <h1 className="h3 mb-3 fw-normal">Datos del condominio</h1>
                  </div>
                  <div className="col-sm-6 text-right vertical-center">
                     <a href="#" onClick={(e) => Guardar(condominios) } className="btn btn-success mt-1" data-toggle="modal">
                     <i className="fas fa-save"></i>
                     <span> Guardar</span>
                     </a>
                  </div>
               </div>
            </div>
            {condominios && condominios.map(condominio =>
            <div key={condominio.id}>
                  <div className="input-group mb-3">
                     <div className="input-group-prepend">
                        <span className="input-group-text" style={{width: '100px'}}>Nombre</span>
                     </div>
                     <input id="nombre" defaultValue={condominio.nombre} type="text" className="form-control" required/>
                  </div>
               
               <div className="input-group mb-3">
                  <div className="input-group-prepend">
                     <span className="input-group-text" style={{width: '100px'}}>Codigo</span>
                  </div>
                  <input id="codigo_urb" defaultValue={condominio.codigo_urb} type="text" className="form-control" required/>
               </div>
              
                  <div className="input-group mb-3">
                     <div className="input-group-prepend">
                        <span className="input-group-text" style={{width: '100px'}}>Estado</span>
                     </div>
                     <input id="estado" defaultValue={condominio.estado}  type="text" className="form-control" required/>
                  </div>
               
               <div className="input-group mb-3">
                  <div className="input-group-prepend">
                     <span className="input-group-text" style={{width: '100px'}}>Municipio</span>
                  </div>
                  <input id="municipio" defaultValue={condominio.municipio} type="text" className="form-control" required/>
               </div>
            </div>
            
            )}
     </div>
     </div></div>
</div>
)


function Guardar( conf ) { // Funcion para Guardar los cambios
    var condominio = {nombre: "", codigo_urb:"", estado:"", municipio:"", active: true};
    condominio.nombre = (document.getElementById("nombre") as HTMLInputElement).value; 
    condominio.codigo_urb = (document.getElementById("codigo_urb") as HTMLInputElement).value; 
    condominio.estado = (document.getElementById("estado") as HTMLInputElement).value; 
    condominio.municipio = (document.getElementById("municipio") as HTMLInputElement).value; 
    if( conf == undefined){
        // Crear porque es la primera vez
        fetch('http://localhost:4000/graphql', { // Envio POST al backend con el query para Editar Propietario
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: `
        mutation{
            createCondominio(nombre: "${condominio.nombre}" , municipio: "${condominio.municipio}" , estado: "${condominio.estado}" , codigo_urb: "${condominio.codigo_urb}" , active: true){
              id
              nombre
              municipio
              estado
              codigo_urb
              active
            }
        }    
        ` }),
        })
        .then(res => res.json())
        .then(res => console.log(res))
        .then(res => location.reload()) 
    }else{  
    // Actulizo la info nada mas    
    fetch('http://localhost:4000/graphql', { 
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: `
    mutation{
        updateCondominio(id: 1 , nombre: "${condominio.nombre}" , municipio: "${condominio.municipio}" , estado: "${condominio.estado}" , codigo_urb: "${condominio.codigo_urb}" , active: true){
          id
          nombre
          municipio
          estado
          codigo_urb
          active
        }
      }
    ` }),
    })
    .then(res => res.json())
    .then(res => console.log(res))
    .then(res => location.reload()) 
    }
}

export default Crud