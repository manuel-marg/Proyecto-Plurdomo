import Layout from '../components/Layout'
import GastosCRUD from '../components/GastosCRUD'

// VISTA DE LA PAGINA HTML Y LUEGO ALGUNOS CSS
const Gastos = ({ gastos , casas , aptos , edificios , aptosDelEdificio}) => (
<Layout title="Plurdomo">
    <div className="card border-secondary mb-3 mw-500">
        <div className="card-header"><h3 className="text-center">Gastos</h3></div>
        <div className="card-body">
            <GastosCRUD gastos = { gastos } casas = { casas } aptos = { aptos } edificios = { edificios } aptosDelEdificio = { aptosDelEdificio }/>
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
  
Gastos.getInitialProps = async (ctx) => {
        const res = await fetch('http://localhost:4000/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: `
        query{
            getGastos{
              id
              monto
              dia
              mes
              anio
              concepto
              tipo
              active
            }
          }
        ` }),
        }) 
        const respuesta = await res.json()
        console.log(respuesta)
        console.log(respuesta.data)

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

    var aptosDelEdificio = [];


      return { gastos: respuesta.data.getGastos , casas: casas , aptos: aptos , edificios: edificios }

}

export default Gastos
