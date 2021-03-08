module.exports = (sequelize, DataTypes) => {
    const Gasto = sequelize.define('Gasto', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        monto: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        tipo: {
            type: DataTypes.STRING,
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
        concepto: {
            type: DataTypes.STRING,
            allowNull: false
        },
        historico: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        active: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    }, { timestamps: false });
    return Gasto
}