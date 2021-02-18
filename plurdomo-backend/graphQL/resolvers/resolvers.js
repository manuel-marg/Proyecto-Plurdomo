const resolvers = {

    Query: {

        async getPropietarios(root, args, { models }) {
            return await models.propietario.findAll({ where: { active: true } });
        },
        async getPropietario(root, args, { models }) {
            return await models.propietario.findByPk(args.id)
        },

        async getAptos(root, args, { models }) {
            return await models.apto.findAll({ where: { active: true } })
        },
        async getApto(root, args, { models }) {
            return await models.apto.findByPk(args.id)
        },

        async getInmuebles(root, args, { models }) {
            return await models.inmueble.findAll({ where: { active: true } })
        },
        async getInmueble(root, args, { models }) {
            return await models.inmueble.findByPk(args.id)
        },

        async getCasas(root, args, { models }) {
            return await models.casa.findAll({ where: { active: true } })
        },
        async getCasa(root, args, { models }) {
            return await models.casa.findByPk(args.id)
        },

        async getEdfs(root, args, { models }) {
            return await models.edf.findAll({ where: { active: true } })
        },
        async getEdf(root, args, { models }) {
            return await models.edf.findByPk(args.id)
        },

    },
    Mutation: {
//---------------PROPIETARIO--------------
        async createPropietario(root, { nombre, apellido, email, cedula, telefono, clave, active }, { models }) {
            return await models.propietario.create({ nombre, apellido, email, cedula, telefono, clave, active })
        },
        async updatePropietario(root, { id, nombre, apellido, email, cedula, telefono, clave, active }, { models }) {
            await models.propietario.update({ nombre, apellido, email, cedula, telefono, clave, active }, { where: { id: id } });
            return models.propietario.findByPk(id)
        },

//----------------INMUEBLE----------------
        async createInmueble(root, { alicuota, saldo, id_propietario, active }, { models }) {
            return await models.inmueble.create({ alicuota, saldo, id_propietario, active })
        },
        async updateInmueble(root, { alicuota, saldo, id_propietario, active }, { models }) {
            await models.inmueble.update({ alicuota, saldo, id_propietario, active }, { where: { id: id } });
            return models.inmueble.findByPk(id)
        },

//---------------APARTAMENTO-----------------
        async createApto(root, { nro, piso, id_edf, id_inmueble, active }, { models }) {
            return await models.apto.create({ nro, piso, id_edf, id_inmueble, active })
        },
        async updateApto(root, { nro, piso, id_edf, id_inmueble, active }, { models }) {
            await models.apto.update({ nro, piso, id_edf, id_inmueble, active }, { where: { id: id } });
            return models.apto.findByPk(id)
        },

//------------------CASA-----------------
        async createCasa(root, { nombre, nro, id_inmueble, active }, { models }) {
            return await models.casa.create({ nombre, nro, id_inmueble, active })
        },
        async updateCasa(root, { nombre, nro, id_inmueble, active }, { models }) {
            await models.casa.update({ nombre, nro, id_inmueble, active }, { where: { id: id } });
            return models.casa.findByPk(id)
        },

//----------------EDIFICIO-----------------
        async createEdf(root, { nombre, cantidad_aptos, active }, { models }) {
            return await models.edf.create({ nombre, cantidad_aptos, active })
        },
        async updateEdf(root, { nombre, active }, { models }) {
            await models.edf.update({ nombre, active }, { where: { id: id } });
            return models.edf.findByPk(id)
        },

    }

}

module.exports = resolvers