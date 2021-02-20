module.exports = (sequelize, DataTypes) =>{
    const Inmueble = sequelize.define('inmueble',{
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        alicuota: {
            type: DataTypes.FLOAT,
            allowNull: false
        },       
        saldo: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        id_propietario: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        active: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    }, { timestamps: false });

    return Inmueble
}