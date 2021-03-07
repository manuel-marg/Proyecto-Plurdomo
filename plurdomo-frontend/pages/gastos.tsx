import Layout from '../components/Layout'
import GastosCRUD from '../components/GastosCRUD'

// VISTA DE LA PAGINA HTML Y LUEGO ALGUNOS CSS
const Gastos = ({ gastos }) => (
<Layout title="Plurdomo">
    <div className="card border-secondary mb-3 mw-500">
        <div className="card-header"><h3 className="text-center">Gastos</h3></div>
        <div className="card-body">
            <GastosCRUD gastos = { gastos }/>
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
              active
            }
          }
        ` }),
        }) 
        const respuesta = await res.json()
        console.log(respuesta)
        console.log(respuesta.data)
        return { gastos: respuesta.data.getGastos}

}

export default Gastos
