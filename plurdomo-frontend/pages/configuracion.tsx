import Layout from '../components/Layout'
import Condominio from '../components/Condominio'
import { render } from 'react-dom'

// VISTA DE LA PAGINA HTML Y LUEGO ALGUNOS CSS
const Propietarios = ({ condominios }) => (
<Layout title="Plurdomo">
    <div className="card border-secondary mb-3 mw-500">
        <div className="card-header"><h3 className="text-center">Configuración</h3></div>
        <div className="card-body">
            <Condominio condominios = { condominios }/>
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
  
Propietarios.getInitialProps = async (ctx) => {
        const res = await fetch('http://localhost:4000/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: `
        query{
            getCondominios{
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
        const respuesta = await res.json()
        console.log(respuesta)
        console.log(respuesta.data)
        // Si es la primera vez que se usa el sistema se llena el codominio como vacio
        if (respuesta.data.getCondominios.length === 0){
          fetch('http://localhost:4000/graphql', { 
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ query: `
          mutation{
              createCondominio(nombre: "" , municipio: "" , estado: "" , codigo_urb: "" , active: true){
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
        }

        return { condominios: respuesta.data.getCondominios}

}

export default Propietarios
