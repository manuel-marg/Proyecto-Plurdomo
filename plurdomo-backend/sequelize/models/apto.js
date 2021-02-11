
module.exports = (sequelize, DataTypes) =>{
    const Apto = sequelize.define('apto',{
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        owner: {
            type: DataTypes.STRING,
            allowNull: false
        },       
        piso: {
            type: DataTypes.INTEGER,
            allowNull: false
        },       
        edf: {
            type: DataTypes.STRING,
            allowNull: false
        },
        active: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    }, );

    return Apto
}