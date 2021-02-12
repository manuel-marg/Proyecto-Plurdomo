
module.exports = (sequelize, DataTypes) =>{
    const Apto = sequelize.define('apto',{
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        id_propietario: {
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
        alicuota:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        saldo:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        gastos:{
            type: DataTypes.STRING,
            allowNull: false
        },
        active: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    }, { timestamps: false });

    return Apto
}