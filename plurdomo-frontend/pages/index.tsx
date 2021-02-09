import Head from 'next/head'

// VISTA DE LA PAGINA HTML Y LUEGO ALGUNOS CSS
const IndexPage = () => (
<div>
  <Head>
  <title>Plurdomo</title>
  <meta charSet="utf-8" />
  <meta name="viewport" content="initial-scale=1.0, width=device-width" />
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/litera/bootstrap.min.css" />
  <link rel="icon" href="https://icons.getbootstrap.com/icons/building.svg"/>
  </Head>
<main className="form-signin">
  <form>
  <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" className="bi bi-building" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694L1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"/>
  <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z"/>
</svg>

    <h1 className="h1 mb-3 mt-3 fw-normal">Plurdomo</h1>
    <label htmlFor="inputEmail" className="visually-hidden">Email address</label>
    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required />
    <label htmlFor="inputPassword" className="visually-hidden">Password</label>
    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
    <div className="checkbox mb-3">
      <label>
        <input type="checkbox" defaultValue="remember-me" /> Recordar contraseña
      </label>
    </div>
    <button className="w-100 btn btn-lg btn-primary" type="button" onClick={Login}>Aceptar</button>
  </form>
</main>
<style jsx>{` 
html,
body {
    height: 100%;
}

main {
  text-align: center;
}

body {
    text-align: center;
    align-items: center;
    padding-top: 40px;
    padding-bottom: 40px;
    background-color: #f5f5f5;
}

.form-signin {
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: auto;
}

.form-signin .checkbox {
    font-weight: 400;
}

.form-signin .form-control {
    position: relative;
    box-sizing: border-box;
    height: auto;
    padding: 10px;
    font-size: 16px;
}

.form-signin .form-control:focus {
    z-index: 2;
}

.form-signin input[type="email"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
}
      `}</style>


</div>
)

// FUNCIONES

function Login() {  // Un login muy simple 
  var usuario = {email:"", contrasena:""}; // Creo un objeto llamado usuario
  usuario.email = (document.getElementById("inputEmail") as HTMLInputElement).value; // Obtengo valores de el input email
  usuario.contrasena = (document.getElementById("inputPassword") as HTMLInputElement).value; // Obtengo valores de el input clave
  if (usuario.email == "admin@admin.com" && usuario.contrasena == "123"){ // Comparo si es el "admin"
    location.href ="/dashboard"; // Redirecciono a dashboard
  }
  console.log(usuario)
}

export default IndexPage
