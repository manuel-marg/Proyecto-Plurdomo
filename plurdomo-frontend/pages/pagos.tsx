import Layout from '../components/Layout'
import PagosCRUD from '../components/PagosCRUD'

// VISTA DE LA PAGINA HTML Y LUEGO ALGUNOS CSS
const Pagos = ({ pagos }) => (
    <Layout title="Plurdomo">
        <div className="card border-secondary mb-3 mw-500">
            <div className="card-header"><h3 className="text-center">Pagos</h3></div>
            <div className="card-body">
                <PagosCRUD pagos = { pagos } />
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

Pagos.getInitialProps = async (ctx) => {
        const res = await fetch('http://localhost:4000/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: `
        query{
            getPagos{
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
        return { pagos: respuesta.data.getPagos}

}

    export default Pagos