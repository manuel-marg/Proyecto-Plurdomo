import Layout from '../components/Layout'
import FacturasCRUD from '../components/FacturasCRUD'

// VISTA DE LA PAGINA HTML Y LUEGO ALGUNOS CSS
const Facturas = ({ facturas, condominios }) => (
<Layout title="Plurdomo">
    <div className="card border-secondary mb-3 mw-500">
        <div className="card-header"><h3 className="text-center">Facturas</h3></div>
        <div className="card-body">
            <FacturasCRUD facturas = { facturas } condominios = { condominios }/>
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

        const res2 = await fetch('http://localhost:4000/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: `
        query{
            getCondominio(id:1){
              id
              nombre
              municipio
              estado
              codigo_urb
              active
            }
          }
        ` }),
        }) 
        const respuesta2 = await res2.json()
        const condominios = await respuesta2.data.getCondominio
        console.log(condominios)


        var facturasRes = respuesta.data.getFacturas
        let facturasNor = facturasRes.filter((factura)=>{
            if(factura.historico == false && factura.active == true){
              return factura;
            }
        });

      return { facturas: facturasNor , condominios: condominios}

}

export default Facturas
