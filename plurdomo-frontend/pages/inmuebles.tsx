import Layout from '../components/Layout'
import InmuebleCRUD from '../components/InmueblesCRUD'
import { render } from 'react-dom'

// VISTA DE LA PAGINA HTML Y LUEGO ALGUNOS CSS
const Inmuebles = ({ edificios , aptos ,  casas }) => (
<Layout title="Plurdomo">
    <div className="card border-secondary mb-3 mw-500">
        <div className="card-header"><h3 className="text-center">Inmuebles</h3></div>
        <div className="card-body">
            <InmuebleCRUD edificios = {edificios} aptos = {aptos} casas = {casas}/>
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
  // Obtener todos los edificios
  const getEdificios = await fetch('http://localhost:4000/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: `
    query{
        getEdfs{
            id
            nombre
            active
       }
    }
    ` }),
    }) 
    const respuestaEdificios = await getEdificios.json()
    const edificios = await respuestaEdificios.data.getEdfs

    // Obtener todos los Aptos
    const getAptos = await fetch('http://localhost:4000/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: `
      query{
        getAptos{
          id
          nro
          piso
          id_edf
          id_inmueble
        }
      }
      ` }),
      }) 
      const respuestaAptos = await getAptos.json()
      const aptos = await respuestaAptos.data.getAptos

    // Obtener todos las casas
    const getCasas = await fetch('http://localhost:4000/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: `
      query{
        getCasas{
          id
          nombre
          nro
          id_inmueble
        }
      }
      ` }),
      }) 
      const respuestaCasas = await getCasas.json()
      const casas = await respuestaCasas.data.getCasas

      return { edificios: edificios , aptos: aptos , casas: casas }
}
  
export default Inmuebles
