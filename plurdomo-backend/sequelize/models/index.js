//Conexion con la Base de Datos.
import Sequelize from 'sequelize'


const sequelize = new Sequelize('plurdomo', 'root', '12345678', { //Modifica los datos para conectarte a la Bd
    host: '127.0.0.1',
    dialect: 'mysql'
})

const models = {
    propietario: sequelize.import('./propietario')
}

models.sequelize = sequelize
models.Sequelize = Sequelize

module.exports = models