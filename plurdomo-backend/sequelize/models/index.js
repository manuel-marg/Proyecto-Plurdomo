//Conexion con la Base de Datos.
import Sequelize from 'sequelize'


const sequelize = new Sequelize('plurdomo', 'root', '2001*JaJa', { //Modifica los datos para conectarte a la Bd
    host: '127.0.0.1',
    dialect: 'mysql'
})

const models = {
    propietario: sequelize.import('./propietario'),
    inmueble: sequelize.import('./inmueble'),
    condominio: sequelize.import('./condominio'),
    instrumento_pago: sequelize.import('./instrumento_pago'),
    pago: sequelize.import('./pago'),
    gasto: sequelize.import('./gasto'),
    factura: sequelize.import('./factura'),
    genera_gasto: sequelize.import('./genera_gasto'),
    otorga: sequelize.import('./otorga'),

}

models.sequelize = sequelize
models.Sequelize = Sequelize

module.exports = models