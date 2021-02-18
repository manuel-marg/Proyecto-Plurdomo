module.exports = (sequelize, DataTypes) =>{
    const Casa = sequelize.define('casa',{
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },       
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        nro: {
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

    return Casa
}