//Conexion con la Base de Datos.
import Sequelize from 'sequelize'


const sequelize = new Sequelize('plurdomo', 'root', 'Mysql1234', { //Modifica los datos para conectarte a la Bd
    host: '127.0.0.1',
    dialect: 'mysql'
})

const models = {
    propietario: sequelize.import('./propietario'),
    inmueble: sequelize.import('./inmueble'),
    condominio: sequelize.import('./condominio'),

}

models.sequelize = sequelize
models.Sequelize = Sequelize

module.exports = models