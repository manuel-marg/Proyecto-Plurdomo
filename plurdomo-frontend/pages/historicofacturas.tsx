import Layout from '../components/Layout'
import HistoricoFacturaCrud from '../components/HistoricoFacturas'

// VISTA DE LA PAGINA HTML Y LUEGO ALGUNOS CSS
const Facturas = ({ facturas }) => (
<Layout title="Plurdomo">
    <div className="card border-secondary mb-3 mw-500">
        <div className="card-header"><h3 className="text-center">Facturas</h3></div>
        <div className="card-body">
            <HistoricoFacturaCrud facturas = { facturas }/>
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
  
Facturas.getInitialProps = async (ctx) => {
        const res = await fetch('http://localhost:4000/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: `
        query{
            getFacturas{
              id
              n_factura
              nombre
              gastos_comunes
              gastos_nocomunes
              deuda_total
              alicuota
              saldo
              dia_em
              mes_em
              anio_em
              id_inmueble
              historico
              active
            }
          }
        ` }),
        }) 
        const respuesta = await res.json()
        console.log(respuesta)
        console.log(respuesta.data)


        var facturasRes = respuesta.data.getFacturas
        let facturasNor = facturasRes.filter((factura)=>{
            if(factura.historico == true && factura.active == true){
              return factura;
            }
        });

      return { facturas: facturasNor }

}

export default Facturas
