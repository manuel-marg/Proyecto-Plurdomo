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
            type: DataTypes.FLOAT,
            allowNull: false
        },
        gastos_nocomunes: {
            type: DataTypes.FLOAT,
            allowNull: false
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
            type: DataTypes.INT,
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