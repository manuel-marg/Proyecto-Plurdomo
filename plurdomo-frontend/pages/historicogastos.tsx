import Layout from '../components/Layout'
import HistoricoGastos from '../components/HistoricoGastos'

// VISTA DE LA PAGINA HTML Y LUEGO ALGUNOS CSS
const HistoricodeGastos = ({gastos}) => (
<Layout title="Plurdomo">
    <div className="card border-secondary mb-3 mw-500">
        <div className="card-header"><h3 className="text-center">Historico de Gastos</h3></div>
        <div className="card-body">
            <HistoricoGastos gastos = {gastos}/>
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
  
HistoricodeGastos.getInitialProps = async (ctx) => {
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
              historico
              active
            }
          }
        ` }),
        }) 
        const respuesta = await res.json()
        //console.log(respuesta)
        var gastosRes = respuesta.data.getGastos
        let gastosHis = gastosRes.filter((gasto)=>{
            if(gasto.historico == true){
              return gasto;
            }
        });
        console.log(gastosHis)
        return { gastos: gastosHis}

}



export default HistoricodeGastos
