import Layout from '../components/Layout'
import HistoricoPagados from '../components/HistoricoPagados'

const HistoricodePagados = ({pagos}) => (
    <Layout title="Plurdomo">
        <div className="card border-secondary mb-3 mw-500">
            <div className="card-header"><h3 className="text-center">Pagado</h3></div>
            <div className="card-body">
                <HistoricoPagados pagos = {pagos}/>
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
HistoricodePagados.getInitialProps = async (ctx) => {
        const res = await fetch('http://localhost:4000/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: `
        query{
            getPagados{
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
        return { pagos: respuesta.data.getPagados}

}

    export default HistoricodePagados