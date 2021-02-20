//Conexion con la Base de Datos.
import Sequelize from 'sequelize'


const sequelize = new Sequelize('plurdomo', 'root', '2001*JaJa', { //Modifica los datos para conectarte a la Bd
    host: '127.0.0.1',
    dialect: 'mysql'
})

const models = {
    propietario: sequelize.import('./propietario'),
    apto: sequelize.import('./apto'),
    inmueble: sequelize.import('./inmueble'),
    casa: sequelize.import('./casa'),
    edf: sequelize.import('./edf'),
}

models.sequelize = sequelize
models.Sequelize = Sequelize

module.exports = models