module.exports = (sequelize, DataTypes) => {
    const Pago = sequelize.define('Pago', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        dia: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        
        mes: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        
        anio: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        id_factura: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        active: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    }, { timestamps: false });
    return Pago
}