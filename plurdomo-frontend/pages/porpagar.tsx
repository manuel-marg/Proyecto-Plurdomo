import Layout from '../components/Layout'
import PagarCRUD from '../components/PagarCRUD'

// VISTA DE LA PAGINA HTML Y LUEGO ALGUNOS CSS
const PorPagar = ({ pagos }) => (
    <Layout title="Plurdomo">
        <div className="card border-secondary mb-3 mw-500">
            <div className="card-header"><h3 className="text-center">Por pagar</h3></div>
            <div className="card-body">
                <PagarCRUD pagos = { pagos } />
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
PorPagar.getInitialProps = async (ctx) => {
        const res = await fetch('http://localhost:4000/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: `
        query{
            getPagosPen{
                id
                monto
                dia
                mes
                anio
                id_factura
                pendiente
                pagado
                active
              }
          }
        ` }),
        }) 
        const respuesta = await res.json()
        console.log(respuesta)
        console.log(respuesta.data)
        return { pagos: respuesta.data.getPagosPen}

}
    export default PorPagar