import Layout from '../components/Layout'
import Crud from '../components/Crud'
import { render } from 'react-dom'

// VISTA DE LA PAGINA HTML Y LUEGO ALGUNOS CSS
const Dashboard = ({propietarios}) => (
<Layout title="Plurdomo">
    <div className="card border-secondary mb-3 mw-500">
        <div className="card-header"><h3 className="text-center">Dashboard</h3></div>
        <div className="card-body">
            <Crud propietarios = {propietarios}/>
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
  
Dashboard.getInitialProps = async (ctx) => {
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

/*  EJEMPLO QUE FUNCIONO (NO BORRAR PARA USAR A FUTURO)
Dashboard.getInitialProps = async (ctx) => {
        const res = await fetch('http://localhost:4000/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: `
        query{
            getPropietario(id: 2){
              id
              nombre
              apellido
              email
              active
            }
          }
        ` }),
        }) 
        const respuesta = await res.json()
        console.log(respuesta)
        console.log(respuesta.data)
        return { propietarios:respuesta.data.getPropietario}

}*/

export default Dashboard
