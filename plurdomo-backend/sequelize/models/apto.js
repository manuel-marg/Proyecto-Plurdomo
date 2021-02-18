
module.exports = (sequelize, DataTypes) =>{
    const Apto = sequelize.define('apto',{
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nro: {
            type: DataTypes.INTEGER,
            allowNull: false
        },       
        piso: {
            type: DataTypes.INTEGER,
            allowNull: false
        },       
        id_edf: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        id_inmueble: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        active: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    }, { timestamps: false });

    return Apto
}