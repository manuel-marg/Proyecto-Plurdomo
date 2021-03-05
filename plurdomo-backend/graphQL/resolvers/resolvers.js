const resolvers = {

    Query: {

        async getPropietarios(root, args, { models }) {
            return await models.propietario.findAll({ where: { active: true } });
        },
        async getPropietario(root, args, { models }) {
            return await models.propietario.findByPk(args.id)
        },

        async getAptos(root, args, { models }) {
            return await models.inmueble.findAll({ where: { active: true, tipo: "apto" } })
        },

        async getInmuebles(root, args, { models }) {
            return await models.inmueble.findAll({ where: { active: true } })
        },
        async getInmueble(root, args, { models }) {
            return await models.inmueble.findByPk(args.id)
        },

        async getCasas(root, args, { models }) {
            return await models.inmueble.findAll({ where: { active: true, tipo: "casa" } })
        },

        async getEdfs(root, args, { models }) {
            return await models.inmueble.findAll({ where: { active: true, tipo: "edificio" } })
        },

        async getCondominios(root, args, { models }) {
            return await models.condominio.findAll({ where: { active: true } })
        },
        async getCondominio(root, args, { models }) {
            return await models.condominio.findByPk(args.id)
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

    }
}
module.exports = resolvers