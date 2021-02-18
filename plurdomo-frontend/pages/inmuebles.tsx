import Layout from '../components/Layout'
import InmuebleCRUD from '../components/InmueblesCRUD'
import { render } from 'react-dom'

// VISTA DE LA PAGINA HTML Y LUEGO ALGUNOS CSS
const Inmuebles = ({inmuebles}) => (
<Layout title="Plurdomo">
    <div className="card border-secondary mb-3 mw-500">
        <div className="card-header"><h3 className="text-center">Inmuebles</h3></div>
        <div className="card-body">
            <InmuebleCRUD inmuebles = {inmuebles}/>
        </div>
    </div>
    <style jsx>
        {`
        .card{
          max-width: 750px;
          margin: 0 auto;
          float: none;
          margin-bottom: 10px;
        }
              `}
    </style>
</Layout>
)

Inmuebles.getInitialProps = async (ctx) => {
    const res = await fetch('http://localhost:4000/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: `
    query{
        getPropietarios{
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
    const respuesta = await res.json()
    console.log(respuesta)
    console.log(respuesta.data)
    return { propietarios: respuesta.data.getPropietarios}

}
  
export default Inmuebles
