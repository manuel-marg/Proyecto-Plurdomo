import Layout from '../components/Layout'
import InmuebleCRUD from '../components/InmueblesCRUD'
import { render } from 'react-dom'

// VISTA DE LA PAGINA HTML Y LUEGO ALGUNOS CSS
const Inmuebles = ({ edificios , aptos ,  casas , propietarios }) => (
<Layout title="Plurdomo">
    <div className="card border-secondary mb-3 mw-500">
        <div className="card-header"><h3 className="text-center">Inmuebles</h3></div>
        <div className="card-body">
            <InmuebleCRUD edificios = {edificios} aptos = {aptos} casas = {casas} propietarios = {propietarios} />
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
      const respuestaCasas = await getCasas.json()
      const casas = await respuestaCasas.data.getCasas

    // Obtener todos los propietarios
    const getPropietarios = await fetch('http://localhost:4000/graphql', {
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
          administrador
          active
        }
      }
      ` }),
      }) 
      const respuestaPropietarios = await getPropietarios.json()
      const propietarios = await respuestaPropietarios.data.getPropietarios

      return { edificios: edificios , aptos: aptos , casas: casas , propietarios: propietarios}
}
  


export default Inmuebles
