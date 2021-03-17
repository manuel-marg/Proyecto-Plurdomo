module.exports = (sequelize, DataTypes) => {
    const Otorga = sequelize.define('Otorga', {
        id_gasto_referenciado: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        id_factura_referenciado: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        monto_alicouta: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        active: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    }, { timestamps: false });
    return Otorga
}