import Layout from '../components/Layout'
import EdfCrud from '../components/EdfsCrud'
import { render } from 'react-dom'

// VISTA DE LA PAGINA HTML Y LUEGO ALGUNOS CSS
const Edfs = ({edfs}) => (
<Layout title="Plurdomo">
    <div className="card border-secondary mb-3 mw-500">
        <div className="card-header"><h3 className="text-center">Edificios</h3></div>
        <div className="card-body">
            <EdfCrud edfs = {edfs}/>
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
  
Edfs.getInitialProps = async (ctx) => {
        const res = await fetch('http://localhost:4000/graphql', {
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
        const respuesta = await res.json()
        console.log(respuesta)
        console.log(respuesta.data)
        return { edfs: respuesta.data.getEdfs}

}

export default Edfs
