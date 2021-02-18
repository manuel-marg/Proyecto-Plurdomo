import Layout from '../components/Layout'
import Link from 'next/link'
import { render } from 'react-dom'

// VISTA DE LA PAGINA HTML Y LUEGO ALGUNOS CSS
const Dashboard = () => (
<Layout title="Plurdomo">
    <div className="card border-secondary mb-3 mw-500">
        <div className="card-header"><h3 className="text-center">Dashboard</h3></div>
        <div className="card-body text-center">
        <Link href="/inmuebles">
            <button type="button" className="btn btn-light m-1">
                <i className="far fa-building"></i>
                <br></br>
                Inmuebles
            </button>
        </Link>
        <Link href="/propietarios">
            <button type="button" className="btn btn-light m-1">
                <i className="fas fa-users"></i>
                <br></br>
                Propietarios
            </button>
        </Link>
        <Link href="/gastos">
            <button type="button" className="btn btn-light m-1">
                <i className="fas fa-file-invoice-dollar"></i>
                <br></br>
                Gastos
            </button>
        </Link>
        <Link href="/facturas">
            <button type="button" className="btn btn-light m-1">
                <i className="fas fa-receipt"></i>
                <br></br>
                Facturas
            </button>
        </Link>                            
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
        i{
            font-size: 3em;
        }
        button{
            width: 120px;
        }
        `}
    </style>
</Layout>
)
  
export default Dashboard
