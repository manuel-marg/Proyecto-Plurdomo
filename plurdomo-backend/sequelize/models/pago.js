module.exports = (sequelize, DataTypes) => {
    const Pago = sequelize.define('Pago', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        monto: {
            type: DataTypes.FLOAT,
            allowNull: false
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
        pendiente: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        pagado: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        active: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    }, { timestamps: false });
    return Pago
}