import Layout from '../components/Layout'
import GastosCRUD from '../components/GastosCRUD'

// VISTA DE LA PAGINA HTML Y LUEGO ALGUNOS CSS
const Propietarios = ({propietarios}) => (
<Layout title="Plurdomo">
    <div className="card border-secondary mb-3 mw-500">
        <div className="card-header"><h3 className="text-center">Gastos</h3></div>
        <div className="card-body">
            <GastosCRUD propietarios = {propietarios}/>
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
  
Propietarios.getInitialProps = async (ctx) => {
        const res = await fetch('http://localhost:4000/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: `
        query{
            getPropietarios{
              id
              nombre
              apellido
              email
              cedula
              telefono
              clave
              administrador
              active
            }
          }
        ` }),
        }) 
        const respuesta = await res.json()
        console.log(respuesta)
        console.log(respuesta.data)
        return { propietarios: respuesta.data.getPropietarios}

}

export default Propietarios
