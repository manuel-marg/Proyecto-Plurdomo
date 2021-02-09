const resolvers = {

    Query: {

        async getPropietarios(root, args, { models }) {
            return await models.propietario.findAll()
        },
        async getPropietario(root, args, { models }) {
            return await models.propietario.findByPk(args.id)
        }

    },
    Mutation: {
        async createPropietario(root, { nombre, apellido, email, active }, { models }) {
            return await models.propietario.create({ nombre, apellido, email, active })
        }
    }

}

module.exports = resolvers