const resolvers = {

    Query: {
        //------------PROPIETARIOS---------------
        async getPropietarios(root, args, { models }) {
            return await models.propietario.findAll({ where: { active: true } });
        },
        async getPropietario(root, args, { models }) {
            return await models.propietario.findByPk(args.id)
        },

        //------------APARTAMENTOS---------------
        async getAptos(root, args, { models }) {
            return await models.inmueble.findAll({ where: { active: true, tipo: "apto" } })
        },

        async getAptosEdificio(root, args, { models }) {
            return await models.inmueble.findAll({ where: { active: true, tipo: "apto", id_inmueble: args.id_inmueble } })
        },

        //------------INMUEBLES---------------
        async getInmuebles(root, args, { models }) {
            return await models.inmueble.findAll({ where: { active: true } })
        },
        async getInmueble(root, args, { models }) {
            return await models.inmueble.findByPk(args.id)
        },

        //----------------CASAS---------------
        async getCasas(root, args, { models }) {
            return await models.inmueble.findAll({ where: { active: true, tipo: "casa" } })
        },

        //--------------EDIFICIOS---------------
        async getEdfs(root, args, { models }) {
            return await models.inmueble.findAll({ where: { active: true, tipo: "edificio" } })
        },

        //---------------CONDOMINIO---------------
        async getCondominios(root, args, { models }) {
            return await models.condominio.findAll({ where: { active: true } })
        },
        async getCondominio(root, args, { models }) {
            return await models.condominio.findByPk(args.id)
        },
        //-----------------GASTOS-----------------
        async getGastos(root, args, { models }) {
            return await models.gasto.findAll({ where: { active: true } })
        },
        async getGasto(root, args, { models }) {
            return await models.gasto.findByPk(args.id)
        },
        //-------------INSTRUMENTO DE PAGO---------------
        async getInstrumentos(root, args, { models }) {
            return await models.instrumento_pago.findAll({ where: { active: true } })
        },
        async getInstrumento(root, args, { models }) {
            return await models.instrumento_pago.findByPk(args.id)
        },

        //-----------------PAGO---------------
        async getPagos(root, args, { models }) {
            return await models.pago.findAll({ where: { active: true } })
        },
        async getPago(root, args, { models }) {
            return await models.pago.findByPk(args.id)
        },

        //------------GENERAR GASTOS--------------
        async getGenerados(root, args, { models }) {
            return await models.genera_gasto.findAll({ where: { active: true } })
        },

    },
    Mutation: {
        //---------------PROPIETARIO--------------
        async createPropietario(root, { nombre, apellido, email, cedula, telefono, clave, administrador, active }, { models }) {
            return await models.propietario.create({ nombre, apellido, email, cedula, telefono, clave, administrador, active })
        },
        async updatePropietario(root, { id, nombre, apellido, email, cedula, telefono, clave, administrador, active }, { models }) {
            await models.propietario.update({ nombre, apellido, email, cedula, telefono, clave, administrador, active }, { where: { id: id } });
            return models.propietario.findByPk(id)
        },

        //----------------INMUEBLE----------------
        async createInmueble(root, { alicuota, numero, nombre, piso, saldo, id_propietario, id_inmueble, tipo, active }, { models }) {
            return await models.inmueble.create({ alicuota, numero, nombre, piso, saldo, id_propietario, id_inmueble, tipo, active })
        },
        async updateInmueble(root, { id, alicuota, numero, nombre, piso, saldo, id_propietario, id_inmueble, tipo, active }, { models }) {
            await models.inmueble.update({ alicuota, numero, nombre, piso, saldo, id_propietario, id_inmueble, tipo, active }, { where: { id: id } });
            return models.inmueble.findByPk(id)
        },

        //---------------CONDOMINIO------------------
        async createCondominio(root, { nombre, municipio, estado, codigo_urb, active }, { models }) {
            return await models.condominio.create({ nombre, municipio, estado, codigo_urb, active })
        },
        async updateCondominio(root, { id, nombre, municipio, estado, codigo_urb, active }, { models }) {
            await models.condominio.update({ nombre, municipio, estado, codigo_urb, active }, { where: { id: id } });
            return models.condominio.findByPk(id)
        },

        //---------------GASTOS------------------
        async createGasto(root, { monto, dia, mes, anio, concepto, tipo, active }, { models }) {
            return await models.gasto.create({ monto, dia, mes, anio, concepto, tipo, active })
        },
        async updateGasto(root, { id, monto, dia, mes, anio, concepto, tipo, active }, { models }) {
            await models.gasto.update({ monto, dia, mes, anio, concepto, tipo, active }, { where: { id: id } });
            return models.gasto.findByPk(id)
        },


        //----------INSTRUMENTO DE PAGO---------------
        async createInstrumento(root, { tipo, referencia, monto, dia, mes, anio, id_pago, active }, { models }) {
            return await models.instrumento_pago.create({ tipo, referencia, monto, dia, mes, anio, id_pago, active })
        },
        async deleteInstrumento(root, { id, tipo, referencia, monto, dia, mes, anio, id_pago, active }, { models }) {
            await models.instrumento_pago.update({ active }, { where: { id: id } });
            return models.instrumento_pago.findByPk(id)
        },

        //----------------PAGO-----------------------
        async createPago(root, { monto, dia, mes, anio, id_factura, active }, { models }) {
            return await models.pago.create({ monto, dia, mes, anio, id_factura, active })
        },
        async updatePago(root, { id, monto, dia, mes, anio, id_factura, active }, { models }) {
            await models.pago.update({ monto, dia, mes, anio, id_factura, active }, { where: { id: id } });
            return models.pago.findByPk(id)
        },

        //---------------FACTURA------------------
        async createFactura(root, { nombre, gastos_comunes, gastos_nocomunes, deuda_total, alicuota, saldo, id_inmueble, dia_em, mes_em, anio_em, n_factura, active }, { models }) {
            return await models.gasto.create({ nombre, gastos_comunes, gastos_nocomunes, deuda_total, alicuota, saldo, id_inmueble, dia_em, mes_em, anio_em, n_factura, active })
        },
        async updateFactura(root, { id, nombre, gastos_comunes, gastos_nocomunes, deuda_total, alicuota, saldo, id_inmueble, dia_em, mes_em, anio_em, n_factura, active }, { models }) {
            await models.gasto.update({ nombre, gastos_comunes, gastos_nocomunes, deuda_total, alicuota, saldo, id_inmueble, dia_em, mes_em, anio_em, n_factura, active }, { where: { id: id } });
            return models.gasto.findByPk(id)
        },

        //------------GENERAR GASTOS--------------
        async generarGasto(root, { id_gasto, id_inmueble, active }, { models }) {
            return await models.genera_gasto.create({ id_gasto, id_inmueble, active })
        },
    }
}
module.exports = resolvers