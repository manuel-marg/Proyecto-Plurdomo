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
        }

    },
    Mutation: {
        async createPropietario(root, { nombre, apellido, email, cedula, telefono, clave, active }, { models }) {
            return await models.propietario.create({ nombre, apellido, email, cedula, telefono, clave, active })
        },
        async updatePropietario(root, { id, nombre, apellido, email, cedula, telefono, clave, active }, { models }) {
            await models.propietario.update({ nombre, apellido, email, cedula, telefono, clave, active }, { where: { id: id } });
            return models.propietario.findByPk(id)
        },
    }

}

module.exports = resolvers