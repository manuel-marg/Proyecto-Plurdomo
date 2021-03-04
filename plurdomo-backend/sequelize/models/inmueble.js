module.exports = (sequelize, DataTypes) => {
    const Inmueble = sequelize.define('inmueble', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        alicuota: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        numero: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: true
        },
        piso: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        saldo: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        id_propietario: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        id_inmueble: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        tipo: {
            type: DataTypes.STRING,
            allowNull: true
        },
        active: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    }, { timestamps: false });

    return Inmueble
}