module.exports = (sequelize, DataTypes) => {
    const Genera_gasto = sequelize.define('Genera_gasto', {
        id_gasto: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        id_inmueble: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        active: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    }, { timestamps: false });
    return Genera_gasto
}