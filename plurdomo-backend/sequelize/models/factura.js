module.exports = (sequelize, DataTypes) => {
    const Factura = sequelize.define('Factura', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: true
        },
        gastos_comunes: {
            type: DataTypes.STRING,
            allowNull: true
        },
        gastos_nocomunes: {
            type: DataTypes.STRING,
            allowNull: true
        },
        deuda_total: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        alicuota: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        saldo: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        id_inmueble: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        dia_em: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        mes_em: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        anio_em: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        n_factura: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        active: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    }, { timestamps: false });
    return Factura
}