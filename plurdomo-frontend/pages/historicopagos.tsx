import Layout from '../components/Layout'
import HistoricoPagos from '../components/HistoricoPagos'

const HistoricodePagos = ({pagos}) => (
    <Layout title="Plurdomo">
        <div className="card border-secondary mb-3 mw-500">
            <div className="card-header"><h3 className="text-center">Historico de Pagos</h3></div>
            <div className="card-body">
                <HistoricoPagos pagos = {pagos}/>
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
HistoricodePagos.getInitialProps = async (ctx) => {
        const res = await fetch('http://localhost:4000/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: `
        query{
            getHistoricoPagos{
                id
                monto
                dia
                mes
                anio
                id_factura
                pendiente
                active
              }
          }
        ` }),
        }) 
        const respuesta = await res.json()
        console.log(respuesta)
        console.log(respuesta.data)
        return { pagos: respuesta.data.getHistoricoPagos}

}

    export default HistoricodePagos