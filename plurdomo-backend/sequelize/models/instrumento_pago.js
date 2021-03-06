module.exports = (sequelize, DataTypes) => {
    const Instrumento_pago = sequelize.define('Instrumento_pago', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        tipo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        referencia: {
            type: DataTypes.STRING,
            allowNull: false
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
        id_pago: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        active: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    }, { timestamps: false });
    return Instrumento_pago
}