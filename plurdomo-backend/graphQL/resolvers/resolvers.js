const resolvers = {

    Query: {

        async getPropietarios(root, args, { models }) {
            return await models.propietario.findAll({ where: { active: true } });
        },
        async getPropietario(root, args, { models }) {
            return await models.propietario.findByPk(args.id)
        },


    },
    Mutation: {
        async createPropietario(root, { nombre, apellido, email, active }, { models }) {
            return await models.propietario.create({ nombre, apellido, email, active })
        },
        async updatePropietario(root, { id, nombre, apellido, email, active }, { models }) {
            await models.propietario.update({ nombre, apellido, email, active }, { where: { id: id } });
            return models.propietario.findByPk(id)
        }
    }

}

module.exports = resolvers